import React from 'react';
import Styled from '../../style';
// import { useEffect, useState } from 'react';
import Day3Layout from '../../Layout/Day3';
import { ThirdGrade1Day3, SubBlank } from '../../utils/handleTitle';
import { Data32Quiz as QuizData } from '../../Data/Book1';
import { Data12QuizProps } from '../../Type/Type1';
import SingleQuiz from './Single3-2';
import ExampleQuiz from './Example3-2';
import ConfirmBtn from '../../utils/ConfirmBtn';

const ThirdGrade32Exercise = () => {
  return (
    <Day3Layout title={ThirdGrade1Day3.title} subTitle={SubBlank}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={2.4}>
          <ExampleQuiz />
          {QuizData.map((item: Data12QuizProps) => (
            <SingleQuiz
              key={item.id}
              id={item.id}
              quiz1={item.quiz1}
              quiz2={item.quiz2}
            />
          ))}
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} />
    </Day3Layout>
  );
};

export default ThirdGrade32Exercise;
