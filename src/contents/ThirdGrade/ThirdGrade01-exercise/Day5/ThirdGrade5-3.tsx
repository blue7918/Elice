import Styled from '../../style';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day5';
import { ThirdGrade1Day5, SubWay } from '../../utils/handleTitle';
import { Data53Quiz as QuizData } from '../../Data/Book1';
import { Data53QuizProps as QuizProps } from '../../Type/Type1';
import SingleQuiz from './Single5-3';
import ConfirmBtn from '../../utils/ConfirmBtn';

const ThirdGrade53Exercise = () => {
  return (
    <DayLayout title={ThirdGrade1Day5.title} subTitle={SubWay}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={2.4}>
          {QuizData.map((item: QuizProps, idx) => (
            <SingleQuiz
              key={idx}
              id={item.id}
              quiz1={item.quiz1}
            />
          ))}
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={5}/>
    </DayLayout>
  );
};

export default ThirdGrade53Exercise;
