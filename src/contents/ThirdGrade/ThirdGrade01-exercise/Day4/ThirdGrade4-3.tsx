import Styled from '../../style';
// import { useEffect, useState } from 'react';
import Day4Layout from '../../Layout/Day4';
import { ThirdGrade1Day4, SubJustCal } from '../../utils/handleTitle';
import SingleQuiz from '../Day1/Single1-3';
import { Data43Quiz as QuizData } from '../../Data/Book1';
import { Data12QuizProps } from '../../Type/Type1';
import ConfirmBtn from '../../utils/ConfirmBtn';

const ThirdGrade43Exercise = () => {
  return (
    <Day4Layout title={ThirdGrade1Day4.title} subTitle={SubJustCal}>
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
    </Day4Layout>
  );
};

export default ThirdGrade43Exercise;