import Styled from '../../style';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day2';
import { ThirdGrade3Day2 } from '../../utils/handleTitle';
import SingleQuiz from '../../ThirdGrade02-exercise/Day5/Single5-3';
import { Data23Quiz as QuizData } from '../../Data/Book3';
import { Data12QuizProps } from '../../Type/Type1';
import ConfirmBtn from '../../utils/ConfirmBtn';

const ThirdGrade23Exercise = () => {
  return (
    <DayLayout
      title={ThirdGrade3Day2.title}
      subTitle={ThirdGrade3Day2.subTitle}
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
      <ConfirmBtn type={true} day={2} />
    </DayLayout>
  );
};

export default ThirdGrade23Exercise;
