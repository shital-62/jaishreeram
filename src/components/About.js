import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      {/* Main Heading */}
      <div className="text-center py-5 about-header">
        <h1 className="display-4 fw-bold">About Dr. D.Y. Patil ACS College, Pimpri</h1>
        <p className="lead">A Legacy of Excellence in Education since 1995

        </p>
        <br/>
        <p>Established in 1995 under Dr. D. Y. Patil Pratishthan.

Affiliated to Savitribai Phule Pune University (SPPU).

Accredited with NAAC “A++” Grade with a CGPA of 3.55/4.

Over the years, the college has grown into one of the leading higher education institutes in Pune, known for its academic excellence and student development.</p>
      </div>

      <div className="container my-5">
        {/* History Section */}
        <div className="row align-items-center section-row">
          <div className="col-md-6">
            <img src="/college.jpg" alt="College" className="img-fluid rounded shadow-lg" />
          </div>
          <div className="col-md-6">
            <h2 className="section-heading">College Journey</h2>
            <p className="section-text">
              Established in <b>1995</b>, Dr. D.Y. Patil Arts, Commerce and Science
              College has been a leader in higher education in Pune. Affiliated to
              <b> Savitribai Phule Pune University</b>, the college started with a
              vision to provide world-class education to all sections of society. 
              Over the decades, the institute has grown into a multidisciplinary hub 
              for learning, research, and innovation.
            </p>
            <p>Well-equipped science and computer laboratories.

A large library with extensive resources.

Experienced and qualified faculty.

Focus on holistic development through extracurricular activities, skill development, and cultural programs.</p>
          </div>
        </div>

        {/* Faculty Section */}
        <div className="row align-items-center flex-md-row-reverse section-row">
          <div className="col-md-6">
            <img src="/faculty.jpg" alt="Faculty" className="img-fluid rounded shadow-lg" />
          </div>
          <div className="col-md-6">
            <h2 className="section-heading">College Faculty</h2>
            <p className="section-text">
              With more than <b>120+ qualified professors</b>, the college faculty is
              the backbone of academic excellence. Teachers not only guide students
              in classrooms but also mentor them for research, competitions, and
              personal development. The faculty regularly publishes research papers
              in reputed journals, ensuring global academic relevance.

              Undergraduate Programs in Arts, Commerce, and Science.

Postgraduate Programs in selected disciplines (like M.Com, M.Sc, MCA, etc.).

Strong Commerce department offering B.Com and M.Com courses.
            </p>
          </div>
        </div>

        {/* Courses Section */}
        <div className="row align-items-center section-row">
          <div className="col-md-6">
            <img src="/courses.jpg" alt="Courses" className="img-fluid rounded shadow-lg" />
          </div>
          <div className="col-md-6">
            <h2 className="section-heading">Courses Offered</h2>
            <p className="section-text">
              The college offers diverse courses in <b>Arts, Commerce, and Science</b>.
              Popular programs include B.Sc. in Computer Science, Microbiology,
              Electronics, B.Com. with specializations, B.A. in multiple streams,
              along with M.Sc, M.Com, and PhD programs. Every course is designed to
              provide practical as well as theoretical knowledge.
            </p>
          </div>
        </div>

        {/* Placements Section */}
        <div className="row align-items-center flex-md-row-reverse section-row">
          <div className="col-md-6">
            <img src="/placement.jpg" alt="Placements" className="img-fluid rounded shadow-lg" />
          </div>
          <div className="col-md-6">
            <h2 className="section-heading">Placements</h2>
            <p className="section-text">
              The Placement Cell brings top recruiters such as <b>TCS, Infosys,
              Deloitte, Wipro, Accenture</b> to campus. With strong industry
              connections, students secure packages between <b>3 LPA – 12 LPA</b>.
              Soft skill training, mock interviews, and internships prepare students
              for a successful career in India and abroad.
            </p>
          </div>
        </div>

        {/* Student Life Section */}
        <div className="row align-items-center section-row">
          <div className="col-md-6">
            <img src="/students.jpg" alt="Student Life" className="img-fluid rounded shadow-lg" />
          </div>
          <div className="col-md-6">
            <h2 className="section-heading">Student Life</h2>
            <p className="section-text">
              With more than <b>5000+ students</b>, the campus is always alive with
              energy. From cultural fests, technical competitions, sports, NSS, and
              NCC to research symposiums, students are encouraged to shine in all
              aspects of life. Alumni across the globe stand testimony to the
              college’s commitment to excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
