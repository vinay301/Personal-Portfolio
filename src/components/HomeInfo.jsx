import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from  '../assets/icons'
const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={Link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
) 

const renderContent = {
    1 : (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I'm <span className='font-semibold'>Vinay</span> 👋
            <br />
            A Software Developer from New Delhi, India
        </h1>
    ),
    2 : (
        <InfoBox 
        text="I am a Full Stack Web Developer with expertise in MERN stack and"
        link="/about"
        btnText="Learn more"
        />
    ),
    3 : (
        <InfoBox 
        text="Worked on multiple projects that embrace my skills."
        link="/projects"
        btnText="Visit My Portfolio"
        />
    ),
    4 : (
        <InfoBox 
        text="Need a project done or looking for a dev? I'm just a few keystrokes away"
        link="/contacts"
        btnText="Lets Connect"
        />
    ),

}




const HomeInfo = ({currentStage}) => {
  return renderContent [currentStage] || null
   
  
}

export default HomeInfo