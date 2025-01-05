import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <div className="home-container">
      <h2>Brian Muoki Kyalo</h2>
      <img
        src={`${process.env.PUBLIC_URL}/Brian.jfif`}
        alt="profile"
        width="20%"
      />
      <h2>A Software Engineer specializing in Frontend Development</h2>
      <h3>
        I'm a{" "}
        <span>
          <Typewriter
            words={[
              "Developer",
              "Designer",
              "Creator",
              "Problem Solver",
              "Critical Thinker",
            ]}
            loop={Infinity}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </span>
      </h3>
      <div className="skills-container">
        <h2>Skills:</h2>
        <ul>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>React</li>
          <li>Node js</li>
          <li>Express js</li>
          <li>Python</li>
          <li>C</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>Node js</li>
        </ul>
      </div>
    </div>
  );
}
