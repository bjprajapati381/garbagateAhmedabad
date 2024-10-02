import React from "react";
import Slider from "react-slick";
import TeamMemberCard from "./TeamMemberCard"; // Ensure you have this component created
import Logo from "../../assets/dandiya-raas.png"; // Example logo

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "Founder",
    bio: "Passionate about bringing communities together through culture.",
    image: "src/assets/women/1.jpeg", // Replace with actual image path
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Event Manager",
    bio: "Expert in organizing memorable events and gatherings.",
    image: "src/assets/women/1.jpeg",
  },
  {
    id: 3,
    name: "Sam Wilson",
    role: "Marketing Specialist",
    bio: "Focuses on connecting with audiences through innovative campaigns.",
    image: "src/assets/women/1.jpeg",
  },
  {
    id: 4,
    name: "Alice Johnson",
    role: "Community Coordinator",
    bio: "Loves engaging with the community to promote cultural events.",
    image: "src/assets/women/1.jpeg",
  },
  // Add more team members as needed
];

const About = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards at a time
    slidesToScroll: 1,
    touchMove: true, // Enable sliding on touch devices
    arrows: teamMembers.length > 3, // Show arrows only if there are more than 3 members
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 cards on medium screens
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 card on small screens
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="container pb-8">
      <header className="py-8">
        <h1 className="text-3xl font-bold text-center">About Us</h1>
        <h2 className="text-xl text-center mt-2">Learn more about our mission, vision, and team.</h2>
      </header>

      {/* Introduction Section */}
      <section className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center justify-center mb-4">
          <img src={Logo} alt="Logo" className="h-16" />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h2>
        <p className="text-gray-700">
          At GarbaGate Ahmedabad, we aim to bring people together through vibrant events that celebrate our culture and community. Our focus is on creating memorable experiences for everyone involved.
        </p>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
        <Slider {...settings}>
          {teamMembers.map((member) => (
            <div key={member.id} className="p-4">
              <TeamMemberCard member={member} />
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default About;
