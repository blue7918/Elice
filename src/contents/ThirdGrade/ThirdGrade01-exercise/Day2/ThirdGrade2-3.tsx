import Styled from '../../style';
// import { useEffect, useState } from 'react';
import Day2Layout from '../../Layout/Day2';
import { ThirdGrade1Day2, SubJustCal } from '../../utils/handleTitle';
import SingleQuiz from '../Day1/Single1-3';
import { Data23Quiz as QuizData } from '../../Data/Book1';
import { Data12QuizProps } from '../../Type/Type1';
import ConfirmBtn from '../../utils/ConfirmBtn';

const ThirdGrade23Exercise = () => {
  return (
    <Day2Layout title={ThirdGrade1Day2.title} subTitle={SubJustCal}>
      <Styled.PaddingBox>
        <Styled.RowWrapBox>
          {QuizData.map((item: Data12QuizProps) => (
            <SingleQuiz
              key={item.id}
              id={item.id}
              quiz1={item.quiz1}
              quiz2={item.quiz2}
            />
          ))}
        </Styled.RowWrapBox>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} />
    </Day2Layout>
  );
};

export default ThirdGrade23Exercise;
