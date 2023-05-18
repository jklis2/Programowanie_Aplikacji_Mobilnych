import React from "react";
import { Image, TouchableOpacity, StyleSheet } from "react-native";

function Card({ image, flipped, chooseCard }) {

  const cardClickHandle = () => {
    chooseCard(image);
  };

  return (
    <TouchableOpacity
      style={[styles.card, flipped ? styles.matched : null]}
      onPress={cardClickHandle}
    >
      <Image
        style={{ transform: [{ rotateY: "180deg" }] }}
        source={image.src}
        resizeMode="contain"
      />
      {/* <SvgXml
        xml={`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4"></path>
            <line x1="12" y1="19" x2="12" y2="19.01"></line>
          </svg>`}
      /> */}
    </TouchableOpacity>
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
      flexDirection: 'column',
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
