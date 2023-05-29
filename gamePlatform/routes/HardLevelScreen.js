import { useState, useEffect } from "react";
import Card from "../components/card";
import { allMemoryImages } from "../image";
import WinModal from "../components/winModal";

import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HardGameScreen({ navigation }) {
  const bgImage = require("../assets/rainbow-vortex.png");
  const level = "hard";
  const imagesItems = allMemoryImages
    .sort((a, b) => 0.5 - Math.random())
    .slice(0, 12);
  //ilosc kart/2

  const [modalVisible, setModalVisible] = useState(false);
  const [images, setImages] = useState([]);
  const [imageOne, setImageOne] = useState(null);
  const [imageTwo, setImageTwo] = useState(null);
  const [noOfMatched, setNoOfMatched] = useState(0);
  const [time, _] = useState(Date.now());

  const chooseCard = (image) => {
    if (!image.matched && !imageOne && !imageTwo) {
      setImageOne(image);
    } else if (
      !image.matched &&
      imageOne &&
      !imageTwo &&
      image.id !== imageOne.id
    ) {
      setImageTwo(image);
    }
  };

  const initGame = () => {
    const cards = 24;
    const allImages = [...imagesItems, ...imagesItems]
      .sort(() => Math.random() - 0.5)
      .slice(0, cards)
      .map((item) => ({ ...item, id: Math.random() }));
    setImages(allImages);
  };

  // eslint-disable-next-line
  useEffect(() => initGame(), []);

  useEffect(() => {
    if (noOfMatched === imagesItems.length) {
      setModalVisible(true);
    }

    if (imageOne && imageTwo) {
      if (imageOne.src === imageTwo.src) {
        setNoOfMatched((no) => (no += 1));
        setImages((prevImages) => {
          return prevImages.map((item) => {
            if (item.src === imageOne.src) {
              return { ...item, matched: true };
            } else {
              return item;
            }
          });
        });
      }
      setTimeout(() => {
        setImageOne(null);
        setImageTwo(null);
      }, 100);
    }
    // eslint-disable-next-line
  }, [imageOne, imageTwo]);

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={bgImage}
          resizeMode="cover"
          style={styles.background}
          testID="background-image"
        >
          {modalVisible ? (
            <WinModal
              modalVisible={modalVisible}
              setNoOfMatched={setNoOfMatched}
              setModalVisible={setModalVisible}
              initGame={initGame}
              time={time}
              level={level}
            ></WinModal>
          ) : (
            <>
              <View style={styles.memoryBoardContainer}>
                <View style={styles.memoryBoard}>
                  <View>
                    {images.length ? (
                      <View style={styles.gameBlock}>
                        {images.map((image, key) => {
                          return (
                            <Card
                              level={level}
                              key={key}
                              chooseCard={chooseCard}
                              flipped={
                                image === imageOne ||
                                image === imageTwo ||
                                image.matched
                              }
                              image={image}
                            />
                          );
                        })}
                      </View>
                    ) : (
                      <></>
                    )}
                  </View>
                </View>
              </View>

              <TouchableOpacity
                style={styles.buttons}
                onPress={() => navigation.navigate("Levels")}
              >
                <Text style={styles.buttonsText}>
                  Wróć do wyboru poziomu trudności
                </Text>
              </TouchableOpacity>
            </>
          )}
        </ImageBackground>
      </View>
    </>
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
    marginBottom: 20,
  },
  buttonsText: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
  },
  memoryBoardContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  memoryBoard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 24,
    height: 100,
  },
  gameBlock: {
    justifyContent: "center",
    flexBasis: "90%",
    flexWrap: "wrap",
    margin: 120,
    padding: 30,
  },
});
