
import ExerciseCard from "./ExerciseCard";

const Exercises = () => {
  return (
    <div className='Exercises'>
      <ExerciseCard
        exerciseNum={1}
        exerciseName="JavaScript Drum Kit"
        exerciseDate="2020-04-01"
      />
      <ExerciseCard
        exerciseNum={2}
        exerciseName="JS and CSS Clock"
        exerciseDate="2020-04-02"
      />
      <ExerciseCard
        exerciseNum={3}
        exerciseName="CSS Variables"
        exerciseDate="2020-04-03"
      />
      <ExerciseCard
        exerciseNum={4}
        exerciseName="Array Cardio Day 1"
        exerciseDate="2020-04-04"
      />
      <ExerciseCard
        exerciseNum={5}
        exerciseName="Flex Panel Gallery"
        exerciseDate="2020-04-05"
      />
      <ExerciseCard
        exerciseNum={6}
        exerciseName="Type Ahead"
        exerciseDate="2020-04-06"
      />
      <ExerciseCard
        exerciseNum={7}
        exerciseName="Array Cardio Day 2"
        exerciseDate="2020-04-07"
      />
      <ExerciseCard
        exerciseNum={8}
        exerciseName="Fun with HTML5 Canvas"
        exerciseDate="2020-04-08"
      />
      <ExerciseCard
        exerciseNum={9}
        exerciseName="Dev Tools Domination"
        exerciseDate="2020-04-09"
      />
      <ExerciseCard
        exerciseNum={10}
        exerciseName="Hold Shift and Check Checkboxes"
        exerciseDate="2020-04-10"
      />
      <ExerciseCard
        exerciseNum={11}
        exerciseName="Custom Video Player"
        exerciseDate="2020-04-11"
      />
      <ExerciseCard
        exerciseNum={12}
        exerciseName="Key Sequence Detection"
        exerciseDate="2020-04-12"
      />
      <ExerciseCard
        exerciseNum={13}
        exerciseName="Slide in on Scroll"
        exerciseDate="2020-04-13"
      />
    </div>
  );
}

export default Exercises;
