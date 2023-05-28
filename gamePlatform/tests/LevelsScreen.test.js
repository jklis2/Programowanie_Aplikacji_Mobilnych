import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import LevelsScreen from "../routes/LevelsScreen";

describe("LevelsScreen", () => {
  it("should navigate to EasyGame when Easy button is pressed", () => {
    const navigation = { navigate: jest.fn() };
    const { getByTestId } = render(<LevelsScreen navigation={navigation} />);
    const easyButton = getByTestId("easy-button");

    fireEvent.press(easyButton);

    expect(navigation.navigate).toHaveBeenCalledWith("EasyGame");
  });

  it("should navigate to MediumGame when Medium button is pressed", () => {
    const navigation = { navigate: jest.fn() };
    const { getByTestId } = render(<LevelsScreen navigation={navigation} />);
    const mediumButton = getByTestId("medium-button");

    fireEvent.press(mediumButton);

    expect(navigation.navigate).toHaveBeenCalledWith("MediumGame");
  });

  it("should navigate to HardGame when Hard button is pressed", () => {
    const navigation = { navigate: jest.fn() };
    const { getByTestId } = render(<LevelsScreen navigation={navigation} />);
    const hardButton = getByTestId("hard-button");

    fireEvent.press(hardButton);

    expect(navigation.navigate).toHaveBeenCalledWith("HardGame");
  });

  it("should navigate to Home when 'Wróć do strony głównej' button is pressed", () => {
    const navigation = { navigate: jest.fn() };
    const { getByTestId } = render(<LevelsScreen navigation={navigation} />);
    const backButton = getByTestId("back-button");

    fireEvent.press(backButton);

    expect(navigation.navigate).toHaveBeenCalledWith("Home");
  });
});