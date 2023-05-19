import { useState, useEffect } from "react";
import Card from "../components/card";
import { allMemoryImages } from "../image";

import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const bgImage = require("../assets/rainbow-vortex.svg");

export default function HardGameScreen({ navigation }) {
  const imagesItems = allMemoryImages
    .sort((a, b) => 0.5 - Math.random())
    .slice(0, 12);
    //ilosc kart/2

  const level = 'hard';

  const [images, setImages] = useState([]);
  const [imageOne, setImageOne] = useState(null);
  const [imageTwo, setImageTwo] = useState(null);
  const [noOfMatched, setNoOfMatched] = useState(0);

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
    console.log(noOfMatched, imagesItems.length)
    if (noOfMatched === imagesItems.length) {
      console.log("You won!");
    }

    if (imageOne && imageTwo) {
      if (imageOne.src === imageTwo.src) {
        setNoOfMatched((no) => (no += 1));
        console.log(noOfMatched, imagesItems.length);
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
      }, 500);
    }
    // eslint-disable-next-line
  }, [imageOne, imageTwo]);

  return (
    <View style={styles.container}>
      <ImageBackground source={bgImage} resizeMode="cover" style={styles.background}>
        <View style={styles.memoryBoardContainer}>
          <View style={styles.memoryBoard}>
            <View>
              {images.length ? (
                <View style={styles.gameBlock}>
                  {images.map((image, key) => {
                    return (
                      <Card
                        level={level}
                        style={{width: 20, height: 30}}
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
    marginTop: 15,
    backgroundColor: "#f4a44e",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    width: 300,
    marginBottom: 20
  },
  buttonsText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  memoryBoardContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  memoryBoard: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 0,
    elevation: 2,
  },
  gameBlock: {
    padding: 4,
    gap: 4,
    display: "grid",
    gridTemplateColumns: "repeat(4, auto)",
  },
});