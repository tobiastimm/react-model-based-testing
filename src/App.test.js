import React from 'react'
import App from './App'

import { render, fireEvent, cleanup } from '@testing-library/react'

describe('feedback app', () => {
  afterEach(cleanup)

  it('should show the thanks screen when "Good" is clicked', () => {
    const { getByText } = render(<App />)

    expect(getByText('How was your experience?')).toBeDefined()

    fireEvent.click(getByText('Good'))

    expect(getByText('Thanks for your feedback.')).toBeDefined()
  })

  it('should show the form screen when "Bad" is clicked', () => {
    const { getByText } = render(<App />)

    expect(getByText('How was your experience?')).toBeDefined()

    fireEvent.click(getByText('Bad'))

    expect(getByText('Care to tell us why?')).toBeDefined()
  })
})
