import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', { level: 1 })
    const headingText = screen.getByText("Hello World")

    expect(heading).toBeInTheDocument()
    expect(headingText).toBeInTheDocument()
  })
})
