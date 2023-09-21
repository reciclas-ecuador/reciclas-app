import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ReceptionPageStyles } from "../../collection_center/components/reception";
import QRCode from "react-native-qrcode-svg";
import { useState } from "react";

let baseUser = {
  _id: "david@gmail.com",
  name: "David",
};

export default function UserGenerate_Qr() {
  const [infoQrUser, setInfoQrUser] = useState("");
  const onPressGenerateQR = () => {
    if (infoQrUser === "") {
      setInfoQrUser(baseUser._id);
    }
  };

  let base64Logo1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..";
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
      <View style={styles.contentQr}>
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
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
        >
          <View style={{ flex: 1, height: 1, backgroundColor: "white" }} />
          <View>
            <Text style={{ width: 90, textAlign: "center", color: "#c0c0c0" }}>
              Reciclas App
            </Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: "white" }} />
        </View>
        <Text
          style={{
            color: "#fff",
            fontSize: 16,
            fontWeight: "bold",
            textAlign: "center",
            marginVertical: 10,
            opacity: 1,
            paddingVertical: 10,
          }}
        >
          No has generado tu código QR?
        </Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => onPressGenerateQR()}
        >
          <Text style={{ color: "#000" }}>Generar Code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentQr: {
    width: "90%",
    height: "70%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#494D4F",

    // backgroundColor: "transparent",
    opacity: 0.7,
    position: "absolute",
    bottom: 0,
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 20,
  },
  btn: {
    backgroundColor: "#fff",
    padding: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
});
