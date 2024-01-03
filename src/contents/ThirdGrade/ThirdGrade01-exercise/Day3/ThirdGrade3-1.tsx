import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';

import { Answer31 as answer, Data31Quiz as QuizData } from '../../Data/Book1';
import DayLayout from '../../Layout/Day3';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { handleAnswer } from '../../utils/handleAnswer';
import { ThirdGrade1Day1 } from '../../utils/handleTitle';
import ExampleQuiz from './Example3-1';
import SingleQuiz from './Single3-1';

import type { Data31QuizProps as DataProps } from '../../Type/Type1';

const ThirdGrade11Exercise: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(5), () => new Array(3))
  );
  const key = 'third131.answer';

  useEffect(() => {
    try {
      getKeyValue({ key })
        .then(res => {
          console.log(res);
          if (res !== null) {
            setInputValue(res);
          }
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <DayLayout
      title={ThirdGrade1Day1.title}
      subTitle={ThirdGrade1Day1.subTitle}
    >
      <Styled.PaddingBox2>
        <Styled.ColGapBox gap={3.75}>
          <Styled.RowWrapBox6>
            <ExampleQuiz />
            {QuizData.map((item: DataProps, idx) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                quiz1={item.quiz1}
                quiz2={item.quiz2}
                quiz3={item.quiz3}
                quiz4={item.quiz4}
                quiz5={item.quiz5}
                quiz6={item.quiz6}
                quiz7={item.quiz7}
                quiz8={item.quiz8}
                quiz9={item.quiz9}
                quiz10={item.quiz10}
                idx={idx}
                toggle={toggle}
                setToggle={setToggle}
                inputValue={inputValue}
                setInputValue={setInputValue}
                correct={correct[idx]}
              />
            ))}
          </Styled.RowWrapBox6>
          <div
            onClick={() => {
              handleAnswer({ key, inputValue, answer, setScore, setCorrect });
              setToggle(!toggle);
              setConfirmType(false);
            }}
          >
            <ConfirmBtn type={confirmType} day={3} />
          </div>
        </Styled.ColGapBox>
      </Styled.PaddingBox2>
    </DayLayout>
  );
};

export default ThirdGrade11Exercise;
