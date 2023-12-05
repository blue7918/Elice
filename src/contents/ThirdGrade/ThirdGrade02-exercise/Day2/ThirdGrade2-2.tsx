import React from 'react';
import Styled from '../../style';
import DayLayout from '../../Layout/Day2';
import { ThirdGrade2Day2 } from '../../utils/handleTitle';
import { Data22Quiz as QuizData } from '../../Data/Book2';
import { Data22QuizProps as QuizProps } from '../../Type/Type2';
import SingleQuiz from './Single2-2';
import ConfirmBtn from '../../utils/ConfirmBtn';

const ThirdGrade22Exercise: React.FC = () => {
  return (
    <DayLayout
      title={ThirdGrade2Day2.title}
      subTitle={ThirdGrade2Day2.subTitle}
    >
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={3}>
          {QuizData.map((item: QuizProps, idx) => (
            <SingleQuiz
              key={idx}
              id={item.id}
              quiz1={item.quiz1}
              quiz2={item.quiz2}
              quiz3={item.quiz3}
            />
          ))}
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={2} />
    </DayLayout>
  );
};

export default ThirdGrade22Exercise;
