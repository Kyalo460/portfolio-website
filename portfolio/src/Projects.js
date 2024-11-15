export default function Projects() {
  return (
    <>
      <h2 className="projects-header">I am currently working on deploying the projects</h2>
      <div className="projects-wrapper">
        <div>
          <h3><a href="https://github.com/Kyalo460/Smartgarage" target="_blank" rel="noreferrer">Smartgarage</a></h3>
          <img className="website" src={`${process.env.PUBLIC_URL}/website1.png`} alt="website_image" />
        </div>
        <div>
          <h3><a href="https://github.com/Kyalo460/varsity_campus" target="_blank" rel="noreferrer">Varsity_campus</a></h3>
          <img className="website" src={`${process.env.PUBLIC_URL}/website2.png`} alt="website_image" />
        </div>
      </div>
    </>
  )
}