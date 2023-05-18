import React from "react";
import { Image, TouchableOpacity, StyleSheet } from "react-native";

function Card({ image, flipped, chooseCard }) {
  const cardClickHandle = () => {
    chooseCard(image);
  };

  return (
    <>
      <TouchableOpacity
        style={[styles.card, flipped ? styles.matched : null]}
        onPress={cardClickHandle}
      >
        <Image
          style={{
            transform: [{ rotateY: "180deg" }],
            width: 100,
            height: 100,
          }}
          source={{ uri: image.src }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 170,
    backgroundColor: "white",
    borderRadius: 10,
    display: "flex",
    ///Delete it!
    flexDirection: "column",
    ///
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
  image: {
    width: "70%",
    position: "absolute",
    backfaceVisibility: "hidden",
    pointerEvents: "none",
  },
  svg: {
    width: 100,
    height: 100,
    opacity: 0.3,
  },
});

export default Card;
