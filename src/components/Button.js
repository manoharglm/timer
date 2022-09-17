import React from "react";
import { Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

const Button = ({
  title,
  onPress,
  buttonStyle,
}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        ...buttonStyle,
      }}
      onPress={onPress}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 6,
    width: Dimensions.get("window").width * 0.8,
    marginTop: 5,
  },
  title: {
    color: "#000000",
    fontSize: 16,
  },
});
