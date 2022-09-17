import React from "react";
import {
  View,
  TextInput,
  FlatList,
  Dimensions,
  Keyboard,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import CountDown from "../components/CountDown";
import { getUniqueId } from "../components/utils";
import Button from "../components/Button";

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
    if (inputTime) {
      Keyboard.dismiss();
      const timeInSeconds = inputTime
        .split(":")
        .reduce((acc, time) => 60 * acc + +time);
      setTimers([...timers, { time: timeInSeconds, id: getUniqueId() }]);
      setInputTime("");
    }
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

  const goHome = () => {
    props.setCurrentScreen("HOME");
  };

  return (
    <SafeAreaView>
      <FlatList
        contentContainerStyle={styles.timersList}
        data={timers}
        renderItem={renderTimer}
      />
      <View style={styles.buttonContainer}>
        <TextInput
          style={styles.durationInput}
          value={inputTime}
          onChangeText={handleInput}
          autoFocus
          keyboardType="number-pad"
          placeholder={"00:00.00"}
        />
        <Button title="ADD TIMER" onPress={addTimer} />
        <Button
          title="GO BACK"
          onPress={goHome}
          buttonStyle={styles.goBackButton}
        />
      </View>
    </SafeAreaView>
  );
}

export default Timer;

const styles = StyleSheet.create({
  goBackButton: {
    borderWidth: 0,
  },
  durationInput: {
    borderColor: "#000000",
    borderWidth: 1,
    alignSelf: "center",
    width: Dimensions.get("window").width * 0.8,
    height: 50,
    color: "#00000",
    fontSize: 16,
    paddingLeft: 10,
  },
  buttonContainer: {
    width: Dimensions.get("window").width * 0.8,
    marginBottom: 20,
    alignSelf: "center",
  },
  timersList: {
    margin: 15,
    marginVertical: 50,
  },
});
