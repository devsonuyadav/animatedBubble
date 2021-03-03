import React, { useRef, useEffect } from "react";
import { View, Dimensions, Animated, StyleSheet } from "react-native";

const { width } = Dimensions.get("screen");

const App = () => {
  const coreFirst = useRef(new Animated.Value(0)).current;
  const coreSecond = useRef(new Animated.Value(0)).current;
  const coreThird = useRef(new Animated.Value(0)).current;
  const opacityFirstCore = coreFirst.interpolate({
    inputRange: [0, 0.5],
    outputRange: [1, 0],
  });
  const opacitySecondCore = coreSecond.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });
  const opacityThirdCore = coreThird.interpolate({
    inputRange: [0, 1.5],
    outputRange: [1, 0],
  });

  useEffect(() => {
    Animated.parallel([
      Animated.loop(
        Animated.timing(coreFirst, {
          toValue: 0.5,
          duration: 1400,
          useNativeDriver: true,
        })
      ),
      Animated.loop(
        Animated.timing(coreSecond, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        })
      ),
      Animated.loop(
        Animated.timing(coreThird, {
          toValue: 1.5,
          duration: 1600,
          useNativeDriver: true,
        })
      ),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.bubble,
          {
            opacity: opacityFirstCore,
            transform: [
              {
                scale: coreFirst,
              },
            ],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.bubble,
          {
            opacity: opacitySecondCore,
            transform: [
              {
                scale: coreSecond,
              },
            ],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.bubble,
          {
            opacity: opacityThirdCore,
            transform: [
              {
                scale: coreThird,
              },
            ],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  bubble: {
    width: width / 2,
    height: width / 2,
    backgroundColor: "rgb(32, 232, 32)",
    alignSelf: "center",
    borderRadius: width / 2,
    position: "absolute",
  },
});

export default App;
