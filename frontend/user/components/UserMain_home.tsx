import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ReceptionPageStyles } from "../../collection_center/components/reception";
import { BlurView } from "expo-blur";
import { getToDataUser } from "../services/user_service";
import { Data } from "../../Types";

// fetchData();

function UserMain_home() {
  const [dataUser, setDataUser] = useState<Data[]>();

  async function fetchData() {
    const dataUserBasic = await getToDataUser();
    setDataUser(dataUserBasic);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={ReceptionPageStyles.container}>
      <LinearGradient
        colors={[
          "rgba(119, 166, 73, 1)",
          "rgba(0, 0, 0, 0.8)",
          "rgba(0, 0, 0, 1)",
          "rgba(0, 0, 0, 1)",
          "rgba(0, 0, 0, 1)",
        ]}
        style={ReceptionPageStyles.background}
      />
      <View style={styles.box}>
        <BlurView intensity={10} style={styles.blurContainer}>
          {dataUser?.map((item) => (
            <View style={styles.contentData} key={item.id}>
              <Image
                style={{ width: 100, height: 100, borderRadius: 50 }}
                source={{ uri: item.url }}
              />
              <Text style={styles.text}>Hola! {item.title.split(" ")[0]}</Text>
            </View>
          ))}
          <Text style={styles.textMain}>
            Bienvenidos a Reciclas la mejor App de reciclaje.
          </Text>
        </BlurView>
      </View>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          width: "100%",
          height: "60%",
          position: "absolute",
          bottom: 0,
        }}
      >
        <BlurView intensity={10} style={styles.blurContainer}>
          <Text style={styles.text}>{JSON.stringify(dataUser)}</Text>
        </BlurView>
      </ScrollView>
      {/* <View style={styles.boxProgress}>
        
      </View> */}
    </View>
  );
}

export default UserMain_home;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "600",
    color: "#b5b5b5",
    textShadowColor: "transparent",
    fontStyle: "normal",
    opacity: 1,
  },
  textMain: {
    fontSize: 16,
    fontWeight: "400",
    color: "#b5b5b5",
    padding: 20,
    textAlign: "center",
    //corregir
    // textShadowColor: "transparent",
    // fontStyle: "normal",
    // opacity: 1,
    // fontVariant: "small-caps",
    // borderColor: "black",
  },
  blurContainer: {
    flex: 1,
    padding: 20,
    margin: 16,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: 20,
  },
  box: {
    width: "100%",
    height: "35%",
    position: "absolute",
    bottom: 440,
  },
  boxProgress: {
    width: "100%",
    height: "60%",
    position: "absolute",
    bottom: 0,
  },
  contentData: {
    width: "100%",
    display: "flex",
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "space-around",
  },
});
