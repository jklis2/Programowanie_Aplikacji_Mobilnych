import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import EasyGameScreen from "../routes/EasyLevelScreen";

// Mock AsyncStorage module
jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
}));

// Mock navigation prop
const navigation = { navigate: jest.fn() };

describe("EasyGameScreen", () => {
  beforeEach(() => {
    AsyncStorage.getItem.mockClear(); // Clear mocked AsyncStorage getItem function
    AsyncStorage.setItem.mockClear(); // Clear mocked AsyncStorage setItem function
  });

  it("renders the screen correctly", () => {
    const { getByTestId, getByText } = render(
      <EasyGameScreen navigation={navigation} />
    );

    // Ensure the necessary elements are rendered
    expect(getByTestId("background-image")).toBeDefined();
    expect(getByText("Wróć do wyboru poziomu trudności")).toBeDefined();
  });

  it("navigates to Levels screen when the button is pressed", () => {
    const { getByText } = render(<EasyGameScreen navigation={navigation} />);
    const backButton = getByText("Wróć do wyboru poziomu trudności");

    fireEvent.press(backButton);

    // Ensure the navigation function is called with the correct screen name
    expect(navigation.navigate).toHaveBeenCalledWith("Levels");
  });

  it("should initialize the game correctly", () => {
    const { getAllByTestId } = render(<EasyGameScreen navigation={navigation} />);
    const cards = getAllByTestId(/^card-\d+$/); // Use a regex pattern to match the testID
  
    // Ensure the correct number of cards are initialized
    expect(cards.length).toBe(6);
  });
  
  it("should flip cards when clicked", () => {
    const { getAllByTestId } = render(<EasyGameScreen navigation={navigation} />);
    const cards = getAllByTestId(/^card-\d+$/);
  
    // Click on the first card
    fireEvent.press(cards[0]);
  
    // Ensure the first card is flipped
    expect(cards[0]).toHaveStyle({ transform: [{ scaleX: -1 }] });
  
    // Click on the second card
    fireEvent.press(cards[1]);
  
    // Ensure the second card is flipped
    expect(cards[1]).toHaveStyle({ transform: [{ scaleX: -1 }] });
  });
  
  it("should match the cards with the same image", () => {
    const { getAllByTestId } = render(<EasyGameScreen navigation={navigation} />);
    const cards = getAllByTestId(/^card-\d+$/);
  
    // Click on two cards with the same image
    fireEvent.press(cards[0]);
    fireEvent.press(cards[3]);
  
    // Ensure both cards are matched
    expect(cards[0]).toHaveStyle({ opacity: 0 });
    expect(cards[3]).toHaveStyle({ opacity: 0 });
  });
  

  it("should not match the cards with different images", () => {
    const { getAllByTestId } = render(<EasyGameScreen navigation={navigation} />);
    const cards = getAllByTestId("card");

    // Click on two cards with different images
    fireEvent.press(cards[0]);
    fireEvent.press(cards[4]);

    // Ensure both cards are not matched and flipped back
    expect(cards[0]).toHaveStyle({ transform: [{ scaleX: 1 }] });
    expect(cards[4]).toHaveStyle({ transform: [{ scaleX: 1 }] });
  });

  it("should display the win modal when all cards are matched", () => {
    const { getAllByTestId, getByTestId } = render(<EasyGameScreen navigation={navigation} />);
    const cards = getAllByTestId("card");

    // Match all cards
    fireEvent.press(cards[0]);
    fireEvent.press(cards[3]);
    fireEvent.press(cards[1]);
    fireEvent.press(cards[4]);
    fireEvent.press(cards[2]);
    fireEvent.press(cards[5]);

    // Ensure the win modal is displayed
    expect(getByTestId("win-modal")).toBeDefined();
  });

  // Add more tests for other functionality and interactions
});
