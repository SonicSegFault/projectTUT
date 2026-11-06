
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, FileText } from 'lucide-react'

function PreviewPage() {
  const navigate = useNavigate()

  return (
    <div className="page-container">

      <div className="page-heading">
        <div>
          <p className="page-eyebrow">
            QUESTION PAPER GENERATOR
          </p>

          <h1>Paper Preview</h1>

          <p className="page-description">
            Review the final examination paper before
            exporting or printing.
          </p>
        </div>
      </div>

      <div className="workspace-card">
        <div className="empty-state-icon">
          <FileText size={28} />
        </div>

        <h2>Examination Preview</h2>

        <p>
          Your formatted examination paper will appear here
          once the question review workflow is implemented.
        </p>

        <button
          className="secondary-button"
          onClick={() => navigate('/question-paper/review')}
        >
          <ArrowLeft size={17} />
          Back to Questions
        </button>
      </div>

    </div>
  )
}

export default PreviewPage
