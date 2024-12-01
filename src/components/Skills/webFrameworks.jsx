import React from 'react';

const WebFrameworks = () => {
  return (
    <div className='skills_content reveal'>
      <h3 className='skills_title'>Web/Mobile App Frameworks</h3>
      <div className='skills_box'>
        <div className='skills_group'>
          <ul className='skills_row'>
            <li className='skills_name'>
              <span className='badge'>
                <i className='bx bx-badge-check'></i> React Native
                <span className='level'>Advanced</span>
              </span>
            </li>
            <li className='skills_name'>
              <span className='badge'>
                <i className='bx bx-badge-check'></i> React
                <span className='level'>Advanced</span>
              </span>
            </li>
            <li className='skills_name'>
              <span className='badge'>
                <i className='bx bx-badge-check'></i> Angular
                <span className='level'>Advanced</span>
              </span>
            </li>
            <li className='skills_name'>
              <span className='badge'>
                <i className='bx bx-badge-check'></i> Django
                <span className='level'>Intermediate</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WebFrameworks;
