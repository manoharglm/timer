import React from "react";
import {
  View,
  Text,
  Alert,
  Button,
  TextInput,
  FlatList,
  Dimensions,
  Keyboard,
} from "react-native";
import CountDown from "./CountDown";
import { getUniqueId } from "./utils";

function Timer(props) {
  const [inputTime, setInputTime] = React.useState("");
  const [timers, setTimers] = React.useState([]);

  const deleteTimer = (timerId) => {
    setTimers((timer) => {
      return timer.filter((timer) => timer.id !== timerId);
    });
  };

  const renderTimer = ({ item }) => {
    return (
      <CountDown time={item.time} id={item.id} deleteTimer={deleteTimer} />
    );
  };

  const addTimer = () => {
    Keyboard.dismiss()
    const timeInSeconds = inputTime
      .split(":")
      .reduce((acc, time) => 60 * acc + +time);
    setTimers([...timers, { time: timeInSeconds, id: getUniqueId() }]);
    setInputTime("");
  };

  const handleInput = (value) => {
    value = value.replace(/[^0-9]/g, "");
    const valueSplit = value.match(/.{1,2}/g);
    if (valueSplit && valueSplit.length && valueSplit.length < 4) {
      value = valueSplit.join(":");
      setInputTime(value);
    } else if (!value) {
      setInputTime(value);
    }
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <FlatList
        contentContainerStyle={{
          margin: 15,
          marginTop: 50,
        }}
        data={timers}
        renderItem={renderTimer}
      />
      <TextInput
        style={{
          borderColor: "black",
          borderWidth: 1,
          width: Dimensions.get("window").width * 0.8,
          alignSelf: "center",
        }}
        value={inputTime}
        onChangeText={handleInput}
        autoFocus
        keyboardType="number-pad"
        placeholder={"00:00.00"}
      />
      <Button
        style={{
          alignSelf: "center",
        }}
        title="ADD TIMER"
        onPress={addTimer}
      />
    </View>
  );
}

export default Timer;
