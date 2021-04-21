import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Generator from './Generator';
import store from '../app/store';

test('renders without crash', () => {
  const { baseElement } = render(
    <Provider store={store}>
      <Generator />
    </Provider>,
  );
  expect(baseElement).toBeInTheDocument();
});

test('click add title', () => {
  const { getByTestId, getByText } = render(
    <Provider store={store}>
      <Generator />
    </Provider>,
  );

  const buttonAddTitle = getByTestId('button-add-title');

  fireEvent.click(buttonAddTitle);

  expect(getByText(/Example title/i)).toBeInTheDocument();
});

test('click add text', () => {
  const { getByTestId, getByText } = render(
    <Provider store={store}>
      <Generator />
    </Provider>,
  );

  const buttonAddText = getByTestId('button-add-text');

  fireEvent.click(buttonAddText);

  expect(getByText(/Example text/i)).toBeInTheDocument();
});
