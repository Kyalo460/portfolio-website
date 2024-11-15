export default function Resume() {
  return (
    <div className="resume-container">
      <iframe src={`${process.env.PUBLIC_URL}/resume_5.pdf`} title="resume" width="80%" height="800px">
      </iframe>
    </div>
  )
}