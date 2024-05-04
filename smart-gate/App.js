import React from "react";
import { StatusBar, LogBox } from "react-native";
import Routes from "./src/Routes/routes.js";
import { QueryClient, QueryClientProvider } from "react-query";
import { PaperProvider } from "react-native-paper";
import "react-native-reanimated";
import "react-native-gesture-handler";

import { useOnlineManager } from "./src/Hooks/useOnlineManager";

const queryClient = new QueryClient();
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

export default function App() {
  useOnlineManager();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <PaperProvider>
          <StatusBar translucent backgroundColor={"black"} />
          <Routes />
        </PaperProvider>
      </QueryClientProvider>
    </>
  );
}
