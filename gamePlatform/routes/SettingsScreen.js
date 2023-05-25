import React, { useState } from "react";
import {
  Switch,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";

const image = require("../assets/rainbow-vortex.png");

export default function SettingsScreen({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.background}
      >
        <Text style={styles.appTitle}>Ustawienia</Text>

        <View style={styles.settings}>
          <View style={styles.settingItem}>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            <Text style={styles.settingsText}>
              Zgadzam się na przechowywanie moich wyników
            </Text>
          </View>

          <View style={styles.settingItem}>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            <Text style={styles.settingsText}>
              Zgadzam się na udostępnianie moich wyników
            </Text>
          </View>
          <View style={styles.settingItem}>
            <Text style={styles.settingsText}>Mój pseudonim:</Text>
            <TextInput style={styles.input}>Gracz</TextInput>
          </View>
        </View>
        <TouchableOpacity
          style={styles.buttons}
        >
          <Text style={styles.buttonsText}>Zapisz zmiany</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonsText}>Wróć do strony głównej</Text>
        </TouchableOpacity>
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
  },
  buttonsText: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
  },
  settings: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexWrap: 'wrap'
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 40,
    paddingHorizontal: 30
  },
  settingsText: {
    color: "#fff",
    fontSize: 18,
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
    width: 150,
    margin: 12,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#fff"
  },
});
