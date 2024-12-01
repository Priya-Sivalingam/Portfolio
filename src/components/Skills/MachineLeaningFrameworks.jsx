import React from 'react';

const MachineLearningFrameworks = () => {
  return (
    <div className='skills_content reveal'>
      <h3 className='skills_title'>Machine Learning Frameworks</h3>
      <div className='skills_box'>
        <div className='skills_group'>
          <ul className='skills_row'>
            <li className='skills_name'>
              <span className='badge'>
                <i className='bx bx-badge-check'></i> PyTorch
                <span className='level'>Advanced</span>
              </span>
            </li>
            <li className='skills_name'>
              <span className='badge'>
                <i className='bx bx-badge-check'></i> TensorFlow
                <span className='level'>Advanced</span>
              </span>
            </li>
            <li className='skills_name'>
              <span className='badge'>
                <i className='bx bx-badge-check'></i> SciKitLearn
                <span className='level'>Intermediate</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MachineLearningFrameworks;
