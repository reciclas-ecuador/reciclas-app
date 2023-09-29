import { Gradient } from "../../../global";
import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { getToDataUser } from "../../services/user_service";
import { Data } from "../../../Types";

const UserMain_home = () => {
  const [dataUser, setDataUser] = useState<Data[]>();

  async function fetchData() {
    const dataUserBasic = await getToDataUser();
    setDataUser(dataUserBasic);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Gradient>
      <View style={styles.box}>
        {dataUser?.map((item) => (
          <View style={styles.contentData} key={item.id}>
            <View>
              <Image
                style={{ width: 100, height: 100, borderRadius: 50 }}
                // source={{ uri: item.url }}
                source={{
                  uri: "https://png.pngtree.com/png-vector/20210426/ourlarge/pngtree-young-man-cartoon-profile-vector-hd-image-png-image_3238138.jpg",
                }}
              />
            </View>

            <View>
              <Text style={styles.text}>Hola! {item.title.split(" ")[0]}</Text>
            </View>
          </View>
        ))}
        <View>
          <Text style={styles.textMain}>
            Bienvenidos a Reciclas la mejor App de reciclaje.
          </Text>
        </View>
      </View>
      {/* ----- */}

      <View style={styles.prueba}>
        <View>
          <Text style={{ color: "white", zIndex: 5 }}>
            {JSON.stringify(dataUser)}
          </Text>
        </View>
      </View>
      {/* </ScrollView> */}
    </Gradient>
  );
};

export default UserMain_home;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
    fontStyle: "normal",
    // textShadowColor: "rgba(119, 166, 73, 1)",
    // textShadowOffset: { width: 0, height: 0.7 },
    // textShadowRadius: 4,
  },
  textMain: {
    fontSize: 16,
    fontWeight: "400",
    color: "white",
    padding: 20,
    textAlign: "center",
    //corregir
    // textShadowColor: "rgba(119, 166, 73, 1)",
    // textShadowOffset: { width: 0, height: 0.7 },
    // textShadowRadius: 4,
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
    width: "90%",
    height: "32%",
    position: "absolute",
    bottom: 460,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(192, 192, 192, .2)",
    borderRadius: 20,
    margin: "auto",
    marginLeft: 20,
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
  prueba: {
    flex: 1,
    width: "90%",
    height: "58%",
    position: "absolute",
    bottom: 15,
    borderRadius: 20,
    margin: "auto",
    marginLeft: 20,
    // marginRight: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "rgba(192, 192, 192, .2)",
    // opacity: 0.2,
  },
});
