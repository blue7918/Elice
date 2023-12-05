import React from 'react';
import Styled from '../../style';
import DayLayout from '../../Layout/Day3';
import { ThirdGrade2Day3 } from '../../utils/handleTitle';
import { Data32Quiz as QuizData } from '../../Data/Book2';
import { Data22QuizProps as QuizProps } from '../../Type/Type2';
import SingleQuiz from './Single3-2';
import ExampleQuiz from './Example3-2';
import ConfirmBtn from '../../utils/ConfirmBtn';

const ThirdGrade32Exercise: React.FC = () => {
  return (
    <DayLayout
      title={ThirdGrade2Day3.title}
      subTitle={ThirdGrade2Day3.subTitle}
    >
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={3}>
          <ExampleQuiz />
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
      <ConfirmBtn type={true} day={3} />
    </DayLayout>
  );
};

export default ThirdGrade32Exercise;
