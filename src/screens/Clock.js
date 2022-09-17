import React from "react";
import { View, Dimensions, SafeAreaView, StyleSheet } from "react-native";
import Button from "../components/Button";
import LiveClock from "../components/LiveClock";

function Clock(props) {
  const [timeZone, setTimeZone] = React.useState("IST");

  const goHome = () => {
    props.setCurrentScreen("HOME");
  };

  const selectTimeZone = (timeZone) => {
    setTimeZone(timeZone);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <LiveClock timeZone={timeZone} />
        <View>
          <View style={styles.timeZoneButtonContainer}>
            <Button
              buttonStyle={styles.timeZoneButton(timeZone, "IST")}
              title="IST"
              onPress={() => selectTimeZone("IST")}
            />
            <Button
              buttonStyle={styles.timeZoneButton(timeZone, "PST")}
              title="PST"
              onPress={() => selectTimeZone("PST")}
            />
          </View>

          <Button
            title="GO BACK"
            onPress={goHome}
            buttonStyle={styles.goBackButton}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Clock;

const styles = StyleSheet.create({
  goBackButton: {
    borderWidth: 0,
  },
  timeZoneButtonContainer: {
    flexDirection: "row",
  },
  container: {
    width: Dimensions.get("window").width * 0.8,
    marginBottom: 20,
    flex: 1,
    justifyContent: "space-around",
  },
  timeZoneButton: (timeZone, selectedTimeZone) => {
    return {
      width: Dimensions.get("window").width * 0.38,
      borderWidth: timeZone === selectedTimeZone ? 2 : 1,
      marginHorizontal: 3,
    };
  },
});
