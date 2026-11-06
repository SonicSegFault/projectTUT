
import { Routes, Route } from 'react-router-dom'

import AppLayout from './app/AppLayout'

import Dashboard from './pages/Dashboard/Dashboard'
import NotFound from './pages/NotFound'

import ConfigurationPage from './features/question-paper/pages/ConfigurationPage'
import ReviewPage from './features/question-paper/pages/ReviewPage'
import PreviewPage from './features/question-paper/pages/PreviewPage'

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />

        <Route
          path="/question-paper/configure"
          element={<ConfigurationPage />}
        />

        <Route
          path="/question-paper/review"
          element={<ReviewPage />}
        />

        <Route
          path="/question-paper/preview"
          element={<PreviewPage />}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
