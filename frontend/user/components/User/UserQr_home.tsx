import { StyleSheet, View } from "react-native";
import { Gradient } from "../../../global";
import { Button, Divider, Text } from "react-native-paper";
import { ReciclasLogo } from "../../../assets";
import QRCode from "react-native-qrcode-svg";
import { useState } from "react";

let baseUser = {
  _id: "david@gmail.com",
  name: "David",
};
const UserQr_home = () => {
  const [infoQrUser, setInfoQrUser] = useState("");
  const onPressGenerateQR = () => {
    if (infoQrUser === "") {
      setInfoQrUser(baseUser._id);
    }
  };

  return (
    <>
      <Gradient>
        {/* <Text>UserQr_home</Text> */}
        <View style={styles.logoHome}>
          <Text
            style={{
              color: "white",
              fontSize: 30,
              marginTop: 15,
              fontWeight: "bold",
              letterSpacing: 2,
            }}
          >
            Reciclaje
          </Text>
        </View>
        <View style={styles.glassContent}>
          <View
            style={{
              borderColor: "white",
              borderWidth: 1,
              width: 210,
              height: 210,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 3,
            }}
          >
            {infoQrUser && (
              <QRCode
                //   style={{ width: 300, height: 300 }}
                value={infoQrUser}
                // logo={{ uri: base64Logo1 }}
                size={200}
                logoSize={100}
                logoBackgroundColor="transparent"
              />
            )}
          </View>
          <Divider
            style={{
              backgroundColor: "white",
              marginVertical: 30,
              width: "90%",
            }}
          />
          <View>
            {/* <Button
              icon="qrcode-scan"
              mode="elevated"
              onPress={() => console.log("Pressed")}
              style={{
                width: "50%",
                margin: 20,
                // display: "flex",
                // alignContent: "center",
                // justifyContent: "center",
                // alignItems: "center",
              }}
              buttonColor="#bdf26d"
            >
              Ok
            </Button> */}

            <Text
              variant="titleLarge"
              style={{ color: "white", marginVertical: 20 }}
            >
              Genera tu codigo QR!
            </Text>
            <View>
              <Button
                onPress={() => onPressGenerateQR()}
                icon="qrcode"
                mode="elevated"
                buttonColor="#bdf26d"
              >
                Pulsar!
              </Button>
            </View>
          </View>
        </View>
      </Gradient>
    </>
  );
};

export default UserQr_home;
const styles = StyleSheet.create({
  logoHome: {
    width: "100%",
    marginTop: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  glassContent: {
    flex: 1,
    width: "90%",
    height: "68%",
    position: "absolute",
    bottom: 15,
    borderRadius: 20,
    margin: "auto",
    marginLeft: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(192, 192, 192, .2)",
  },
});
