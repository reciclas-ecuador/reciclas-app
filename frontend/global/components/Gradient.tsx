import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import React from "react";
import { GradientStyles } from "../styles";

type Props = {
  children: React.ReactNode;
};

export function Gradient({ children }: Props) {
  return (
    <View style={GradientStyles.container}>
      <LinearGradient
        colors={[
          // "#9dc565",
          // "#93b662",
          // "#bdf26d",
          // "#aad768",
          // "#96bb63",
          // "#83a05e",
          // "#708459",
          // "#5c6954",
          // "rgba(0, 0, 0, .1)",
          // "rgba(0, 0, 0, .2)",
          // "rgba(0, 0, 0, .3)",
          // "rgba(0, 0, 0, .4)",
          // "rgba(0, 0, 0, .5)",
          // // "rgba(0, 0, 0, .6)",
          // "rgba(0, 0, 0, .7)",
          // // "rgba(0, 0, 0, .8)",
          // "rgba(0, 0, 0, .9)",
          // "rgba(0, 0, 0, 1)",

          //----------
          "rgba(119, 166, 73, 1)",
          "rgba(0, 0, 0, 0.8)",
          "rgba(0, 0, 0, 1)",
          "rgba(0, 0, 0, 1)",
          "rgba(0, 0, 0, 1)",
        ]}
        style={GradientStyles.gradient}
        // start={{ x: 0.5, y: 0.1 }}
        // end={{ x: 0.5, y: 0.6 }}

        // locations={[0.5, 0.8]}
      />
      {children}
    </View>
  );
}

export function GradientLogin({ children }: Props) {
  return (
    <View style={GradientStyles.container}>
      <LinearGradient
        colors={[
          // "#9dc565",
          // "#93b662",
          // "#bdf26d",
          // "#aad768",
          // "#96bb63",
          // "#83a05e",
          // "#708459",
          // "#5c6954",
          // "rgba(0, 0, 0, .1)",
          // "rgba(0, 0, 0, .2)",
          // "rgba(0, 0, 0, .3)",
          // "rgba(0, 0, 0, .4)",
          // "rgba(0, 0, 0, .5)",
          // // "rgba(0, 0, 0, .6)",
          // "rgba(0, 0, 0, .7)",
          // // "rgba(0, 0, 0, .8)",
          // "rgba(0, 0, 0, .9)",
          // "rgba(0, 0, 0, 1)",

          //----------
          "rgba(119, 166, 73, 1)",
          "rgba(0, 0, 0, 0.1)",
          "rgba(0, 0, 0, 0.7)",
          "rgba(0, 0, 0, 0.8)",
          "rgba(0, 0, 0, 0.9)",
          "rgba(0, 0, 0, 1)",
          "rgba(0, 0, 0, 1)",
          "rgba(0, 0, 0, 1)",
        ]}
        style={GradientStyles.gradient}
        start={{ x: 0.2, y: 0.5 }}
        end={{ x: 0.9, y: 1 }}

        // locations={[0.5, 0.8]}
      />
      {children}
    </View>
  );
}
