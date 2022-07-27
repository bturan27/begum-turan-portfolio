import './intro.css'
import React from 'react'

const Intro = () => {
  return (
    <div className='i'>
      <div className='i-left'>
          <div  className='i-left-wrapper'>
            <h2 className='i-intro'>Hello, My name is</h2>
            <h1 className='i-name'>Begum Turan</h1>
          <div className='i-title'>
              <div className='i-title-wrapper'>
                <div className='i-title-item'> Software Developer</div>
              </div>
          </div>
              <div className='i-desc'>
          I came to the US in 2014 as an exchange student and have worked 6 consecutive summers as a waitress in Montana and Wyoming. This allowed me to sponsor myself to further my education in the computer science field. Since the start of obtaining my Master's degree, I have held internships in software development in Chicago and Montana, as well as completed software development bootcamp in Silicon Valley. I am trilingual (English, German & Turkish) and constantly strive to advance these languages as well as programming.
              </div>
          </div>
          <div className='i-right'>rigth</div>
      </div>
    </div>
  )
}

export default Intro;