import React from 'react';
import PropTypes from 'prop-types';

const TeamMemberCard = ({ member }) => {
  return (
    <div               className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
>
      <img src={member.image} alt={member.name} className="rounded-full w-32 h-32 mx-auto" />
      <div className="p-4 text-center">
                {/* star rating */}
                {/* <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div> */}
                <h1 className="text-xl font-bold">{member.name}</h1>
                <h3 className="text-xs font-bold">{member.role}</h3>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {member.bio}
                </p>
              </div>
    </div>
  );
};

// PropTypes validation
TeamMemberCard.propTypes = {
  member: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default TeamMemberCard;
