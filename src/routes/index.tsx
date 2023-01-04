import { Route, Routes } from 'react-router-dom'
import { LayoutWeb } from '../layout/Web'
import { Home } from '../pages/Home'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutWeb />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}
