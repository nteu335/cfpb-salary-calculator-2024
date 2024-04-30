import { screen } from '@testing-library/react'
import CalculatorPage from 'pages/Calculator'
import renderWithProviders, {
  MOBILE_RESOLUTION_HEIGHT,
  MOBILE_RESOLUTION_WIDTH
} from 'testUtils'

describe('<Calculator />', () => {
  it('renders', async () => {
    renderWithProviders(<CalculatorPage />)

    expect(screen.getByText('Calculate')).toBeInTheDocument()
  })
  it('renders with mobile resolution', async () => {
    window.resizeTo(MOBILE_RESOLUTION_WIDTH, MOBILE_RESOLUTION_HEIGHT)
    renderWithProviders(<CalculatorPage />)

    expect(screen.getByText('Calculate')).toBeInTheDocument()
  })
})
