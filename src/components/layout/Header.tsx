
import { useLocation } from 'react-router-dom'
import { Bell, ChevronRight } from 'lucide-react'

const pageTitles: Record<string, string> = {
  '/': 'Dashboard',
  '/question-paper/configure': 'Question Paper Generator',
  '/question-paper/review': 'Review Questions',
  '/question-paper/preview': 'Paper Preview',
}

function Header() {
  const location = useLocation()

  const title =
    pageTitles[location.pathname] ?? 'Workspace'

  return (
    <header className="app-header">
      <div className="header-breadcrumb">
        <span>Workspace</span>
        <ChevronRight size={16} />
        <strong>{title}</strong>
      </div>

      <div className="header-actions">
        <button
          className="header-icon-button"
          aria-label="Notifications"
          type="button"
        >
          <Bell size={19} />
        </button>

        <div className="header-avatar">
          T
        </div>
      </div>
    </header>
  )
}

export default Header
