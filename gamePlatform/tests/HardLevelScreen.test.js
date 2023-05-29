import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import HardGameScreen from "../routes/HardLevelScreen";

jest.mock("@react-native-async-storage/async-storage", () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
}));

const navigationMock = {
  navigate: jest.fn(),
};

describe('EasyGameScreen', () => {
  test('renders correctly', () => {
    const { getByTestId } = render(<HardGameScreen />);
    const background = getByTestId('background-image');
    expect(background).toBeTruthy();
  });

  test('calls navigation.navigate when button is pressed', () => {
    const navigation = { navigate: jest.fn() };
    const { getByText } = render(<HardGameScreen navigation={navigation} />);
    const backButton = getByText('Wróć do wyboru poziomu trudności');
    fireEvent.press(backButton);
    expect(navigation.navigate).toBeCalledWith('Levels');
  });
})

