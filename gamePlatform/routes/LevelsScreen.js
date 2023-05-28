import {
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  
  const image = require("../assets/rainbow-vortex.png");
  
  export default function LevelsScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.background}
        >
          <Text style={styles.appTitle}>Wybierz poziom trudności</Text>
  
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => navigation.navigate("EasyGame")}
              testID="easy-button"
            >
              <Text style={styles.buttonsText}>Łatwy</Text>
            </TouchableOpacity>
  
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => navigation.navigate("MediumGame")}
              testID="medium-button"
            >
              <Text style={styles.buttonsText}>Średni</Text>
            </TouchableOpacity>
  
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => navigation.navigate("HardGame")}
              testID="hard-button"
            >
              <Text style={styles.buttonsText}>Trudny</Text>
            </TouchableOpacity>
          </View>
  
          <TouchableOpacity
            style={[styles.buttons, { marginTop: 20 }]}
            onPress={() => navigation.navigate("Home")}
            testID="back-button"
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
      fontSize: 40,
      textAlign: 'center',
    },
    buttonGroup: {
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
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
  });
  