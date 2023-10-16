import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Gradient } from "../../../global";
import { LineChart, ProgressChart } from "react-native-chart-kit";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Chip, Divider } from "react-native-paper";

const UserChart_home = () => {
  return (
    <Gradient>
      <Text
        style={{
          color: "white",
          fontSize: 20,
          fontWeight: "bold",
          marginTop: 40,
        }}
      >
        Mis Eco - equivalencias: 18
        <MaterialCommunityIcons
          name="weight-kilogram"
          size={24}
          color="white"
        />
      </Text>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          //   bottom: 10,
          top: 10,
        }}
      >
        <LineChart
          data={{
            labels: ["Octubre", "Noviembre", "Diciembre", "Enero"],
            datasets: [
              {
                data: [
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width - 38} // from react-native
          // width={Dimensions.get("window").width}
          height={200}
          // yAxisLabel="$"
          yAxisSuffix="kg"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#bdf26d",
            backgroundGradientFrom: "#bdf26d",
            backgroundGradientTo: "#494",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 10,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#b1b1b1",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
      {/* ----- */}
      <View style={styles.content_glass}>
        <Text style={{ color: "white" }}>Evitaste el consumo de:</Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "flex-start",
          }}
        >
          <View style={styles.columns}>
            <Chip
              style={styles.chip_style}
              icon="information"
              onPress={() => console.log("Pressed")}
            >
              Arboles
              <Divider />
              {/* {"\n"} */}
              0.006
            </Chip>
            <Chip
              style={styles.chip_style}
              icon="information"
              onPress={() => console.log("Pressed")}
            >
              Litros de agua {"\n"} 0.05
            </Chip>
            <Chip
              style={styles.chip_style}
              icon="information"
              onPress={() => console.log("Pressed")}
            >
              <Text>Kwh de energia</Text>
              <Text>Kwh de energia</Text>
            </Chip>
          </View>
          <View style={styles.columns}>
            <Chip
              style={styles.chip_style}
              icon="information"
              onPress={() => console.log("Pressed")}
            >
              Litros de petroleo
            </Chip>
            <Chip
              style={styles.chip_style}
              icon="information"
              onPress={() => console.log("Pressed")}
            >
              Kilos de CO2
            </Chip>
            <Chip
              style={styles.chip_style}
              icon="information"
              onPress={() => console.log("Pressed")}
            >
              Horas de un foco
            </Chip>
          </View>
        </View>
      </View>
    </Gradient>
  );
};

export default UserChart_home;
const styles = StyleSheet.create({
  content_glass: {
    flex: 1,
    width: "90%",
    height: "55%",
    position: "absolute",
    bottom: 15,
    borderRadius: 20,
    margin: "auto",
    marginLeft: 20,
    // marginRight: 15,
    display: "flex",
    flexWrap: "wrap",
    // flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "space-around",
    backgroundColor: "rgba(192, 192, 192, .2)",
    // opacity: 0.2,
  },
  columns: {
    width: "50%",
    marginVertical: 5,
    // padding: 10,
  },
  chip_style: {
    margin: 5,
    height: 60,
    display: "flex",
    flexDirection: "column",
  },
});
