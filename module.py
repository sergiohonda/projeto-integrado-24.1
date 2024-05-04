import cv2
import pytesseract
import easyocr
import numpy as np

pytesseract.pytesseract.tesseract_cmd = "C:\Program Files\Tesseract-OCR\Tesseract.exe"

# Load the Image File -- Car or Vehicle Image with Number Plate / License Plate Visible
image = cv2.imread('placa3.png')

# Convert the image to Grayscale
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

# Apply Gaussian Blur to reduce noise and improve OCR accuracy
blurred = cv2.GaussianBlur(gray, (5, 5), 0)

# Perform Edge Detection
edges = cv2.Canny(blurred, 50, 150)

# Find Contours in the Edge-Detected Image
contours, _ = cv2.findContours(edges.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

# Filter out small contours which are not needed
# min_area = 1000 # you can fine tune this value based on test results
# Calculate the minimum area based on a percentage of the image size
image_height, image_width = image.shape[:2]
min_area_percentage = 0.3  # Adjust this value as needed
min_area = int(image_height * image_width * min_area_percentage)

valid_contours = []
for contour in contours:
    (x, y, w, h) = cv2.boundingRect(contour)
    
    if cv2.contourArea(contour) > min_area:
        valid_contours.append(contour)

#valid_contours = [contour for contour in contours if cv2.contourArea(contour) > min_area]

# Sort only on the contours by their x-coordinate to approximate the order of characters
valid_contours.sort(key=lambda c: cv2.boundingRect(c)[0])

# Initialize an empty list to store recognized characters
recognized_characters = []
i = 0
# Iterate through the valid contours and extract characters using OCR
for contour in valid_contours:
    i = i + 1
    # Create a mask using the selected contour
    mask = np.zeros_like(gray)
    cv2.drawContours(mask, [contour], -1, (255), thickness=cv2.FILLED)

    # Apply the mask to the original image to get the new image with the contour
    result = cv2.bitwise_and(image, image, mask=mask)

    # Save the new image as a file which only contains License Plate / Number Plate Data
    cv2.imwrite(str(i)+'_contour_image.jpg', result)

    # Display the new image if required
    cv2.imshow('Contour Image', result)
    cv2.waitKey(0)

    x, y, w, h = cv2.boundingRect(contour)
    roi = gray[y:y + h, x:x + w]

    # Extract Data from License Plate Image Segment using pytesseract
    # character = pytesseract.image_to_string(roi, config='--psm 7 -l eng')
    # Fine Tune Config if required
    character = pytesseract.image_to_string(roi, config='--psm 11')
    
    # Append the recognized character to the list
    recognized_characters.append(character)

# Combine the recognized characters into a single string (the license plate)
license_plate = ''.join(recognized_characters)

# Print the recognized License Plate Data
print("Recognized License Plate Using pytesseract:", license_plate)

# Display the original image with bounding boxes around characters (optional)
for contour in valid_contours:
    x, y, w, h = cv2.boundingRect(contour)
    cv2.rectangle(image, (x, y), (x + w, y + h), (0, 255, 0), 2)

# Display Image if required
cv2.imshow("License Plate Detection", image)
cv2.waitKey(0)

# Extract Data from License Plate Image using EasyOCR with Probability
reader = easyocr.Reader(['en'])
identified=0
for x in range (1,i):
    results = reader.readtext(str(x)+'_contour_image.jpg')
    for (bbox, text, prob) in results:
        print(f'Recognized License Plate Using EasyOCR: {text}, Probability: {prob}')

cv2.destroyAllWindows()