import React from "react";
import { View, Text, Dimensions, SafeAreaView } from "react-native";
import { getTimeForTimezone, getTimeZoneName } from "../components/utils";
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
      <View
        style={{
          width: Dimensions.get("window").width * 0.8,
          marginBottom: 20,
          flex: 1,
          justifyContent: "space-around",
        }}
      >
        <LiveClock timeZone={timeZone} />
        <View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Button
              buttonStyle={{
                width: Dimensions.get("window").width * 0.38,
                borderWidth: timeZone === "IST" ? 2 : 1,
                marginHorizontal: 3,
              }}
              title="IST"
              onPress={() => selectTimeZone("IST")}
            />
            <Button
              buttonStyle={{
                width: Dimensions.get("window").width * 0.38,
                borderWidth: timeZone === "PST" ? 2 : 1,
              }}
              title="PST"
              onPress={() => selectTimeZone("PST")}
            />
          </View>

          <Button
            title="GO BACK"
            onPress={goHome}
            buttonStyle={{
              borderWidth: 0,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Clock;
