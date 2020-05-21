import React from "react";
import standup from "../images/standup.mp4";
import location from "../images/location.png";

function AboutMe() {
  return (
    <div className="about-me">
      <h1>Temitope Akinsoto</h1>
      <div className="location">
        <h4>Full Stack Developer</h4>{" "}
        <span>
          <img src={location} /> Lagos, Nigeria
        </span>
      </div>
      <h2 className="about-me-heading">About Me</h2>
      <p>
        I&#x27;m full stack software developer with an undying thirst for more
        knowledge in the field of ICT
      </p>
      <p>I'm based in Lagos, Nigeria</p>
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
        technologies to solve people's needs. I believe my strengths in those
        areas, coupled with my skills in Nodejs, Express, Javascript, MongoDB
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
        At Lambda School, I learnt the core principles of SOFTWARE ENGINEERING,
        DATA STRUCTURES AND ALGORITHMS, Here's a breakdown of what I completed:
      </p>
      <ul>
        <li>40 hours a week of intensive study</li>
        <li>Daily individual projects</li>
        <li>Weekly tests</li>
        <li>Monthly team projects</li>
        <li>One eight-week team project</li>
        <li>Eight weeks of Computer Science</li>
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
        <a href="https://epic-turing-174c05.netlify.app/">
          COVID-19 Monitor app
        </a>{" "}
        I'm currently building. This app was built using ReactJs, ChartJS, CSS
        etc, while consuming an API which relies on data from John Hopkins CSSE,
        CDS, WHO and a few others.
      </p>
      <p>
        You can view the repo for this page{" "}
        <a href="https://github.com/temitopeakinsoto/covid19"> here</a>
      </p>
      <h2>Strengths I think you'll love</h2>
      <p className="main-heading">I learn</p>
      <p>
        I love asking beginner&#x27;s questions. Every question leads to
        another. Sometimes there are answers. Sometimes there aren&#x27;t. But
        every question is interesting and exciting to explore.
      </p>
      <p className="main-heading">I optimize</p>
      <p>
        Anything I do I can&#x27;t help wondering whether could be done better,
        faster or with less effort.
      </p>
      <p>
        A silly example is making tea in the morning. Every day I wonder whether
        I could do it a little better than I did the day before. Some days I
        make a tweak to my process. Sometimes I keep the change. Sometimes I
        throw it away and start again.
      </p>
      <p>
        My tea-making process has developed in tiny increments over years and
        years. It&#x27;s always evolving. It always will be. I&#x27;ll never
        tire of paying attention to each individual step and wondering if I
        could do it better.
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
      {/* <p>
        At every company I&#x27;ve ever worked for I&#x27;ve rapidly become the
        go-to guy for all sorts of questions. I write the how-to guide. I share
        what I&#x27;ve discovered. I volunteer to help. I literally can’t stop
        myself.
      </p> */}
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
      <p className="main-heading">
        Why I'm a great candidate for the Software Developer Trainee position
      </p>
      <p>
        I've never seen myself as an expert in anything, but I learn fast and
        pay attention to detail. I notice things that need to get done and do
        them, no need to ask. I see myself as a craftsman, not just someone with
        a job. I take pride in ensuring that everything I do is done to a high
        standard, even the bits that no-one else sees. I'm humble. I keep my
        commitments. I turn up on time. I listen.
      </p>
      <p>
        My natural inclination to learn and optimize means I pay attention to
        tiny things. “If the text in a button is off-center by a pixel you will
        go to the end of the earth to figure out why” makes me smile a big
        smile. That's me to a T. It'll bug me constantly until I figure it out.
        It might take a day. It might take a week. But I'll keep coming back to
        it until I do.
      </p>
      <p>
        My current objective is to build on this foundation by working with
        colleagues and creators whose craftsmanship and skill inspires me to
        push harder and further than ever as I pursue my new career as a
        full-stack developer. I want this opportunity more than anything for the
        experience of working with you and Steve. I admire your work and want to
        be part of making Tailwind happen.
      </p>
      {/* <p>
        Oh, and by the way, Lambda School is taught 100% remotely with people
        from all different time zones so I'm completely at home using
        collaboration tools like Slack and Zoom. Plus, being in the UK, I have a
        great location to overlap comfortably with you for four hours every day
        and get deep work done every morning before you wake up.
      </p> */}
      <p className="main-heading">
        What the future will be like if we work together
      </p>
      <p>
        Getting this trainee position will be a dream come true! At first I'll
        feel overwhelmed. But over the first few weeks I'll find my feet. I'll
        work very hard to get things done. I'll take immense pride and joy in my
        work/training.
      </p>
      <p>
        If I'm asked to do something and later realise I have no idea where to
        start I'll ask a lot of questions and try to find the answers. If I'm
        not able to find the answers, I'll reach out for help. There will be a
        few things like that in the early days, but it won't be long before I'm
        a productive member of the team/group.
      </p>
      
      <p>
        A year in you'll see someone doing something he loves with care and
        precision and sharing his knowledge and skill freely with the Tailwind
        community. You won't have to ask to know that I'm excited to start work
        every day, and that I'd probably do this even if you stopped paying me.
        It's hard to say how much being able to say that will mean to me, but my
        hope is that my story and example will inspire others to follow their
        dreams and not settle for “close-enough”.
      </p>
      <p className="main-heading">What excites me</p>
      <p>
        I'm finally on track to become something I should have become long ago.
        I let impostor syndrome get the better of me for too long. I thought
        that something you loved doing could only be a hobby, not how you made
        your living. I got busy working on things that didn't fulfill me but
        paid the bills. I thought that was all I could expect of life.
      </p>
      <p>
        So what changed? Getting older. Getting married. Having kids. I woke up
        one day with a visceral sense that if I didn't do it now it was never
        going to get any easier. In a year I would either be labouring down the
        same old track or on a different path with unknown twists and turns but
        a clear sense of purpose and excitement to see where it led.
      </p>
      <p className="main-heading">What I'm betting on</p>
      <p>
        I'm betting on me. I'm betting I can learn and do and be more than I
        ever dreamed.
      </p>
      <p>
        One of our course instructors said to focus on the basics, the things
        that would never go out of fashion: JavaScript itself rather than the
        latest trendy framework; HTML and CSS rather than today's hottest design
        library. I've been around long enough to know that although that's
        unsexy advice it's good advice, so that's what I'm doing and intend to
        keep doing.
      </p>
      <p>
        I'm betting that getting 1% better every day will compound unbelievably
        over months and years and that five years from now I'll look back and be
        proud and fulfilled in my work and life thanks to decisions I'm taking
        and opportunities I'm pursuing right now.
      </p>{" "}
    </div>
  );
}

export default AboutMe;
