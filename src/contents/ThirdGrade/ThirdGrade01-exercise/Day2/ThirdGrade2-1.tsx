import React from 'react';
import Styled from '../../style';
import DayLayout from '../../Layout/Day2';
import { ThirdGrade1Day2 } from '../../utils/handleTitle';
import { Data21Quiz as QuizData } from '../../Data/Book1';
import { Data12QuizProps } from '../../Type/Type1';
import ExampleQuiz from './Example2-1';
import SingleQuiz from './Single2-1';
import ConfirmBtn from '../../utils/ConfirmBtn';

const ThirdGrade21Exercise: React.FC = () => {
  return (
    <DayLayout
      title={ThirdGrade1Day2.title}
      subTitle={ThirdGrade1Day2.subTitle}
    >
      <Styled.ColGapBox gap={3.75}>
        <ExampleQuiz />
        <Styled.RowWrapBox3>
          {/* 3개씩 표출하려면 2, 2개씩이면 3 */}
          {QuizData.map((item: Data12QuizProps, idx) => (
            <SingleQuiz
              key={idx}
              id={item.id}
              quiz1={item.quiz1}
              quiz2={item.quiz2}
            />
          ))}
        </Styled.RowWrapBox3>
        <ConfirmBtn type={true} day={2}/>
      </Styled.ColGapBox>
    </DayLayout>
  );
};

export default ThirdGrade21Exercise;
