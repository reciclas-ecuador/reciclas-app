import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { GradientLogin } from "./global";
import { ReciclasLogo } from "./assets";
import {
  Button,
  Dialog,
  PaperProvider,
  Portal,
  TextInput,
  Text,
} from "react-native-paper";

const LoginAthentication = () => {
  const [visible, setVisible] = React.useState(false);

  const hideDialog = () => setVisible(!visible);
  return (
    <PaperProvider>
      <GradientLogin>
        <SafeAreaView style={styles.logoHome}>
          <ReciclasLogo
            width={70}
            height={70}
            fill="#bdf26d"
            onPress={() => hideDialog()}
          />
          <View>
            <Text
              variant="bodySmall"
              style={{
                color: "white",
                fontSize: 40,
                paddingTop: 25,
                // fontWeight: "cursive",
                // marginTop: 5,
                letterSpacing: 2,
              }}
            >
              RE-CICLAS
            </Text>
          </View>
          <Text style={{ color: "white", letterSpacing: 3 }}>ECUADOR</Text>
        </SafeAreaView>
        <View style={styles.content_glass}>
          <TextInput
            mode="outlined"
            label="Correo"
            placeholder="Escribe tu correo"
            // right={<TextInput.Affix text="/100" />}
            outlineStyle={{ borderColor: "#fff", borderRadius: 10 }}
            textColor="#000"
            cursorColor="#000"
            activeOutlineColor="#000"
            outlineColor="#fff"
            style={{
              width: "90%",
              marginVertical: 20,
            }}
          />
          <TextInput
            mode="outlined"
            label="Password"
            placeholder="Escribe tu password"
            // right={<TextInput.Affix text="/100" />}
            outlineStyle={{ borderColor: "#fff", borderRadius: 10 }}
            // underlineStyle={{ borderColor: "#000" }}
            textColor="#000"
            cursorColor="#000"
            activeOutlineColor="#000"
            outlineColor="#fff"
            secureTextEntry
            style={{ width: "90%", marginVertical: 10 }}
          />
          <Button
            icon="login"
            mode="elevated"
            style={{
              backgroundColor: "#bdf26d",
              width: "70%",
              marginVertical: 20,
            }}
            onPress={() => console.log("Pressed")}
          >
            Ingresar
          </Button>
          <Text
            variant="labelLarge"
            style={{ color: "white", marginVertical: 10 }}
          >
            Registrate
          </Text>
        </View>
        <ReciclasLogo
          width={40}
          height={40}
          fill="#bdf26d"
          style={{ position: "absolute", bottom: 40, alignSelf: "center" }}
        />
        {/* <Text style={{ color: "white" }}>Ecuador</Text> */}
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Icon icon="alert" />
            <Dialog.Title style={{ color: "#000", alignSelf: "center" }}>
              Centro de acopio
            </Dialog.Title>
            <Dialog.Content>
              <Text>Seguro quiere ingresar?</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => setVisible(false)}>Cancel</Button>
              <Button onPress={() => console.log("Ok")}>Ok</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </GradientLogin>
    </PaperProvider>
  );
};

export default LoginAthentication;

const styles = StyleSheet.create({
  logoHome: {
    width: "100%",
    marginTop: 60,
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
  },
  content_glass: {
    flex: 1,
    width: "90%",
    height: "40%",
    position: "absolute",
    bottom: 180,
    borderRadius: 20,
    margin: "auto",
    marginLeft: 20,
    display: "flex",
    // flexDirection: "column",
    // flexWrap: "wrap",
    backgroundColor: "rgba(192, 192, 192, .2)",
    alignItems: "center",
    // justifyContent: "center",
    alignContent: "center",
  },
});
