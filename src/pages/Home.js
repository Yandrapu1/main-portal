import React from 'react';
import './Home.css';

const Home = () => (
  <div className="home-container">
    <h1>Explore Categories</h1>
    <div className="card-container">



      {/* Roadmaps Section */}
      <div className="card">
        
      <img 
          src="https://i.postimg.cc/pd3SdHtJ/core-img.jpg" 
          alt="Software Development Logo" 
          className="card-logo-software" 
        />
        <h2>Core Engineering</h2>
        <p>Guides for mastering engineering fundamentals.</p>
        
        <button class="btn btn-light"> <a href="https://1card.ccbp.tech/">ViewAll</a></button>



   </div>



      
      <div className="card">
        <img 
          src="https://i.postimg.cc/HxVD89Z0/software-logo.png" 
          alt="Software Development Logo" 
          className="card-logo-software" 
        />
      <h2>Software Development</h2>

        <p>Paths to excel in software development.</p>
      </div>








      <div className="card">
      <img 
          src="https://i.postimg.cc/Njr3BfKb/Gate-Logo.jpg" 
          alt="Software Development Logo" 
          className="card-logo-software" 
        />
        <h2>GATE Preparation</h2>
        <p>Resources for cracking the GATE exam.</p>
      </div>
      <div className="card">
      <img 
          src="https://i.postimg.cc/wvHfsKmS/Specialized-Fields-logo.webp" 
          alt="Software Development Logo" 
          className="card-logo-software" 
        />
        <h2>Specialized Fields</h2>
        <p>Focused guides for niche areas of study.</p>
      </div>

      {/* Resources Section */}
      <div className="card">
      <img 
          src="https://i.postimg.cc/76LXPmBD/placement-logo.png" 
          alt="Software Development Logo" 
          className="card-logo-software" 
        />
        <h2>Placement Prep</h2>
        <p>Interview questions and coding challenges.</p>
      </div>
      <div className="card">
      <img 
          src="https://i.postimg.cc/JnNsHLGW/Academic-logo.jpg" 
          alt="Software Development Logo" 
          className="card-logo-software" 
        />
        <h2>Academic Materials</h2>
        <p>Lecture notes and e-books for your studies.</p>
      </div>
      <div className="card">
      <img 
          src="https://i.postimg.cc/HLCHc75V/online-cources-logo.avif" 
          alt="Software Development Logo" 
          className="card-logo-software" 
        />
        <h2>Free Courses</h2>
        <p>Skill-building courses with certifications.</p>
      </div>
      <div className="card">
      <img 
          src="https://i.postimg.cc/ncYxCpNZ/Video-Tutorials-logo.webp" 
          alt="Software Development Logo" 
          className="card-logo-software" 
        />
        <h2>Video Tutorials</h2>
        <p>Comprehensive video guides on key topics.</p>
      </div>

      {/* Mentorship & Events Section */}
      <div className="card">
      <img 
          src="https://i.postimg.cc/t4ZzB4yG/senior-logo.png" 
          alt="Software Development Logo" 
          className="card-logo-software" 
        />
        <h2>Connect with Seniors</h2>
        <p>Guidance from experienced peers.</p>
      </div>
      <div className="card">
      <img 
          src="https://i.postimg.cc/5NM1467n/Expert-Talks-logo.webp" 
          alt="Software Development Logo" 
          className="card-logo-software" 
        />
        <h2>Expert Talks</h2>
        <p>Sessions from industry professionals.</p>
      </div>
      <div className="card">
      <img 
          src="https://i.postimg.cc/6Q1ttcgv/Workshops-logo.jpg" 
          alt="Software Development Logo" 
          className="card-logo-software" 
        />
        <h2>Workshops</h2>
        <p>Skill-enhancing academic and technical workshops.</p>
      </div>
      <div className="card">
      <img 
          src="https://i.postimg.cc/Njdwkbgz/Hackathons-logo.png" 
          alt="Software Development Logo" 
          className="card-logo-software" 
        />
        <h2>Hackathons</h2>
        <p>Compete and showcase your innovative ideas.</p>
      </div>
    </div>
  </div>
);

export default Home;
