
import { useNavigate } from 'react-router-dom'
import { ArrowRight, FileText } from 'lucide-react'

function ConfigurationPage() {
  const navigate = useNavigate()

  return (
    <div className="page-container">

      <div className="page-heading">
        <div>
          <p className="page-eyebrow">
            EDUCATIONAL TOOLS
          </p>

          <h1>Question Paper Generator</h1>

          <p className="page-description">
            Configure your examination and prepare
            everything needed to generate a question paper.
          </p>
        </div>
      </div>

      <div className="workspace-card">
        <div className="empty-state-icon">
          <FileText size={28} />
        </div>

        <h2>Examination Configuration</h2>

        <p>
          This workspace will contain examination details,
          syllabus information, question-paper blueprint
          and generation requirements.
        </p>

        <button
          className="primary-button"
          onClick={() => navigate('/question-paper/review')}
        >
          Continue to Review
          <ArrowRight size={17} />
        </button>
      </div>

    </div>
  )
}

export default ConfigurationPage
