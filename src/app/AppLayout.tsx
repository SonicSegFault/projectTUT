
import { Outlet } from 'react-router-dom'

import Sidebar from '../components/layout/Sidebar'
import Header from '../components/layout/Header'

function AppLayout() {
  return (
    <div className="app-shell">
      <Sidebar />

      <div className="app-main">
        <Header />

        <main className="app-content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AppLayout
