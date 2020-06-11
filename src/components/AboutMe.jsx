import React from "react";
import standup from "../images/standup.mp4";
import vid1 from "../images/lambda_curriculum.mp4";
import vid2 from "../images/lambda_vs_university.mp4";
import location from "../images/location.png";
import hackerrank from "../images/Temitope Akinsoto_HackerRank.pdf";

function AboutMe() {
  return (
    <div className="about-me">
      <h1>Temitope Akinsoto</h1>
      <div className="location">
        <h4>Full Stack Developer</h4>{" "}
        <span>
          <img src={location} alt="location icon" /> Lagos, Nigeria (Willing to
          relocate)
        </span>
      </div>
      <h2 className="about-me-heading">About Me</h2>
      <p>
        I&#x27;m full stack software developer with an undying thirst for more
        knowledge in the field of ICT
      </p>
      <p>
        As a teen, I wanted to be able to solve problems in the area of public
        health so I decided to study Biochemistry. After graduation, however, I
        took up a volunteer position as a web admin/content administrator and
        got exposed to the world of the internet.
      </p>
      <p>
        I got fascinated by the internet, how it works and decided to pursue a
        career in Software Development. My passion and curiousity has sentenced
        me to a lifetime of learning and doing!
      </p>
      <p>
        There is nothing that excites me more than solving complex technical
        problems, building high quality applications and applying the latest
        technologies to solve people's needs. I believe my skills and attitude
        make me an excellent fit for the European Trainee Program.
      </p>
      <p>
        A year ago I had an opportunity to formalise my software engineering
        education, and I joined a 9-month full-time software engineering and
        computer science program to take my skills to the next level, where I
        frequently worked on production-ready apps with distributed
        international teams using Agile methodology.
      </p>
      <p>
        I invite you to watch this short video clips from Ben Nelson (Co-Founder
        and CTO of Lambda School), to see how Lamda's curriculum compares to a
        university degree.
      </p>
      <div className="video-window">
        <video width="400" controls>
          <source src={vid1} type="video/mp4" />
          Your browser does not support HTML video.
        </video>
      </div>
      <div className="video-window">
        <video width="400" controls>
          <source src={vid2} type="video/mp4" />
          Your browser does not support HTML video.
        </video>
      </div>
      <p>
        At Lambda School, I learnt the core principles of SOFTWARE ENGINEERING,
        DATA STRUCTURES AND ALGORITHMS, Here's a breakdown of what I completed:
      </p>
      <ul>
        <li>40 hours a week of intensive study</li>
        <li>Daily individual projects</li>
        <li>Weekly tests & sprint Projects</li>
        <li>Monthly team projects</li>
        <li>One eight-week team project</li>
        <li>Eight weeks of Computer Science ( DataStructures, Algorithms )</li>
        <li>A final HackerRank coding challenge and interview</li>
        <li>
          A final professional interview with a Lambda School Careers Coach
        </li>
        <li>
          A final technical interview with a Lambda School Computer Science
          Instructor
        </li>
        <li>A final external interview with a senior engineer from AirBnB</li>
      </ul>
      <p>
        Click{" "}
        <a
          href={hackerrank}
          download="Hackerrank White Board Fitness Assessment"
        >
          here
        </a>{" "}
        to download my hackerrank code challenge
        <br />
        You can see my GitHub profile{" "}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.github.com/temitopeakinsoto"
        >
          here
        </a>{" "}
        and Portfolio site{" "}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.temitopeakinsoto.com"
        >
          here
        </a>
        .
      </p>
      <p>
        Here's a{" "}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://epic-turing-174c05.netlify.app/"
        >
          COVID-19 Monitor app
        </a>{" "}
        I'm currently building. This app was built using ReactJs, ChartJS, CSS
        etc, while consuming an API which relies on data from John Hopkins CSSE,
        CDS, WHO and a few others.
      </p>
      <p>
        You can view the repo for this project{" "}
        <a href="https://github.com/temitopeakinsoto/covid19"> here</a>
      </p>
      <h2>Strengths I think you'll love</h2>
      <br />
      <p className="main-heading">I take responsibility</p>
      I'm a problem solver and a collaborative team player who loves to take
      responsibility of the product development with a view to contributing to
      the design, development and roll out of tech solutions. I understand how
      to use Big-O notation, data structures and algorithms to efficiently
      manipulate large datasets and write performant codes.
      <br />
      <br />
      <p className="main-heading">I learn and I optimize</p>
      <p>
        I don't consider myself an expert in software development. I belive
        there's room for improvement and I'd love to think of myself as a
        work-in-progress. I'm always seeking for ways to improve. I love asking
        questions. Every question leads to another. Sometimes there are
        immediate answers. Sometimes there aren&#x27;t. But every question is
        interesting and exciting to explore.
      </p>
      <p>
        In everything I do, I can&#x27;t help wondering whether it could be done
        better, faster or with less effort.
      </p>
      <p>
        A silly example is making tea in the morning. Every day I wonder whether
        I could do it a little better than I did the day before. Some days I
        make a tweak to my process. Sometimes I keep the change. Sometimes I
        throw it away and start again.
      </p>
      <p>
        Learning and optimizing go hand in hand. Optimizing is the process of
        distilling learning. You can&#x27;t optimize if you can&#x27;t learn,
        and you can&#x27;t learn if you don&#x27;t care to optimize.
      </p>
      <p className="main-heading">I share and collaborate</p>
      <p>
        I love team work and I also love to share what I&#x27;ve learned and
        optimized with others. It gives me great satisfaction to help others
        achieve something they&#x27;re finding hard, get to the "aha moment" or
        just understand something for the first time.
      </p>
      <p>
        Here's a video of me working in a cross-functional, distributed team
        while at Lambda school
      </p>
      <div className="video-window">
        <video width="400" controls>
          <source src={standup} type="video/mp4" />
          Your browser does not support HTML video.
        </video>
      </div>
      <br />
      <br />
      <p className="main-heading">What excites me about this position</p>
      <p>
        Bloomberg is the global leader in business and financial data, news and
        insight. Bloomberg uses the power of technology to connect the world’s
        decision makers to accurate information on the financial markets – and
        help them make faster, smarter decisions.
      </p>
      <p>
        I see this as an opportunity to learn from and contribute to a
        world-class team of engineers who are passionate about solving some of
        the world’s most interesting and important technical challenges.
      </p>
      <p>
        I love learning, I love doing. My greatest drive and motivation is the
        feeling that comes from being able to solve a problem using technology.
        <br />
        <br />
        What excites me most about this position is the prospects of learning
        the ins and outs of Bloomberg's technology stack and soaking up skills
        needed to be a successful software engineer in Bloomberg's high-energy
        and fast-paced environment.
      </p>
      <p className="main-heading">
        Why I I'm a great candidate for the Software Engineer - 2020
        Graduate/Entry Level position
      </p>
      <p>
        In addition to my experience in software development, I also posses the
        following skills/qualities which I strongly believe make me a great
        candidate for this position:
        <br />
        <br />
        <li>I'm gritty and hardworking</li>
        <li>I'm an excellent problem solver</li>
        <li>I'm a collaborative team member</li>
        <li>
          Have programming experience in Python, Javascript, Databases etc{" "}
        </li>
        <li>
          I'm a super-fast learner and I easily pick up new skills/technologies
        </li>
        <li>I have good understanding of data structures and algorithms</li>
      </p>
    </div>
  );
}

export default AboutMe;
