
import { NavLink } from 'react-router-dom'

import {
  LayoutDashboard,
  FileText,
  BookOpen,
  ClipboardList,
  HelpCircle,
  Settings,
  GraduationCap,
} from 'lucide-react'

const navigation = [
  {
    label: 'Dashboard',
    path: '/',
    icon: LayoutDashboard,
  },
]

const tools = [
  {
    label: 'Question Paper Generator',
    path: '/question-paper/configure',
    icon: FileText,
    available: true,
  },
  {
    label: 'Lesson Plan Maker',
    path: '#',
    icon: BookOpen,
    available: false,
  },
  {
    label: 'Worksheet Generator',
    path: '#',
    icon: ClipboardList,
    available: false,
  },
  {
    label: 'Quiz Generator',
    path: '#',
    icon: HelpCircle,
    available: false,
  },
]

function Sidebar() {
  return (
    <aside className="sidebar">

      {/* Brand */}
      <div className="sidebar-brand">
        <div className="brand-icon">
          <GraduationCap size={23} />
        </div>

        <div>
          <h1>EduFlow</h1>
          <span>Teacher Workspace</span>
        </div>
      </div>

      {/* Main navigation */}
      <div className="sidebar-section">
        <p className="sidebar-label">WORKSPACE</p>

        {navigation.map((item) => {
          const Icon = item.icon

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end
              className={({ isActive }) =>
                `sidebar-link ${isActive ? 'active' : ''}`
              }
            >
              <Icon size={19} />
              <span>{item.label}</span>
            </NavLink>
          )
        })}
      </div>

      {/* Tools */}
      <div className="sidebar-section">
        <p className="sidebar-label">EDUCATIONAL TOOLS</p>

        {tools.map((tool) => {
          const Icon = tool.icon

          if (!tool.available) {
            return (
              <div
                key={tool.label}
                className="sidebar-link disabled"
                title="Coming soon"
              >
                <Icon size={19} />
                <span>{tool.label}</span>
                <span className="coming-soon-dot" />
              </div>
            )
          }

          return (
            <NavLink
              key={tool.path}
              to={tool.path}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? 'active' : ''}`
              }
            >
              <Icon size={19} />
              <span>{tool.label}</span>
            </NavLink>
          )
        })}
      </div>

      {/* Bottom navigation */}
      <div className="sidebar-bottom">
        <div className="sidebar-section">
          <div className="sidebar-link disabled">
            <Settings size={19} />
            <span>Settings</span>
          </div>
        </div>

        <div className="sidebar-user">
          <div className="user-avatar">T</div>

          <div className="user-info">
            <strong>Teacher</strong>
            <span>Workspace</span>
          </div>
        </div>
      </div>

    </aside>
  )
}

export default Sidebar
