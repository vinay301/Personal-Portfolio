import { skills, experiences } from "../constants"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from "../components/CTA";
import Socials from "../components/Socials";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Vinay</span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Associate Software Developer @<Link to={import.meta.env.VITE_APP_NAGARRO_LINK}><span className="blue-gradient_text font-semibold drop-shadow">Nagarro</span></Link>, specializing in computer science and engineering 
          through hands-on learning and building applications.
        </p>
      </div>
        {/* Skills */}
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill,index) => (
            <div className="block-container w-20 h-20" key={`skills-point-${index}`}>
              <div className="btn-back rounded-xl"/>
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain"/>
              </div>
            </div>
          ))}
        </div>
      </div>
            {/* work-experience */}
      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
          <div className="mt-5 flex flex-col gap-3 text-slate-500">
            <p>
            As a Full Stack Web Developer @<Link to={import.meta.env.VITE_APP_NAGARRO_LINK}><span className="blue-gradient_text font-semibold drop-shadow">Nagarro</span></Link>,
            I have been instrumental in designing and implementing cutting-edge web applications that meet the dynamic needs of our clients. Working collaboratively in a cross-functional team, I've demonstrated proficiency in both .NET and Angular, as well as the MERN stack, to deliver robust and scalable solutions.
             
            </p>
          </div>
          <div className="mt-12 flex">
            <VerticalTimeline>
              {experiences.map((experience) => (
                <VerticalTimelineElement key={experience.company_name} date={experience.date} icon=
                {
                  <div className="flex justify-center items-center w-full h-full">
                    <img src={experience.icon} alt={experience.company_name} className="w-60% h-60% object-contain" />
                  </div>
                }
                iconStyle={{
                  background: experience.iconBg
                }}
                contentStyle={{ 
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none'
                  
                 }}
                >
                  <div>
                    <h3 className="text-black text-xl font-poppins font-semibold">{experience.title}</h3>
                    <p className="text-black-500 font-medium font-base" style={{margin:0}}>{experience.company_name}</p>
                  </div>
                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                      <li className="text-balck-500/50 font-normal pl-1 text-sm" key={`experience-point-${index}`}>{point}</li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
      </div>

      <hr className="border-slate-200"/>
      <Socials/>

      <hr className="border-slate-200"/>
      <CTA/>
    </section>
  )
}

export default About