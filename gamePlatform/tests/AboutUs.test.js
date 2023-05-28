import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AboutUsScreen from '../routes/AboutUsScreen';

describe('AboutUsScreen', () => {
  it('renders correctly', () => {
    const { getByText } = render(<AboutUsScreen />);
    
    expect(getByText('O aplikacji')).toBeTruthy();
    expect(getByText(/Memory to gra/)).toBeTruthy();
    expect(getByText('Autorzy: Mateusz Dziekan, Jakub Kliś')).toBeTruthy();
    expect(getByText('Wróć do strony głównej')).toBeTruthy();
  });

  it('navigates to the Home screen when the button is pressed', () => {
    const navigationMock = { navigate: jest.fn() };
    const { getByText } = render(<AboutUsScreen navigation={navigationMock} />);
    const button = getByText('Wróć do strony głównej');

    fireEvent.press(button);

    expect(navigationMock.navigate).toHaveBeenCalledWith('Home');
  });
});
