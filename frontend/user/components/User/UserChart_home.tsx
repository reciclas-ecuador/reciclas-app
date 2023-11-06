import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { Gradient } from "../../../global";
import { LineChart, ProgressChart } from "react-native-chart-kit";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Chip, Divider } from "react-native-paper";

const { width, height } = Dimensions.get("screen");

const imageW = width * 0.6;
const imageH = imageW * 1;
const data = [
  {
    uri: "https://cdn.dribbble.com/users/3281732/screenshots/11192830/media/7690704fa8f0566d572a085637dd1eee.jpg?compress=1&resize=1200x1200",
    title: "Arboles",
  },
  {
    uri: "https://cdn.dribbble.com/users/3281732/screenshots/13130602/media/592ccac0a949b39f058a297fd1faa38e.jpg?compress=1&resize=1200x1200",
    title: "Litros de agua",
  },
  {
    uri: "https://cdn.dribbble.com/users/3281732/screenshots/9165292/media/ccbfbce040e1941972dbc6a378c35e98.jpg?compress=1&resize=1200x1200",
    title: "Kwh Energía",
  },
  {
    uri: "https://cdn.dribbble.com/users/3281732/screenshots/9165292/media/ccbfbce040e1941972dbc6a378c35e98.jpg?compress=1&resize=1200x1200",
    title: "Litros de Petroleo",
  },
  {
    uri: "https://cdn.dribbble.com/users/3281732/screenshots/9165292/media/ccbfbce040e1941972dbc6a378c35e98.jpg?compress=1&resize=1200x1200",
    title: "Kg de CO2",
  },
  {
    uri: "https://cdn.dribbble.com/users/3281732/screenshots/11192830/media/7690704fa8f0566d572a085637dd1eee.jpg?compress=1&resize=1200x1200",
    title: "Horas de un foco",
  },
];
const UserChart_home = () => {
  return (
    <Gradient>
      <Text
        style={{
          color: "white",
          fontSize: 20,
          fontWeight: "bold",
          marginTop: 40,
          textAlign: "center",
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

      {/* <View style={styles.columns}></View> */}
      <Text style={{ color: "white", marginTop: 30, fontSize: 20 }}>
        Evitaste el consumo de:
      </Text>

      {/* <SafeAreaView> */}
      <View
        style={{
          flex: 1,
          // height: 400,
          // borderColor: "white",
          // borderWidth: 1,
          // width: "90%",

          // marginVertical: 10,
        }}
      >
        {/* <StatusBar hidden /> sirve par quitar la hora */}
        <FlatList
          data={data}
          // fadingEdgeLength={15}
          horizontal
          pagingEnabled
          // keyExtractor={(_, index) => index.toString()}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  width,
                  justifyContent: "center",
                  alignItems: "center",
                  // borderColor: "white",
                  borderWidth: 1,
                  height: "80%",

                  // paddingVertical: 15,
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 20, marginVertical: 10 }}
                >
                  {item.title}
                </Text>
                <Image
                  source={{ uri: item.uri }}
                  style={{
                    width: imageW,
                    height: imageH,
                    resizeMode: "cover",
                    borderRadius: 10,
                  }}
                />
              </View>
            );
          }}
        />
      </View>
      {/* </SafeAreaView> */}
      {/* </View> */}
      {/* </View> */}
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
