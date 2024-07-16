import { render, screen } from '@testing-library/react'
import { Header } from '../components/Header/Header'
import { describe, it } from 'vitest'

describe('Header component', () => {
  it('renders the Header component', () => {
    render(<Header />)
    
    screen.debug();
  })
})