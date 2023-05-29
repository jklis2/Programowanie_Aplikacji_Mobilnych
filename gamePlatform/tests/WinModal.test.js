import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import WinModal from "../components/winModal";

jest.mock("@react-native-async-storage/async-storage", () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
}));

describe("WinModal", () => {
  beforeAll(() => {
    AsyncStorage.getItem = jest.fn();
  });

  it("should render the modal with correct text and buttons", () => {
    const setNoOfMatched = jest.fn();
    const initGame = jest.fn();
    const setModalVisible = jest.fn();
    const setTime = jest.fn();
    const modalVisible = true;
    const time = 120;

    const { getByText } = render(
      <WinModal
        setNoOfMatched={setNoOfMatched}
        initGame={initGame}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        time={time}
        setTime={setTime}
      />
    );

    const winText = getByText("Wygrałeś! 🎉");
    const playAgainButton = getByText("Zagraj ponownie");

    expect(winText).toBeTruthy();
    expect(playAgainButton).toBeTruthy();
  });

  it("should retrieve user information from AsyncStorage", async () => {
    AsyncStorage.getItem.mockResolvedValueOnce(
      JSON.stringify({ name: "John", consent: true })
    );

    const { getByText } = render(
      <WinModal
        setNoOfMatched={() => {}}
        initGame={() => {}}
        modalVisible={true}
        setModalVisible={() => {}}
        time={120}
        setTime={() => {}}
      />
    );

    expect(AsyncStorage.getItem).toHaveBeenCalledWith("user");
  });

  it("should handle error when retrieving user information", async () => {
    AsyncStorage.getItem.mockRejectedValueOnce(new Error("AsyncStorage error"));

    const { queryByText } = render(
      <WinModal
        setNoOfMatched={() => {}}
        initGame={() => {}}
        modalVisible={true}
        setModalVisible={() => {}}
        time={120}
        setTime={() => {}}
      />
    );

    expect(AsyncStorage.getItem).toHaveBeenCalledWith("user");
    expect(queryByText("Zajmujesz 10 miejsce w rankingu globalnym")).toBeNull();
  });
});
