import React from 'react';
import Styled from '../../style';
// import { useEffect, useState } from 'react';
import Day1Layout from '../../Layout/Day1';
import { ThirdGrade1Day1, SubBlank } from '../../utils/handleTitle';
import { Data12Quiz  as QuizData } from '../../Data/Book1';
import { Data12QuizProps } from '../../Type/Type1';
import ExampleQuiz from './Example1-2';
import SingleQuiz from './Single1-2';

import ConfirmBtn from '../../utils/ConfirmBtn';

const ThirdGrade12Exercise = () => {
  return (
    <Day1Layout
      title={ThirdGrade1Day1.title}
      subTitle={SubBlank}
    >
      <Styled.ColGapBox gap={3.75}>
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
      <ConfirmBtn type={true} />
    </Day1Layout>
  );
};

export default ThirdGrade12Exercise;
