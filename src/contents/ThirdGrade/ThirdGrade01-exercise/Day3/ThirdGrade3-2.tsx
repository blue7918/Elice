import React from 'react';
import Styled from '../../style';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day3';
import { ThirdGrade1Day3, SubBlank } from '../../utils/handleTitle';
import { Data32Quiz as QuizData } from '../../Data/Book1';
import { Data12QuizProps } from '../../Type/Type1';
import SingleQuiz from './Single3-2';
import ExampleQuiz from './Example3-2';
import ConfirmBtn from '../../utils/ConfirmBtn';

const ThirdGrade32Exercise = () => {
  return (
    <DayLayout title={ThirdGrade1Day3.title} subTitle={SubBlank}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={2.4}>
          <ExampleQuiz />
          {QuizData.map((item: Data12QuizProps, idx) => (
            <SingleQuiz
              key={idx}
              id={item.id}
              quiz1={item.quiz1}
              quiz2={item.quiz2}
            />
          ))}
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={3}/>
    </DayLayout>
  );
};

export default ThirdGrade32Exercise;
