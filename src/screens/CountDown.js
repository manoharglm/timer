import React from "react";
import {
  View,
  Text,
  Alert,
  Button,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
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
    <View
      style={{
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        margin: 10,
        // alignItems: "center",
        width: Dimensions.get("window").width * 0.8,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
      }}
    >
      <Text
        style={{
          fontSize: 30,
          color: "#00000",
          fontWeight: "bold",
        }}
      >
        {convertSecondsToHMS(time)}
      </Text>

      <Text
        style={{
          fontSize: 30,
          color: "#00000",
          fontWeight: "bold",
          marginLeft: 5,
        }}
        onPress={handleDeleteTimer}
      >
        X
      </Text>
    </View>
  );
}

export default CountDown;
