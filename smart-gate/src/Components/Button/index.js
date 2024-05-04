import React from 'react';

import { Container, ContentWrapper, Text } from './styles';

const Button = ({
  width,
  text,
  onPress,
  background,
  textColor,
  borderRadius,
  marginBottom,
  fontSize,
  height,
}) => {
  return (
    <Container
      width={width}
      onPress={onPress}
      background={background}
      borderRadius={borderRadius}
      marginBottom={marginBottom}
      height={height}
    >
        <ContentWrapper>
            <Text textColor={textColor} fontSize={fontSize}>
              {text}
            </Text>
        </ContentWrapper>
    </Container>
  );
};

export default Button;
