import React from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useState } from "react";

export default function WinModal({
  setNoOfMatched,
  initGame,
  modalVisible,
  setModalVisible,
  time,
  setTime
}) {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const getUser = async () => {
      try {
        const savedUser = await AsyncStorage.getItem("user");
        setCurrentUser(JSON.parse(savedUser));
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, []);

  const request = () => {
    const res = fetch('https://memorygame-ac96c-default-rtdb.europe-west1.firebasedatabase.app/results.json', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: currentUser.name,
        time: time
      })
    })
    console.log(res)
  }

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Wygrałeś! 🎉</Text>
        <Text style={styles.modalText}>
          Twój czas: {String(Math.trunc(time / 3600)).padStart(2, 0)}:
          {String(Math.trunc(time / 60)).padStart(2, 0)}:
          {String(time % 60).padStart(2, 0)}
        </Text>

        {currentUser && currentUser.consent && (
          <>
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
          </>
        )}
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text
            style={styles.textStyle}
            onPress={() => {
              
              request();

              setModalVisible(!modalVisible);
              setNoOfMatched(0);
              setTime(0);
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
