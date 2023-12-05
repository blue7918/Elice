import Styled from '../../style';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day5';
import { ThirdGrade2Day5 } from '../../utils/handleTitle';
import SingleQuiz from './Single5-3';
import { Data53Quiz as QuizData } from '../../Data/Book2';
import { Data12QuizProps } from '../../Type/Type1';
import ConfirmBtn from '../../utils/ConfirmBtn';

const ThirdGrade53Exercise = () => {
  return (
    <DayLayout
      title={ThirdGrade2Day5.title}
      subTitle={ThirdGrade2Day5.subTitle}
    >
      <Styled.PaddingBox>
          <Styled.RowWrapBox4>
            {QuizData.map((item: Data12QuizProps, idx) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                quiz1={item.quiz1}
                quiz2={item.quiz2}
              />
            ))}
          </Styled.RowWrapBox4>
        </Styled.PaddingBox>
      <ConfirmBtn type={true} day={5} />
    </DayLayout>
  );
};

export default ThirdGrade53Exercise;
