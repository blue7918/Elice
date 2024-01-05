import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import type { AnswersType } from '../../Type/Type1';
import { sendScore } from '@elice/extcontent-apis';
import { postKeyValue } from '@elice/extcontent-apis';
import { getKeyValue } from '@elice/extcontent-apis';
import correctimg from 'src/contents/FifthGrade/fifthImage/correct.png';
import incorrectimg from 'src/contents/FifthGrade/fifthImage/incorrect.png';
import fifthimg from 'src/contents/FifthGrade/fifthImage/화살표.png';

const FifthGrade09: React.FC = () => {
  const [type, setType] = useState(true);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': [''],
    '2': [''],
    '3': [''],
    '4': [''],
    '5': [''],
    '6': [''],
    '7': [''],
    '8': [''],
    '9': [''],
    '10': [''],
    '11': [''],
  });
  const correctAnswers: AnswersType = {
    '1': ['28'],
    '2': ['40'],
    '3': ['42'],
    '4': ['66'],
    '5': ['64'],
    '6': ['84'],
    '7': ['80'],
    '8': ['90'],
    '9': ['95'],
    '10': ['72'],
    '11': ['105'],
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
        const savedAnswers = await getKeyValue({ key: 'fifthGrade24Answers' });
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
        key: 'fifthGrade24Answers',
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
      {' '}
      <div className="quizAll">
        <div className="quiz1 lakwerfj">
          <div className="quizCard11">
            <div className="flexcol">
              <p className="quizNumber1231">
                24보다 큰 6의 배수 중 가장 작은 수
              </p>
              <div className="flexRow">
                <img
                  className="allowRight marginRight231 quizMargin1422"
                  src={fifthimg}
                  alt=""
                />
                <div className="borderColor233 Red233">30</div>
                <div>
                  <div className="Red233">6×4=24(×) </div>
                  <div className="Red233">6×5=30(○) </div>
                </div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="flexcol">
              <p className="quizNumber1231">
                ① 30보다 작은 4의 배수 중 가장 큰 수
                {showResults && (
                  <div>
                    {isCorrect('1') ? (
                      <div>
                        <img
                          className="answerImg45"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg45"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </p>
              <div className="flexRow">
                <img
                  className="allowRight marginRight231"
                  src={fifthimg}
                  alt=""
                />
                <input
                  value={answers['1'][0]}
                  onChange={e => handleChange('1', 0, e.target.value)}
                  className="borderColor233"
                />
                <div></div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexcol">
              <p className="quizNumber1231">
                ② 37보다 큰 5의 배수 중 가장 작은 수
                {showResults && (
                  <div>
                    {isCorrect('2') ? (
                      <div>
                        <img
                          className="answerImg45"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg45"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </p>
              <div className="flexRow">
                <img
                  className="allowRight marginRight231"
                  src={fifthimg}
                  alt=""
                />
                <input
                  value={answers['2'][0]}
                  onChange={e => handleChange('2', 0, e.target.value)}
                  className="borderColor233"
                />
                <div></div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexcol">
              <p className="quizNumber1231">
                ③ 48보다 작은 6의 배수 중 가장 큰 수
                {showResults && (
                  <div>
                    {isCorrect('3') ? (
                      <div>
                        <img
                          className="answerImg45"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg45"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </p>
              <div className="flexRow">
                <img
                  className="allowRight marginRight231"
                  src={fifthimg}
                  alt=""
                />
                <input
                  value={answers['3'][0]}
                  onChange={e => handleChange('3', 0, e.target.value)}
                  className="borderColor233"
                />
                <div></div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexcol">
              <p className="quizNumber1231">
                ④ 55보다 큰 11의 배수 중 가장 작은 수
                {showResults && (
                  <div>
                    {isCorrect('4') ? (
                      <div>
                        <img
                          className="answerImg45"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg45"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </p>
              <div className="flexRow">
                <img
                  className="allowRight marginRight231"
                  src={fifthimg}
                  alt=""
                />
                <input
                  value={answers['4'][0]}
                  onChange={e => handleChange('4', 0, e.target.value)}
                  className="borderColor233"
                />
                <div></div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexcol">
              <p className="quizNumber1231">
                ⑤ 70보다 작은 16의 배수 중 가장 큰 수
                {showResults && (
                  <div>
                    {isCorrect('5') ? (
                      <div>
                        <img
                          className="answerImg45"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg45"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </p>
              <div className="flexRow">
                <img
                  className="allowRight marginRight231"
                  src={fifthimg}
                  alt=""
                />
                <input
                  value={answers['5'][0]}
                  onChange={e => handleChange('5', 0, e.target.value)}
                  className="borderColor233"
                />
                <div></div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexcol">
              <p className="quizNumber1231">
                ⑥ 70보다 큰 14의 배수 중 가장 작은 수
                {showResults && (
                  <div>
                    {isCorrect('6') ? (
                      <div>
                        <img
                          className="answerImg45"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg45"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </p>
              <div className="flexRow">
                <img
                  className="allowRight marginRight231"
                  src={fifthimg}
                  alt=""
                />
                <input
                  value={answers['6'][0]}
                  onChange={e => handleChange('6', 0, e.target.value)}
                  className="borderColor233"
                />
                <div></div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexcol">
              <p className="quizNumber1231">
                ⑦ 90보다 작은 20의 배수 중 가장 큰 수
                {showResults && (
                  <div>
                    {isCorrect('7') ? (
                      <div>
                        <img
                          className="answerImg45"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg45"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </p>
              <div className="flexRow">
                <img
                  className="allowRight marginRight231"
                  src={fifthimg}
                  alt=""
                />
                <input
                  value={answers['7'][0]}
                  onChange={e => handleChange('7', 0, e.target.value)}
                  className="borderColor233"
                />
                <div></div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexcol">
              <p className="quizNumber1231">
                ⑧ 80보다 큰 30의 배수 중 가장 작은 수
                {showResults && (
                  <div>
                    {isCorrect('8') ? (
                      <div>
                        <img
                          className="answerImg45"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg45"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </p>
              <div className="flexRow">
                <img
                  className="allowRight marginRight231"
                  src={fifthimg}
                  alt=""
                />
                <input
                  value={answers['8'][0]}
                  onChange={e => handleChange('8', 0, e.target.value)}
                  className="borderColor233"
                />
                <div></div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexcol">
              <p className="quizNumber1231">
                ⑨ 100보다 작은 19의 배수 중 가장 큰 수
                {showResults && (
                  <div>
                    {isCorrect('9') ? (
                      <div>
                        <img
                          className="answerImg45"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg45"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </p>
              <div className="flexRow">
                <img
                  className="allowRight marginRight231"
                  src={fifthimg}
                  alt=""
                />
                <input
                  value={answers['9'][0]}
                  onChange={e => handleChange('9', 0, e.target.value)}
                  className="borderColor233"
                />
                <div></div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexcol">
              <p className="quizNumber1231">
                ⑩ 70보다 큰 36의 배수 중 가장 작은 수
                {showResults && (
                  <div>
                    {isCorrect('10') ? (
                      <div>
                        <img
                          className="answerImg45"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg45"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </p>
              <div className="flexRow">
                <img
                  className="allowRight marginRight231"
                  src={fifthimg}
                  alt=""
                />
                <input
                  value={answers['10'][0]}
                  onChange={e => handleChange('10', 0, e.target.value)}
                  className="borderColor233"
                />
                <div></div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexcol">
              <p className="quizNumber1231">
                ⑪ 140보다 작은 35의 배수 중 가장 큰 수
                {showResults && (
                  <div>
                    {isCorrect('11') ? (
                      <div>
                        <img
                          className="answerImg45"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg45"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </p>
              <div className="flexRow">
                <img
                  className="allowRight marginRight231"
                  src={fifthimg}
                  alt=""
                />
                <input
                  value={answers['11'][0]}
                  onChange={e => handleChange('11', 0, e.target.value)}
                  className="borderColor233"
                />
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ConfirmBtn type={type} day={3} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade09;
