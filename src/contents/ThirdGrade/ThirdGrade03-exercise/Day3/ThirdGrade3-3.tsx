//이미지 필요

import { Data33Quiz as QuizData } from '../../Data/Book3';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day3';
import Styled from '../../style';
import SingleQuiz from '../../ThirdGrade02-exercise/Day1/Single1-3';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { SubJustCal, ThirdGrade3Day3 } from '../../utils/handleTitle';

import type { Data12QuizProps } from '../../Type/Type1';

const ThirdGrade33Exercise = () => {
  return (
    <DayLayout title={ThirdGrade3Day3.title} subTitle={SubJustCal}>
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
      <ConfirmBtn type={true} day={3} />
    </DayLayout>
  );
};

export default ThirdGrade33Exercise;
