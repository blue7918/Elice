// import { useEffect, useState } from 'react';
import { Data21Quiz as QuizData } from '../../Data/Book3';
import DayLayout from '../../Layout/Day2';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { SubBlank, ThirdGrade3Day2 } from '../../utils/handleTitle';
import SingleQuiz from './Single2-1';

import type { Data12QuizProps } from '../../Type/Type1';

const ThirdGrade21Exercise = () => {
  return (
    <DayLayout title={ThirdGrade3Day2.title} subTitle={SubBlank}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={4}>
          <div>예시 부분 이미지 첨부 예정</div>
          <Styled.RowWrapBox5>
            {QuizData.map((item: Data12QuizProps, idx) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                quiz1={item.quiz1}
                quiz2={item.quiz2}
              />
            ))}
          </Styled.RowWrapBox5>
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={2} />
    </DayLayout>
  );
};

export default ThirdGrade21Exercise;
