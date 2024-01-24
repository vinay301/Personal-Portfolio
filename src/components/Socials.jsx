import React from 'react';
import { socialLinks } from "../constants";
import { Link } from 'react-router-dom';

const Socials = () => {
  return (
    
    <section>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Socials</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {socialLinks.map((social) => (
            
            <Link to={social.link} rel="noopener noreferrer" key={social.name} className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img src={social.iconUrl} alt={social.name} className="w-1/2 h-1/2 object-contain cursor-pointer" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Socials;
