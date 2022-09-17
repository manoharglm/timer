import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import Timer from "./src/screens/Timer";
import Home from "./src/screens/Home";
import Clock from "./src/screens/Clock";

export default function App() {
  const [currentScreen, setCurrentScreen] = React.useState("HOME");

  // const ActiveScreen = (currentScreen) => {
  //   console.log(currentScreen);
  //   switch (currentScreen) {
  //     case "TIMER":
  //       return <Timer setCurrentScreen={setCurrentScreen} />;
  //     default:
  //       return <Home setCurrentScreen={setCurrentScreen} />;
  //   }
  // };

  return (
    <View style={styles.container}>
      {currentScreen === "HOME" ? (
        <Home setCurrentScreen={setCurrentScreen} />
      ) : currentScreen === "TIMER" ? (
        <Timer setCurrentScreen={setCurrentScreen} />
      ) : currentScreen === "CLOCK" ? (
        <Clock setCurrentScreen={setCurrentScreen} />
      ) : null}
      {/* <ActiveScreen currentScreen={currentScreen} /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
