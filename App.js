import React from "react";
import { StyleSheet, View } from "react-native";
import Timer from "./src/screens/Timer";
import Home from "./src/screens/Home";
import Clock from "./src/screens/Clock";

export default function App() {
  const [currentScreen, setCurrentScreen] = React.useState("HOME");

  return (
    <View style={styles.container}>
      {currentScreen === "HOME" ? (
        <Home setCurrentScreen={setCurrentScreen} />
      ) : currentScreen === "TIMER" ? (
        <Timer setCurrentScreen={setCurrentScreen} />
      ) : currentScreen === "CLOCK" ? (
        <Clock setCurrentScreen={setCurrentScreen} />
      ) : null}
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
