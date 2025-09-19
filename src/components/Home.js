import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-5 fw-bold text-primary">
        Campus Dr. D.Y. Patil ACS College, Pimpri
      </h2>

      <div className="row">
        {/* Campus Card */}
        <div className="col-md-4 mb-4">
          <div className="card custom-card h-100 shadow-lg">
            <img
              src="/campus.jpg"
              className="card-img-top home-card-img"
              alt="Campus"
            />
            <div className="card-body">
              <h5 className="card-title">College Campus</h5>
              <p className="card-text">
                Our college campus is spread across a lush green area with
                modern classrooms, computer labs, science labs, and dedicated
                research spaces. Students get the best facilities to learn and
                grow with a peaceful environment.
              </p>
            </div>
          </div>
        </div>

        {/* Library Card */}
        <div className="col-md-4 mb-4">
          <div className="card custom-card h-100 shadow-lg">
            <img
              src="/library.jpg"
              className="card-img-top home-card-img"
              alt="Library"
            />
            <div className="card-body">
              <h5 className="card-title">Library</h5>
              <p className="card-text">
                The library houses thousands of books, e-journals, and research
                papers. Students can also access digital resources and a
                comfortable study area, making it one of the most popular spots
                on campus for self-study.
              </p>
            </div>
          </div>
        </div>

        {/* Events Card */}
        <div className="col-md-4 mb-4">
          <div className="card custom-card h-100 shadow-lg">
            <img
              src="/event.jpg"
              className="card-img-top home-card-img"
              alt="Events"
            />
            <div className="card-body">
              <h5 className="card-title">College Events</h5>
              <p className="card-text">
                Our students actively participate in cultural fests, technical
                competitions, seminars, and sports events. Annual events like
                "TechFest" and "Cultural Week" bring together creativity,
                innovation, and fun on campus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

