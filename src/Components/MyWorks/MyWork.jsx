import React, { useState } from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork from '../../assets/mywork_data'
import arrow from '../../assets/arrow_icon.svg'

const MyWork = () => {
  const [visibleWorks, setVisibleWorks] = useState(3);

  const showMoreWorks = () => {
    setVisibleWorks(visibleWorks + 3);
  }

  return (
    <div id='work' className='mywork'>
      <div className='mywork-title'>
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt=""/>
      </div>
      <div className='mywork-container'>
        {mywork.slice(0, visibleWorks).map((work, index) => (
          <img key={index} src={work.w_img} alt=''/>
        ))}
      </div>
      {visibleWorks < mywork.length && (
        <div className='mywork-somore' onClick={showMoreWorks}>
          <p>Show More</p>
          <img src={arrow} alt=''/>
        </div>
      )}
    </div>
  )
}

export default MyWork

