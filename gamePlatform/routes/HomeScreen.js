import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const image = require("../assets/rainbow-vortex.png");

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.background}
      >
        <Text style={styles.appTitle}>Gra Memory</Text>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.navigate("Levels")}
        >
          <Text style={styles.buttonsText}>Zacznij grę</Text>
        </TouchableOpacity>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => navigation.navigate("Settings")}
          >
            <Text style={styles.buttonsText}>Ustawienia</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => navigation.navigate("AboutUs")}
          >
            <Text style={styles.buttonsText}>O aplikacji</Text>
          </TouchableOpacity>
        </View>
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
    color: "#fff",
    fontSize: 48,
  },
  buttons: {
    backgroundColor: "#f4a44e",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    width: 300,
    marginBottom: 10,
  },
  buttonsText: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
  },
  buttonGroup: {
    alignItems: "center",
  },
});
