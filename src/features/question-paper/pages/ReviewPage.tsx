
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ClipboardCheck } from 'lucide-react'

function ReviewPage() {
  const navigate = useNavigate()

  return (
    <div className="page-container">

      <div className="page-heading">
        <div>
          <p className="page-eyebrow">
            QUESTION PAPER GENERATOR
          </p>

          <h1>Review Questions</h1>

          <p className="page-description">
            Review, edit and approve questions before
            assembling your final examination paper.
          </p>
        </div>
      </div>

      <div className="workspace-card">
        <div className="empty-state-icon">
          <ClipboardCheck size={28} />
        </div>

        <h2>Question Review Workspace</h2>

        <p>
          Questions will appear here after the generation
          workflow is implemented.
        </p>

        <div className="page-button-group">
          <button
            className="secondary-button"
            onClick={() => navigate('/question-paper/configure')}
          >
            <ArrowLeft size={17} />
            Back
          </button>

          <button
            className="primary-button"
            onClick={() => navigate('/question-paper/preview')}
          >
            Continue to Preview
            <ArrowRight size={17} />
          </button>
        </div>
      </div>

    </div>
  )
}

export default ReviewPage
