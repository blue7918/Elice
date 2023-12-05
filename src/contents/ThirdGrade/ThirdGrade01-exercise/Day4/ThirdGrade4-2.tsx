import Styled from '../../style';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day4';
import { ThirdGrade1Day4, SubBlank } from '../../utils/handleTitle';
import { Data42Quiz as QuizData } from '../../Data/Book1';
import { Data42QuizProps as QuizProps } from '../../Type/Type1';
import SingleQuiz from './Single4-2';
import ConfirmBtn from '../../utils/ConfirmBtn';

const ThirdGrade42Exercise = () => {
  return (
    <DayLayout title={ThirdGrade1Day4.title} subTitle={SubBlank}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={2.4}>
          {QuizData.map((item: QuizProps, idx) => (
            <SingleQuiz
              key={idx}
              id={item.id}
              quiz1={item.quiz1}
              quiz2={item.quiz2}
              quiz3={item.quiz3}
              quiz4={item.quiz4}
              quiz5={item.quiz5}
              
            />
          ))}
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={4}/>
    </DayLayout>
  );
};

export default ThirdGrade42Exercise;
