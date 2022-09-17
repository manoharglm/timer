import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function BackButton(props) {
  const goHome = () => {
    props.setCurrentScreen("HOME");
  };
  return (
    <TouchableOpacity
      style={{
        alignItems: "flex-end",
        paddingTop: 30,
        position: "absolute",
        right: -20
      }}
    >
      <Text
        style={{
          fontSize: 30,
          color: "#00000",
          fontWeight: "bold",
        }}
        onPress={goHome}
      >
        ⓧ
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
