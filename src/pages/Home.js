import React from 'react';
import './Home.css';

const Home = () => (
  <div className="home-container">
    <h1>Explore Categories</h1>
    <div className="card-container">

      {/* Roadmaps Section */}
      <div className="card">
        
      <img 
          src="https://i.postimg.cc/B6bVByWD/1701088302650.jpg" 
          alt="Software Development Logo" 
          className="card-logo-software" 
        />
        <h2>Core <br></br>
          Engineering</h2>
        
        <p>Guides for mastering engineering fundamentals.</p>
        
         <a href="https://coreengineering.ccbp.tech/" class="btn">View All</a>

   </div>
 
      <div className="card">
        <img 
          src="https://i.postimg.cc/RFnVbgK6/images.jpg " 
          alt="Software Development Logo" 
          className="card-logo-software" 
        />
      <h2>Software Development</h2>

        <p>Paths to excel in software development.</p>
        <a href="https://softwaredevelop.ccbp.tech/" class="btn">View All</a>

      </div>


      <div className="card">
      <img 
          src="https://i.postimg.cc/fTbYc8dz/hhgg.jpg" 
          alt="Software Development Logo" 
          className="card-logo-software" 
        />
        <h2>GATE Preparation</h2>
        <p>Resources for cracking the GATE exam.</p>
         <a href="https://gateexam.ccbp.tech/" class="btn">View All</a>


      </div>
      <div className="card">
      <img 
          src="https://i.postimg.cc/wvHfsKmS/Specialized-Fields-logo.webp" 
          alt="Software Development Logo" 
          className="card-logo-software" 
        />
        <h2>Specialized Fields</h2>
        <p>Focused guides for niche areas of study.</p>
     
         <a href="https://specialized.ccbp.tech" class="btn">View All</a>

      </div>

      {/* Resources Section */}
      <div className="card">
      <img 
          src="https://i.postimg.cc/FFwvsZmH/images.jpg" 
          alt="Software Development Logo" 
          className="card-logo-software" 
        />
        <h2>Placement <br></br> Prep</h2>
        <p>Interview questions and coding challenges.</p>
      
       <a href="https://placementcol.ccbp.tech " class="btn">ViewAll</a>

      </div>
      <div className="card">
      <img 
          src="https://i.postimg.cc/JnNsHLGW/Academic-logo.jpg" 
          alt="Software Development Logo" 
          className="card-logo-software" 
        />
        <h2>Academic Materials</h2>
        <p>Lecture notes and e-books for your studies.</p>
         <a href="https://academic.ccbp.tech" class="btn">View All</a>

      </div>
      <div className="card">
      <img 
          src="https://i.postimg.cc/RVv3kdn1/download.jpg" 
          alt="Software Development Logo" 
          className="card-logo-software" 
        />
        <h2>Free  <br></br>Courses</h2>
        <p>Skill-building courses with certifications.</p>
       <a href="https://freecou.ccbp.tech" class="btn">View All</a>

      </div>
      <div className="card">
      <img 
          src="https://i.postimg.cc/zv7GFVgd/vio22.jpg" 
          alt="Software Development Logo" 
          className="card-logo-software" 
        />
        <h2>Video  <br></br>Tutorials</h2>
        <p>Comprehensive video guides on key topics.</p>
      
         <a href="https://videotutorials.ccbp.tech/" class="btn">View All</a>

      </div>

      {/* Mentorship & Events Section */}
      <div className="card">
      <img 
          src="https://i.postimg.cc/RZ2JXJn0/Mentorship.jpg" 
          alt="Software Development Logo" 
          className="card-logo-software" 
        />
        <h2> Mentorship</h2>
        <p>Guidance from experienced peers.</p>
         <a href="https:connectseniors.ccbp.tech" class="btn">View All</a>

      </div>
      <div className="card">
      <img 
          src="https://i.postimg.cc/T3f4hhPp/download.jpg" 
          alt="Software Development Logo" 
          className="card-logo-software" 
        />
        <h2>Expert Talks</h2>
        <p>Sessions from industry professionals.</p>
      
         <a href="https://softwaredevelop.ccbp.tech/" class="btn">View All</a>

      </div>
      <div className="card">
      <img 
          src="https://i.postimg.cc/D03K5vxb/images.jpg" 
          alt="Software Development Logo" 
          className="card-logo-software" 
        />
        <h2>Workshops</h2>
        <p>Skill-enhancing academic and technical workshops.</p>
      
        <a href="https://softwaredevelop.ccbp.tech/" class="btn">View All</a>

      </div>
      <div className="card">
      <img 
          src="https://i.postimg.cc/jjCKSkWC/download.png" 
          alt="Software Development Logo" 
          className="card-logo-software" 
        />
        <h2>Hackathons</h2>
      
      
        <p>Compete and showcase your innovative ideas.</p>
      
         <a href="https://softwaredevelop.ccbp.tech/" class="btn">View All</a>

      </div>
    </div>
  </div>
);

export default Home;
