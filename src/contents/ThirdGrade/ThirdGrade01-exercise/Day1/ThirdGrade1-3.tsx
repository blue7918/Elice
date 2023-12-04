import React from 'react';
import Styled from '../../style';
// import { useEffect, useState } from 'react';
import Day1Layout from '../../Layout/Day1';
import { ThirdGrade1Day1, SubJustCal } from '../../utils/handleTitle';
import SingleQuiz from './Single1-3';
import { Data13Quiz as QuizData } from '../../Data/Book1';
import { Data12QuizProps } from '../../Type/Type1';
import ConfirmBtn from '../../utils/ConfirmBtn';

const ThirdGrade13Exercise = () => {
  return (
    <Day1Layout title={ThirdGrade1Day1.title} subTitle={SubJustCal}>
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
    </Day1Layout>
  );
};

export default ThirdGrade13Exercise;
