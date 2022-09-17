import React from "react";
import { View, Text, Alert, Dimensions, StyleSheet } from "react-native";
import { convertSecondsToHMS } from "./utils";

function CountDown(props) {
  const [time, setTime] = React.useState(0);
  const timerRef = React.useRef(time);
  let timerCallback = () => {};

  const timerEnded = (time) => {
    Alert.alert(`${time} seconds timer ended`);
    props.deleteTimer(props.id);
  };

  const updateTime = (time) => {
    if (timerRef.current === null) return;
    timerRef.current -= 1;
    setTime(timerRef.current);
    if (timerRef.current === 0) {
      timerEnded(time);
    }
  };

  const setTimer = (time) => {
    setTime(time);
    timerRef.current = time;
    timerCallback = setInterval(() => {
      updateTime(time);
    }, 1000);
  };

  React.useEffect(() => {
    setTimer(props.time);
    return () => {
      clearInterval(timerCallback);
    };
  }, []);

  const handleDeleteTimer = () => {
    timerRef.current = null;
    props.deleteTimer(props.id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.countDown}>{convertSecondsToHMS(time)}</Text>

      <Text style={styles.closeButton} onPress={handleDeleteTimer}>
        X
      </Text>
    </View>
  );
}

export default CountDown;

const styles = StyleSheet.create({
  closeButton: {
    fontSize: 30,
    color: "#00000",
    fontWeight: "bold",
    marginLeft: 5,
  },
  countDown: {
    fontSize: 30,
    color: "#00000",
    fontWeight: "bold",
  },
  container: {
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    width: Dimensions.get("window").width * 0.8,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});
