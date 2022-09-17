import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function BackButton(props) {
  const goHome = () => {
    props.setCurrentScreen("HOME");
  };
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.closeIcon} onPress={goHome}>
        ⓧ
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    fontSize: 30,
    color: "#00000",
    fontWeight: "bold",
  },
  container: {
    alignItems: "flex-end",
    paddingTop: 30,
    position: "absolute",
    right: -20,
  },
});
