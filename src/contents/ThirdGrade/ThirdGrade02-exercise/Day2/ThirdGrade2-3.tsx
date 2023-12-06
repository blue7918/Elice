import { Data23Quiz as QuizData } from '../../Data/Book2';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day2';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { SubJustCal, ThirdGrade2Day2 } from '../../utils/handleTitle';
import SingleQuiz from '../Day1/Single1-3';

import type { Data12QuizProps } from '../../Type/Type1';

const ThirdGrade23Exercise = () => {
  return (
    <DayLayout title={ThirdGrade2Day2.title} subTitle={SubJustCal}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={4}>
          <div>예시 부분 이미지 첨부 예정</div>
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
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={2} />
    </DayLayout>
  );
};

export default ThirdGrade23Exercise;
