import React from 'react';
import Styled from '../../style';
import DayLayout from '../../Layout/Day4';
import { ThirdGrade2Day4 } from '../../utils/handleTitle';
import { Data42Quiz as QuizData } from '../../Data/Book2';
import { Data22QuizProps as QuizProps } from '../../Type/Type2';
import SingleQuiz from '../Day3/Single3-2';
import ConfirmBtn from '../../utils/ConfirmBtn';

const ThirdGrade42Exercise: React.FC = () => {
  return (
    <DayLayout
      title={ThirdGrade2Day4.title}
      subTitle={ThirdGrade2Day4.subTitle}
    >
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={3}>
          {QuizData.map((item: QuizProps, idx) => (
            <SingleQuiz
              key={idx}
              id={item.id}
              quiz1={item.quiz1}
              quiz2={item.quiz2}
              quiz3={item.quiz3}
            />
          ))}
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={4} />
    </DayLayout>
  );
};

export default ThirdGrade42Exercise;
