import React from 'react';
import { render } from '@testing-library/react';
import Text from './Text';

test('renders Text component', () => {
  const { getByText } = render(<Text text="Example text" />);
  const text = getByText(/Example text/i);
  expect(text).toBeInTheDocument();
});
