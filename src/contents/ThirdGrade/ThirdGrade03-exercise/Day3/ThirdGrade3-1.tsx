import React from 'react';

import { Data31Quiz as QuizData } from '../../Data/Book3';
import DayLayout from '../../Layout/Day3';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { ThirdGrade3Day3 as Day } from '../../utils/handleTitle';
import SingleQuiz from './Single3-1';

import type { Data11QuizProps1 as QuizProps } from '../../Type/Type3';

const ThirdGrade31Exercise: React.FC = () => {
  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={3}>
          {QuizData.map((item: QuizProps, idx) => (
            <SingleQuiz
              key={idx}
              id={item.id}
              imgId={idx}
              quiz1={item.quiz1}
              quiz2={item.quiz2}
            />
          ))}
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={3} />
    </DayLayout>
  );
};

export default ThirdGrade31Exercise;
