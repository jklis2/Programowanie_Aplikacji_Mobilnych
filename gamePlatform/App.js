import { StatusBar } from "expo-status-bar";
import { Button, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const image = require("./assets/rainbow-vortex.svg");

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.background}>
        <Text style={styles.appTitle}>Gra pamięciowa</Text>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.buttonsText}>Zacznij grę</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.buttonsText}>Ustawienia</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  appTitle: {
    color: '#fff',
    fontSize: 48,
  },
  buttons: {
    backgroundColor: '#f4a44e',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    width: 300,
  },
  buttonsText: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
  },
});
