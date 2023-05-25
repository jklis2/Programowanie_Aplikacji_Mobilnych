import React from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";

export default function WinModal({
  setNoOfMatched,
  initGame,
  modalVisible,
  setModalVisible,
}) {
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Wygrałeś! 🎉</Text>
        <Text style={styles.modalText}>Twój czas: 00:00:15</Text>
        <Text style={styles.modalText}>
          Zajmujesz 10 miejsce w rankingu globalnym
        </Text>
        <View
          style={{
            borderBottomColor: "gray",
            borderBottomWidth: 2,
            height: 1,
            width: 275,
            margin: 10,
          }}
        ></View>
        <Text style={styles.modalText}>🏆 Najlepsze wyniki: 🏆</Text>
        <Text style={styles.modalText}>1. Marcin - 00:00:05</Text>
        <Text style={styles.modalText}>2. Janek - 00:00:07</Text>
        <Text style={styles.modalText}>3. Filip - 00:00:08</Text>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text
            style={styles.textStyle}
            onPress={() => {
              setModalVisible(!modalVisible);
              setNoOfMatched(0);
              initGame();
            }}
          >
            Zagraj ponownie
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#f4a44e",
  },
  buttonClose: {
    backgroundColor: "#f4a44e",
    marginTop: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
