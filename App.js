import React from 'react';
import Screen from './src/navigation/index'
import { ThemeProvider } from "react-native-rapi-ui";

export default function App() {
  return (
    <ThemeProvider>
      <Screen/>

    </ThemeProvider>
  );
}
  