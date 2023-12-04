import React from 'react';
import Styled from '../../style';
import Day2Layout from '../../Layout/Day2';
import { ThirdGrade1Day2, SubJustCal } from '../../utils/handleTitle';
import { Data22Quiz as QuizData } from '../../Data/Book1';
import { Data12QuizProps } from '../../Type/Type1';
// import ExampleQuiz from './Example2-1';
import SingleQuiz from './Single2-1';
import ConfirmBtn from '../../utils/ConfirmBtn';

const ThirdGrade22Exercise: React.FC = () => {
  return (
    <Day2Layout
      title={ThirdGrade1Day2.title}
      subTitle={SubJustCal}
    >
      <Styled.ColGapBox>
        {/* <ExampleQuiz /> */}
        <Styled.PaddingBox2>
        <Styled.RowWrapBox2>  {/* 3개씩 표출하려면 2, 2개씩이면 3 */}
          {QuizData.map((item: Data12QuizProps) => (
            <SingleQuiz
              key={item.id}
              id={item.id}
              quiz1={item.quiz1}
              quiz2={item.quiz2}
            />
          ))}
        </Styled.RowWrapBox2>
        </Styled.PaddingBox2>
        <ConfirmBtn type={true} />
      </Styled.ColGapBox>
    </Day2Layout>
  );
};

export default ThirdGrade22Exercise;
