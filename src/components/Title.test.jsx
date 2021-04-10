import React from 'react'
import { render } from '@testing-library/react'
import Title from './Title.jsx'

test('renders title component', () => {
  const { getByText } = render(<Title title="Example title" />)
  const title = getByText(/Example title/i)
  expect(title).toBeInTheDocument()
})
