import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Card from '../components/Card';

describe('Card', () => {
  test('flips the card when clicked', () => {
    const image = { src: 'example.png' };
    const chooseCard = jest.fn();
    const { getByTestId } = render(
      <Card image={image} flipped={false} chooseCard={chooseCard} level="easy" />
    );
    const card = getByTestId('card');
    fireEvent.press(card);
    expect(chooseCard).toBeCalledWith(image);
  });

  test('does not flip the card if already flipped', () => {
    const image = { src: 'example.png' };
    const chooseCard = jest.fn();
    const { getByTestId } = render(
      <Card image={image} flipped={true} chooseCard={chooseCard} level="easy" />
    );
    const card = getByTestId('card');
    fireEvent.press(card);
    expect(chooseCard).not.toBeCalled();
  });
});
