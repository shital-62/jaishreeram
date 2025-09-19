import React from "react";
import "./Events.css";

function Events() {
  const events = [
    {
      title: "Tech Fest 2025",
      date: "15th January 2025",
      desc: "The annual inter-college technical festival featuring coding marathons, hackathons, robotics competitions, paper presentations, and gaming challenges. Attracts participation from top engineering colleges in Pune."
    },
    {
      title: "Cultural Fest – Sanskriti",
      date: "10th February 2025",
      desc: "The biggest cultural extravaganza of the year with inter-collegiate competitions in dance, drama, fashion shows, singing, and stand-up comedy."
    },
    {
      title: "Sports Week",
      date: "March 2025",
      desc: "A full week of outdoor and indoor sports like cricket, football, volleyball, basketball, chess, badminton, kabaddi, and track events. Encourages fitness, competition, and teamwork."
    },
    {
      title: "Science Exhibition",
      date: "April 2025",
      desc: "Students showcase working models, research projects, and innovative experiments in the fields of Physics, Chemistry, Biology, and Computer Science."
    },
    {
      title: "Freshers' Welcome",
      date: "August 2025",
      desc: "An orientation and welcome program for newly admitted students with cultural programs, fun games, and motivational talks by faculty."
    },
    {
      title: "Farewell Ceremony",
      date: "April 2026",
      desc: "A grand farewell for the final-year students with cultural performances, award ceremonies, and speeches from juniors and professors."
    },
    {
      title: "National Seminar on AI",
      date: "July 2025",
      desc: "Seminar by experts from academia and industry on Artificial Intelligence, Machine Learning, and Deep Learning."
    },
    {
      title: "Alumni Meet",
      date: "December 2025",
      desc: "A get-together of alumni to reconnect with their teachers and batchmates, share professional experiences, and guide juniors."
    },
    {
      title: "Workshop Series",
      date: "Throughout 2025",
      desc: "Practical workshops on Web Development, Cyber Security, Data Analytics, Mobile App Development, and Ethical Hacking."
    },
    {
      title: "Blood Donation Camp",
      date: "October 2025",
      desc: "A social responsibility initiative in collaboration with local hospitals to encourage students and staff to donate blood and save lives."
    },
    {
      title: "Teacher’s Day Celebration",
      date: "5th September 2025",
      desc: "Students organize cultural programs, skits, and honor their beloved teachers with gratitude and fun activities."
    },
    {
      title: "Independence Day Celebration",
      date: "15th August 2025",
      desc: "Flag hoisting, patriotic performances, and prize distribution to celebrate India's independence."
    },
    {
      title: "Republic Day Celebration",
      date: "26th January 2025",
      desc: "Parade, speeches, and cultural activities to mark Republic Day with pride and patriotism."
    },
    {
      title: "Entrepreneurship Summit",
      date: "November 2025",
      desc: "Talks by successful entrepreneurs, startup pitch competitions, and idea incubation support for budding innovators."
    },
    {
      title: "Cultural Night – Antarang",
      date: "February 2025",
      desc: "An evening of musical performances, stand-up comedy, DJ night, and dance showcases."
    },
    {
      title: "Coding Hackathon",
      date: "September 2025",
      desc: "24-hour coding challenge where teams compete to solve real-world problems using technology."
    },
    {
      title: "Photography Contest",
      date: "May 2025",
      desc: "Theme-based photography competition where students showcase their creativity and perspective."
    },
    {
      title: "Debate & Elocution Competition",
      date: "July 2025",
      desc: "Enhancing communication skills, logical thinking, and public speaking among students."
    },
    {
      title: "Music Fest – Sur Taal",
      date: "March 2025",
      desc: "Live performances by student bands, solo singers, and instrumentalists in classical and modern music."
    },
    {
      title: "Dance Battle",
      date: "March 2025",
      desc: "Group and solo dance competitions showcasing talent across classical, folk, hip-hop, and contemporary styles."
    },
    {
      title: "Drama Competition",
      date: "August 2025",
      desc: "Street plays, one-act plays, and theatrical performances spreading social awareness and entertainment."
    },
    {
      title: "Industrial Visits",
      date: "Various Dates",
      desc: "Organized visits to IT companies, manufacturing industries, and research labs to give students real-world exposure."
    },
    {
      title: "Placement Drive",
      date: "December 2025 – March 2026",
      desc: "Top recruiters visit the campus to hire students in IT, Finance, Marketing, and Research roles."
    },
    {
      title: "Women Empowerment Workshop",
      date: "October 2025",
      desc: "Sessions on self-defense, leadership, and awareness programs for women students."
    },
    {
      title: "National Level Paper Presentation",
      date: "November 2025",
      desc: "Platform for students to present their research and innovative ideas at a national level."
    },
    {
      title: "Health Check-up Camp",
      date: "June 2025",
      desc: "Free health check-ups, awareness talks, and fitness activities for students and staff."
    },
    {
      title: "Book Fair & Literary Fest",
      date: "August 2025",
      desc: "Stalls of popular publishers, poetry recitations, and author interaction sessions."
    },
    {
      title: "Cyber Security Awareness Week",
      date: "September 2025",
      desc: "Workshops and awareness sessions on online safety, ethical hacking, and data protection."
    },
    {
      title: "Student Council Elections",
      date: "July 2025",
      desc: "Democratic elections for selecting student leaders who represent peers in college activities."
    },
    {
      title: "Yoga & Meditation Camp",
      date: "June 2025",
      desc: "Wellness sessions promoting stress management, mindfulness, and physical fitness."
    },
    {
      title: "Art & Craft Exhibition",
      date: "January 2025",
      desc: "Students display their creative work in painting, sketching, crafts, and sculpture."
    }
  ];

  return (
    <div className="events-page py-5">
      <div className="container">
        <h1 className="text-center mb-5 fw-bold events-title">
          College Events 🎉
        </h1>
        <div className="row g-4">
          {events.map((event, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="event-card shadow-lg p-4 h-100">
                <h3 className="event-title">{event.title}</h3>
                <p className="event-date">{event.date}</p>
                <p className="event-desc">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;
