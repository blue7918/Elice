import Styled from '../../style';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day4';
import { ThirdGrade1Day4, SubJustCal } from '../../utils/handleTitle';
import SingleQuiz from '../Day1/Single1-3';
import { Data43Quiz as QuizData } from '../../Data/Book1';
import { Data12QuizProps } from '../../Type/Type1';
import ConfirmBtn from '../../utils/ConfirmBtn';

const ThirdGrade43Exercise = () => {
  return (
    <DayLayout title={ThirdGrade1Day4.title} subTitle={SubJustCal}>
      <Styled.PaddingBox>
        <Styled.RowWrapBox>
          {QuizData.map((item: Data12QuizProps, idx) => (
            <SingleQuiz
              key={idx}
              id={item.id}
              quiz1={item.quiz1}
              quiz2={item.quiz2}
            />
          ))}
        </Styled.RowWrapBox>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={4}/>
    </DayLayout>
  );
};

export default ThirdGrade43Exercise;