import React from 'react'
import user1 from './images/user1.jpeg'
import user2 from './images/user2.jpeg'
import user3 from './images/user3.jpeg'
import './Testimonials.css'

const Testimonials = () => {
    return (
        <div className='testimonials' id='testimonials'>
            <div className='container'>
                <h2 data-aos="fade-up"  data-aos-duration="1500"
  data-aos-delay="300">Testimonials</h2>
                <span className='line'data-aos="fade-up"  data-aos-duration="1500"
  data-aos-delay="300"></span>
                <div className='content'>
                    <div className='card' data-aos="fade-up"  data-aos-duration="1500"
  data-aos-delay="300">
                        <img src={user1} alt='user1'/>
                        <p>It is not every day that you come across a passionate and trustworthy financial advisor. Abebe Kebede is true professional who does his work really well. Thanks Abebe!</p>
                        <p><span>Johnson.M.J.</span></p>
                        <p>Director of "Financial Times AAU"</p>
                    </div>
                    <div className='card' data-aos="fade-up"  data-aos-duration="1500"
  data-aos-delay="300">
                        <img src={user2} alt='user1'/>
                        <p>In just 2 very short meetings with Abebe he managed to find the solution personally catered to my situation and expectations. Punctual, well informed and very reliable.</p>
                        <p><span>Carol Harper</span></p>
                        <p>Director at Risktec Solutions Ltd</p>
                    </div>
                    <div className='card' data-aos="fade-up"  data-aos-duration="1500"
  data-aos-delay="300">
                        <img src={user3} alt='user1'/>
                        <p>A very professional financial advisor, who is true to his word. Abebe has demonstrated a high amount of integrity in the time I have known him, and he is fast to respond to my concerns.</p>
                        <p><span>Snow.J.R.</span></p>
                        <p>Managing Director of BPW Global</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
