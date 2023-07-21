// import React from "react";
import PropTypes from "prop-types";

import "./ExerciseCard.scss";

const pastelColors = [
  'FEBCC8',
  'FFFFD8',
  'EAEBFF',
  'E0FEFE',
  'D3EEFF',
];

const ExerciseCard = props => {
  const {
    exerciseDate,
    // exerciseDesc,
    exerciseName,
    exerciseNum,
  } = props;

  const handleClick = () => {
    // change the route to the exercise page
    // console.log('clicked');

    window.location.href = `../exercises/${exerciseNum < 10 ? '0' : ''}${exerciseNum} - ${exerciseName}/index-START.html`;
  };

  const backgroundColor = pastelColors[exerciseNum % pastelColors.length];

  return (
    <div className='ExerciseCard' onClick={handleClick} style={{backgroundColor: `#${backgroundColor}`}}>
      <h1 className='ExerciseCard__header'>
        {exerciseNum} {exerciseName}
      </h1>
      {/* <p className='ExerciseCard__desc'>{exerciseDesc}</p> */}
      <p className='ExerciseCard__date'>{exerciseDate}</p>
    </div>
  );
}

ExerciseCard.propTypes = {
  exerciseDate: PropTypes.string.isRequired,
  exerciseDesc: PropTypes.string.isRequired,
  exerciseName: PropTypes.string.isRequired,
  exerciseNum: PropTypes.number.isRequired,
};

export default ExerciseCard;
