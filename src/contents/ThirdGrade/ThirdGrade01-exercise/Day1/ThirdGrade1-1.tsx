import React from 'react';
import Styled from '../../style';
import Day1Layout from '../../Layout/Day1';
import { ThirdGrade1Day1 } from '../../utils/handleTitle';
import ExampleQuiz from './Example1-1';
import SingleQuiz from './Single1-1';
import ConfirmBtn from '../../utils/ConfirmBtn';

const ThirdGrade11Exercise: React.FC = () => {
  return (
    <Day1Layout
      title={ThirdGrade1Day1.title}
      subTitle={ThirdGrade1Day1.subTitle}
    >
      <Styled.RowWrapBox>
        <ExampleQuiz />
        <SingleQuiz />
      </Styled.RowWrapBox>
      <ConfirmBtn type={true} />
    </Day1Layout>
  );
};

export default ThirdGrade11Exercise;
