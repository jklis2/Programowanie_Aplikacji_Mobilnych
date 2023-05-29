import React, { useState, useEffect } from "react";
import { Image, TouchableOpacity, StyleSheet } from "react-native";

function Card({ image, flipped, chooseCard, level }) {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setIsFlipped(flipped);
  }, [flipped]);

  const cardClickHandle = () => {
    if (!flipped && !isFlipped) {
      setIsFlipped(true);
      chooseCard(image);
    }
  };

  const resetCard = () => {
    setIsFlipped(false);
  };

  const questionMark = require("../assets/questionMark.png");

  useEffect(() => {
    if (flipped && !isFlipped) {
      const timeout = setTimeout(resetCard, 1000); // Zresetuj kartę po 1 sekundzie
      return () => clearTimeout(timeout);
    }
  }, [flipped, isFlipped]);

  return (
    <TouchableOpacity
      testID="card"
      style={[level === 'easy' ? styles.cardEasy : (
        level === 'medium' ? styles.cardMedium : styles.cardHard),
        flipped ? styles.matched : null]}
      onPress={cardClickHandle}
    >
      {!flipped && !isFlipped ? (
        <Image
        testID="question-mark-image"
          style={styles.questionMark}
          source={questionMark}
          resizeMode="contain"
        />
      ) : (
        <Image
          style={level === 'hard' ? styles.cardImageHard : ( level === 'easy' ? styles.cardImageEasy : styles.cardImageMedium)}
          source={ image.src }
          resizeMode="contain"
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardEasy: {
    width: 100,
    height: 120,
    backgroundColor: "white",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transformStyle: "preserve-3d",
    transitionProperty: "transform",
    transitionDuration: ".7s",
    borderColor: "rgba(160, 160, 160, 0.75)",
    borderWidth: 1,
    cursor: "pointer",
    margin: 5
  },
  cardMedium: {
    width: 80,
    height: 90,
    backgroundColor: "white",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transformStyle: "preserve-3d",
    transitionProperty: "transform",
    transitionDuration: ".7s",
    borderColor: "rgba(160, 160, 160, 0.75)",
    borderWidth: 1,
    cursor: "pointer",
    margin: 5
  },
  cardHard: {
    width: 60,
    height: 70,
    backgroundColor: "white",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transformStyle: "preserve-3d",
    transitionProperty: "transform",
    transitionDuration: ".7s",
    borderColor: "rgba(160, 160, 160, 0.75)",
    borderWidth: 1,
    cursor: "pointer",
    margin: 3
  },
  matched: {
    transform: [{ rotateY: "180deg" }],
  },
  questionMark: {
    width: 60,
    height: 60,
  },
  cardImageEasy: {
    width: 80,
    height: 80,
  },
  cardImageMedium: {
    width: 70,
    height: 70,
  },
  cardImageHard: {
    width: 50,
    height: 50,
  },
});

export default Card;