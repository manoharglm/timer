import React from "react";
import { StyleSheet, View } from "react-native";
import Button from "../components/Button";

export default function Home(props) {
  return (
    <View style={styles.container}>
      <Button
        title="GOTO TIMER"
        onPress={() => props.setCurrentScreen("TIMER")}
      />
      <Button
        title="GOTO CLOCK"
        onPress={() => props.setCurrentScreen("CLOCK")}
      />
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
