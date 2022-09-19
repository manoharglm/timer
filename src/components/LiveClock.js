import React from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { getTimeForTimezone, getTimeZoneName } from "../components/utils";

function LiveClock(props) {
  const [time, setTime] = React.useState(props.time);
  const timerRef = React.useRef(time);
  let timerCallback = () => {};

  React.useEffect(() => {
    getTime(props.timeZone);
  }, [props.timeZone]);

  React.useEffect(() => {
    timerCallback = setInterval(() => {
      updateTime();
    }, 1000);
    return () => {
      clearInterval(timerCallback);
    };
  }, []);

  const updateTime = () => {
    if (timerRef.current) {
      const timeInMilliSeconds = timerRef.current.getTime();
      timerRef.current = new Date(timeInMilliSeconds + 1000);
      setTime(timerRef.current.toLocaleTimeString());
    }
  };

  const getTime = async (timeZone) => {
    try {
      const timeZoneName = getTimeZoneName(timeZone);
      const timeObj = await getTimeForTimezone(timeZoneName);
      const { year, month, day, hour, minute, seconds } = timeObj;
      timerRef.current = new Date(year, month, day, hour, minute, seconds);
      setTime(timerRef.current.toLocaleTimeString());
    } catch (error) {
      Alert.alert("Failed to get response");
    }
  };

  return (
    <View style={styles.container}>
      {time && <Text style={styles.time}>{time}</Text>}
    </View>
  );
}

export default LiveClock;

const styles = StyleSheet.create({
  time: {
    fontSize: 30,
    color: "#00000",
    fontWeight: "bold",
    borderWidth: 1,
    borderRadius: 5,
    padding: 20,
  },
  container: {
    justifyContent: "center",
    alignSelf: "center",
    paddingHorizontal: 10,
    flex: 1,
  },
});
