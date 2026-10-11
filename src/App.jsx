import { Routes, Route } from 'react-router'
import Home from './pages/Home.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* /projets/:slug et la page 404 arrivent à l'étape 6 */}
    </Routes>
  )
}
