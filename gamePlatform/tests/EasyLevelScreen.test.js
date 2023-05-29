import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import EasyGameScreen from "../routes/EasyLevelScreen";
import Card from "../components/card";

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
    const { getByTestId } = render(<EasyGameScreen />);
    const background = getByTestId('background-image');
    expect(background).toBeTruthy();
  });

  test('calls navigation.navigate when button is pressed', () => {
    const navigation = { navigate: jest.fn() };
    const { getByText } = render(<EasyGameScreen navigation={navigation} />);
    const backButton = getByText('Wróć do wyboru poziomu trudności');
    fireEvent.press(backButton);
    expect(navigation.navigate).toBeCalledWith('Levels');
  });
})

