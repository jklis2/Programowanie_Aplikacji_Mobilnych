import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SettingsScreen from "../routes/SettingsScreen";

jest.mock("@react-native-async-storage/async-storage", () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
}));

describe("SettingsScreen", () => {
  beforeEach(() => {
    AsyncStorage.getItem.mockClear();
    AsyncStorage.setItem.mockClear();
  });

  test("should toggle switch state when pressed", () => {
    const { getAllByTestId } = render(<SettingsScreen />);
  
    const switchToggles = getAllByTestId("switch-toggle");
    const switchToggle = switchToggles[0];
  
    fireEvent(switchToggle, "valueChange", !switchToggle.props.value);
    expect(switchToggle.props.value).toBeTruthy();
    fireEvent(switchToggle, "valueChange", !switchToggle.props.value);
    expect(switchToggle.props.value).toBeFalsy();
  });
  
  test("should update user name when input value changes", () => {
    const { getByTestId } = render(<SettingsScreen />);

    const userNameInput = getByTestId("user-name-input");
    fireEvent.changeText(userNameInput, "John Doe");

    expect(userNameInput.props.value).toBe("John Doe");
  });

  test("should save user settings when 'Zapisz zmiany' button is pressed", () => {
    const { getByText } = render(<SettingsScreen />);

    const saveChangesButton = getByText("Zapisz zmiany");
    fireEvent.press(saveChangesButton);

    expect(AsyncStorage.setItem).toHaveBeenCalledWith(
      "user",
      JSON.stringify({
        name: "",
        consent: false,
      })
    );
  });

  test("should navigate to 'Home' screen when 'Wróć do strony głównej' button is pressed", () => {
    const navigationMock = {
      navigate: jest.fn(),
    };

    const { getByText } = render(
      <SettingsScreen navigation={navigationMock} />
    );

    const homeButton = getByText("Wróć do strony głównej");
    fireEvent.press(homeButton);

    expect(navigationMock.navigate).toHaveBeenCalledWith("Home");
  });
});