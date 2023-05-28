import React from "react";
import HomeScreen from "../routes/HomeScreen";
import { render, fireEvent } from "@testing-library/react-native";

describe("HomeScreen", () => {
  it("renders the component correctly", () => {
    const { getByText } = render(<HomeScreen />);
    
    const appTitle = getByText("Gra Memory");
    expect(appTitle).toBeTruthy();
    
    const startGameButton = getByText("Zacznij grę");
    expect(startGameButton).toBeTruthy();
    
    const settingsButton = getByText("Ustawienia");
    expect(settingsButton).toBeTruthy();
    
    const aboutButton = getByText("O aplikacji");
    expect(aboutButton).toBeTruthy();
  });
  
  it("navigates to the Levels screen when 'Zacznij grę' button is pressed", () => {
    const mockNavigation = { navigate: jest.fn() };
    const { getByText } = render(<HomeScreen navigation={mockNavigation} />);
    
    const startGameButton = getByText("Zacznij grę");
    fireEvent.press(startGameButton);
    
    expect(mockNavigation.navigate).toHaveBeenCalledWith("Levels");
  });
  
  it("navigates to the Settings screen when 'Ustawienia' button is pressed", () => {
    const mockNavigation = { navigate: jest.fn() };
    const { getByText } = render(<HomeScreen navigation={mockNavigation} />);
    
    const settingsButton = getByText("Ustawienia");
    fireEvent.press(settingsButton);
    
    expect(mockNavigation.navigate).toHaveBeenCalledWith("Settings");
  });
  
  it("navigates to the AboutUs screen when 'O aplikacji' button is pressed", () => {
    const mockNavigation = { navigate: jest.fn() };
    const { getByText } = render(<HomeScreen navigation={mockNavigation} />);
    
    const aboutButton = getByText("O aplikacji");
    fireEvent.press(aboutButton);
    
    expect(mockNavigation.navigate).toHaveBeenCalledWith("AboutUs");
  });
})

export default HomeScreen;
