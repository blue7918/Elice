import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import type { AnswersType } from '../../Type/Type1';
import { sendScore } from '@elice/extcontent-apis';
import { postKeyValue } from '@elice/extcontent-apis';
import { getKeyValue } from '@elice/extcontent-apis';
import correctimg from 'src/contents/FifthGrade/fifthImage/correct.png';
import incorrectimg from 'src/contents/FifthGrade/fifthImage/incorrect.png';

const FifthGrade15: React.FC = () => {
  const [type, setType] = useState(true);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': [''],
    '2': [''],
    '3': [''],
    '4': [''],
  });
  const correctAnswers: AnswersType = {
    '1': ['6'],
    '2': ['18'],
    '3': ['8'],
    '4': ['4'],
  };
  const handleChange = (questionId: string, index: number, value: string) => {
    setAnswers({
      ...answers,
      [questionId]: answers[questionId].map((item, i) =>
        i === index ? value : item
      ),
    });
  };

  const [showResults, setShowResults] = useState(false);

  const isCorrect = (questionId: string) => {
    return correctAnswers[questionId].every(
      (answer, index) => answer === answers[questionId][index]
    );
  };
  const calculateScore = () => {
    const totalQuestions = Object.keys(correctAnswers).length; // 전체 문제 수
    const scorePerQuestion = 100 / totalQuestions; // 각 문제당 점수

    let correctCount = 0;
    Object.keys(correctAnswers).forEach(questionId => {
      if (isCorrect(questionId)) {
        correctCount++;
      }
    });

    return correctCount * scorePerQuestion; // 총점 계산
  };
  const handleGrade = () => {
    setShowResults(true);
    setType(false);
    const totalScore = calculateScore();
    sendScore({ score: totalScore });
  };
  useEffect(() => {
    const loadChanges = async () => {
      try {
        const savedAnswers = await getKeyValue({ key: 'fifthGrade15Answers' });
        if (savedAnswers) {
          setAnswers(savedAnswers);
        }
      } catch (error) {
        console.error('Error loading saved answers:', error);
      }
    };

    loadChanges().catch(error => console.error('Failed to save changes:', error));
  }, []);
  useEffect(() => {
    // answers 상태가 변경될 때마다 실행
    const saveChanges = async () => {
      await postKeyValue({
        key: 'fifthGrade15Answers',
        value: answers,
      });
    };

    saveChanges().catch(error => console.error('Failed to save changes:', error));
  }, [answers]);
  useEffect(() => {
    setShowResults(false);
  }, [answers]);
  return (
    <Styled.OneToNine className="sectionSize">
      <div className="quiz fontSize20 lakwerfj3214">
        <div className=" quizNumber123887 awefawufiut">
          <div className="afwe3513 flexRow noWrap1">
            {showResults && (
              <div>
                {isCorrect('1') ? (
                  <div>
                    <img
                      className="answerImg53"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg53"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
            ① 90명의 학생이 한 대에 30명씩 버스에 나누어 타려고 합니다. 버스 한
            대에 음료수를 2상자 씩
          </div>
          <div>주려면 준비해야 할 음료수는 몇 상자일까요?</div>
          <div className="flexRow">
            정답 : &nbsp;&nbsp;
            <input
              value={answers['1'][0]}
              onChange={e => handleChange('1', 0, e.target.value)}
              type="text"
              className="averageInput marginRight239"
            />
            &nbsp;&nbsp;상자
          </div>
        </div>
        <div className=" quizNumber123887 awefawufiut">
          <div className="afwe3513 flexRow noWrap1">
            {showResults && (
              <div>
                {isCorrect('2') ? (
                  <div>
                    <img
                      className="answerImg53"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg53"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
            ② 연필 6타를 4명에게 똑같이 나누어 주려고 합니다. 한 사람이 가지게
            되는 연필은 몇 자루일 까
          </div>
          <div>요?</div>
          <div className="flexRow">
            정답 : &nbsp;&nbsp;
            <input
              value={answers['2'][0]}
              onChange={e => handleChange('2', 0, e.target.value)}
              type="text"
              className="averageInput marginRight239"
            />
            &nbsp;&nbsp;자루
          </div>
        </div>
        <div className=" quizNumber123887 awefawufiut">
          <div className="afwe3513 flexRow noWrap1">
            {showResults && (
              <div>
                {isCorrect('3') ? (
                  <div>
                    <img
                      className="answerImg53"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg53"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
            ③ 배 농장에서 배를 160개 수확해서 가로 5줄, 세로 4줄로 놓인 상자에
            똑같이 나누어 담으려 고
          </div>
          <div>합니다. 한 상자에 들어갈 배는 몇 개일까요?</div>
          <div className="flexRow">
            정답 : &nbsp;&nbsp;
            <input
              value={answers['3'][0]}
              onChange={e => handleChange('3', 0, e.target.value)}
              type="text"
              className="averageInput marginRight239"
            />
            &nbsp;&nbsp;개
          </div>
        </div>
        <div className=" quizNumber123887 awefawufiut">
          <div className="afwe3513 flexRow noWrap1">
            {showResults && (
              <div>
                {isCorrect('4') ? (
                  <div>
                    <img
                      className="answerImg53"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg53"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
            ④ 소연이는 생일 파티에 초대한 친구들에게 줄 선물을 9개 준비했습니다.
            초대한 친구들은 8 명
          </div>
          <div>
            이었는데 그 중 3명이 일이 있어 오지 못했습니다. 생일 파티가 끝나고
            남은 선물은 몇 개 일까요?
          </div>
          <div className="flexRow">
            정답 : &nbsp;&nbsp;
            <input
              value={answers['4'][0]}
              onChange={e => handleChange('4', 0, e.target.value)}
              type="text"
              className="averageInput marginRight239"
            />
            &nbsp;&nbsp;개
          </div>
        </div>
      </div>
      <ConfirmBtn type={type} day={5} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade15;
