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
  level,
}) {
  const [currentUser, setCurrentUser] = useState(null);
  const [results, setResults] = useState([]);
  const currentTime = Date.now();
  const finalTime = Math.floor((currentTime - time) / 1000, 0);

  useEffect(() => {
    fetch(
      `https://memorygame-ac96c-default-rtdb.europe-west1.firebasedatabase.app/${level}Results.json`
    )
      .then((res) => res.json())
      .then((data) => {
        setResults(Object.values(data));
      });
  }, []);

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
    console.log(level);
    const res = fetch(
      `https://memorygame-ac96c-default-rtdb.europe-west1.firebasedatabase.app/${level}Results.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: Date.now(),
          name: currentUser.name,
          time: finalTime,
        }),
      }
    );
  };

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Wygrałeś! 🎉</Text>
        <Text style={styles.modalText}>
          Twój czas:{" "}
          {String(Math.trunc(finalTime / 3600 / 1000)).padStart(2, 0)}:
          {String(Math.trunc(finalTime / 60)).padStart(2, 0)}:
          {String(finalTime % 60).padStart(2, 0)}
        </Text>

        {currentUser && currentUser.consent && (
          <>
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
            {results
              .sort((a, b) => a.time - b.time)
              .slice(0, 3)
              .map((res, i) => (
                <Text key={res.id}>
                  {i + 1}. {res.name} - {String(Math.trunc(res.time / 3600 / 1000)).padStart(2, 0)}:
                  {String(Math.trunc(res.time / 60)).padStart(2, 0)}:
                  {String(res.time % 60).padStart(2, 0)}
                </Text>
              ))}
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
