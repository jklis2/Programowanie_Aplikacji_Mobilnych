import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const image = require("../assets/rainbow-vortex.svg");

export default function AboutUsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.background}
      >
        <Text style={styles.appTitle}>O aplikacji</Text>

        <Text style={styles.text}>
          Memory to gra, w której gracze muszą odnaleźć pary kart, ukrytych
          liczbami lub obrazkami, poprzez zapamiętanie ich położenia na planszy.
          Na początku gry karty są układane na stole liczbą do dołu, a gracze na
          zmianę odkrywają dwie karty. Jeśli odkryte karty są identyczne, gracz
          zabiera je do swojego zdobytego zestawu. Jeśli nie, karty są z
          powrotem ukrywane, a kolejny gracz próbuje odnaleźć parę. Wygrywa
          gracz, który zebrał najwięcej par.
        </Text>

        <Text style={styles.authors}>Autorzy: Mateusz Dziekan, Jakub Kliś</Text>

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
  text: {
    color: "#fff",
    fontSize: 16,
    paddingHorizontal: 40,
    marginBottom: 20,
    textAlign: "justify",
  },
  authors: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 40,
    marginBottom: 20,
    textAlign: "center",
  },
});
