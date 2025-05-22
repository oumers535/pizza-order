import React from 'react'
import john from './images/john-doe.png'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={john} alt='john'  data-aos="fade-up"  data-aos-duration="1500"
  data-aos-delay="300"/>
                <div className='col-2 '>
                    <h2  data-aos="fade-up"  data-aos-duration="1500"
  data-aos-delay="300">About</h2>
                    <span className='line'data-aos="fade-up"  data-aos-duration="1500"
  data-aos-delay="300" ></span>
                    <p  data-aos="fade-up"  data-aos-duration="1500"
  data-aos-delay="300">Intense is an International Financial Planning company with offices i n multiple jurisdictions over the world. Working with Intense gives me the ability to advise internat ional expatriates living in the middle east from where I live in USA.</p>
                    <p  data-aos="fade-up"  data-aos-duration="1500"
  data-aos-delay="300">I am Abebe Kebede, a senior advisor for an independently owned financial planning company called Intense.</p>
                    <button className='button'  data-aos="fade-up"  data-aos-duration="1500"
  data-aos-delay="300">Explore More</button>
                </div>
            </div>
        </div>
    )
}

export default About
