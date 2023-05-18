import React, { useState, useEffect } from "react";
import { Image, TouchableOpacity, StyleSheet } from "react-native";

function Card({ image, flipped, chooseCard }) {
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
      style={[styles.card, flipped ? styles.matched : null]}
      onPress={cardClickHandle}
    >
      {!flipped && !isFlipped ? (
        <Image
          style={styles.questionMark}
          source={questionMark}
          resizeMode="contain"
        />
      ) : (
        <Image
          style={styles.cardImage}
          source={{ uri: image.src }}
          resizeMode="contain"
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
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
  },
  matched: {
    transform: [{ rotateY: "180deg" }],
  },
  questionMark: {
    width: 80,
    height: 80,
  },
  cardImage: {
    width: 80,
    height: 80,
  },
});

export default Card;