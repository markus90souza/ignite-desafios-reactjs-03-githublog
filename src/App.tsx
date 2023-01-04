import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './routes'
import { Reset } from './styles/reset'
import { defaultTheme } from './theme'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Reset />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  )
}
