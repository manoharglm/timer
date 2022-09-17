import React from "react";
import { View, Text } from "react-native";
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
    const timeInMilliSeconds = timerRef.current.getTime();
    timerRef.current = new Date(timeInMilliSeconds + 1000);
    setTime(timerRef.current);
  };

  const getTime = async (timeZone) => {
    const timeZoneName = getTimeZoneName(timeZone);
    const timeObj = await getTimeForTimezone(timeZoneName);
    timerRef.current = new Date(
      timeObj.datetime.slice(0, timeObj.datetime.length - 6).concat("+05:30")
    );
    console.log(timerRef.current);
    setTime(timerRef.current);
  };

  return (
    <View
      style={{
        justifyContent: "center",
        alignSelf: "center",
        paddingHorizontal: 10,
        flex: 1,
      }}
    >
      {time && (
        <Text
          style={{
            fontSize: 30,
            color: "#00000",
            fontWeight: "bold",
            borderWidth: 1,
            borderRadius: 5,
            padding: 20,
          }}
        >
          {time?.toLocaleTimeString && time.toLocaleTimeString()}
        </Text>
      )}
    </View>
  );
}

export default LiveClock;
