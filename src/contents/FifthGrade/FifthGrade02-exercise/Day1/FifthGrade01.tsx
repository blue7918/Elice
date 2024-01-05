import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import type { AnswersType } from '../../Type/Type1';
import { sendScore } from '@elice/extcontent-apis';
import { postKeyValue } from '@elice/extcontent-apis';
import { getKeyValue } from '@elice/extcontent-apis';
import correctimg from 'src/contents/FifthGrade/fifthImage/correct.png';
import incorrectimg from 'src/contents/FifthGrade/fifthImage/incorrect.png';

const FifthGrade01: React.FC = () => {
  const [type, setType] = useState(true);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': ['', '', '', ''],
    '2': ['', '', '', ''],
    '3': ['', '', '', '', '', ''],
    '4': ['', '', '', '', '', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['1', '2', '4', '8'],
    '2': ['1', '3', '5', '15'],
    '3': ['1', '2', '3', '4', '6', '12'],
    '4': ['1', '2', '3', '6', '9', '18'],
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
        const savedAnswers = await getKeyValue({ key: 'fifthGrade16Answers' });
        if (savedAnswers) {
          setAnswers(savedAnswers);
        }
      } catch (error) {
        console.error('Error loading saved answers:', error);
      }
    };

    loadChanges();
  }, []);
  useEffect(() => {
    // answers 상태가 변경될 때마다 실행
    const saveChanges = async () => {
      await postKeyValue({
        key: 'fifthGrade16Answers',
        value: answers,
      });
    };

    saveChanges();
  }, [answers]);
  useEffect(() => {
    setShowResults(false);
  }, [answers]);
  return (
    <Styled.OneToNine className="sectionSize">
      <div className="quizAll">
        <div className="quiz211">
          <div className="conclusion">
            <p>
              <span>
                어떤 수를 나누어떨어지게 하는 수를 그 수의 약수라고 합니다.
              </span>
            </p>
            <p>6을 1에서 6까지 모든 수로 나누어 봅니다.</p>
          </div>
          <div className="division-examples">
            <div className="example">6 ÷ 1 = 6</div>
            <div className="example">6 ÷ 2 = 3</div>
            <div className="example">6 ÷ 3 = 2</div>
            <div className="example">6 ÷ 4 = 1 ... 2</div>
            <div className="example">6 ÷ 5 = 1 ... 1</div>
            <div className="example">6 ÷ 6 = 1</div>
          </div>
          <div className="conclusion">
            <p>6은 1, 2, 3, 6으로 나누어 나누어떨어집니다.</p>
            <p>1, 2, 3, 6은 약수입니다.</p>
          </div>
        </div>
        <div className="quiz2111 afwea">
          <div className="quizCard211 flexCol">
            <div className=" flexRow fif221221">
              <p className="quizNumber1226 quizNumbToi13">
                ①
                {showResults && (
                  <div>
                    {isCorrect('1') ? (
                      <div>
                        <img
                          className="answerImg22"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg22"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}
              </p>
              <div className="marginleft24299 textleft1231">
                8 ÷{' '}
                <input
                  value={answers['1'][0]}
                  onChange={e => handleChange('1', 0, e.target.value)}
                  className="averageInput"
                  type="text"
                />{' '}
                = 8
              </div>
              <div className="marginleft24299 textleft1231">
                8 ÷{' '}
                <input
                  value={answers['1'][1]}
                  onChange={e => handleChange('1', 1, e.target.value)}
                  className="averageInput"
                  type="text"
                />{' '}
                = 4
              </div>
            </div>
            <div className="flexRow fif221221">
              <div className="marginleft24299 textleft1231">
                8 ÷{' '}
                <input
                  value={answers['1'][2]}
                  onChange={e => handleChange('1', 2, e.target.value)}
                  className="averageInput"
                  type="text"
                />{' '}
                = 2
              </div>
              <div className="marginleft24299 textleft1231">
                8 ÷{' '}
                <input
                  value={answers['1'][3]}
                  onChange={e => handleChange('1', 3, e.target.value)}
                  className="averageInput"
                  type="text"
                />{' '}
                = 1
              </div>
            </div>
          </div>
          <div className="quizCard211 flexCol">
            <div className=" flexRow fif221221">
              <p className="quizNumber1226 quizNumbToi13">
                ②
                {showResults && (
                  <div>
                    {isCorrect('2') ? (
                      <div>
                        <img
                          className="answerImg22"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg22"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}
              </p>
              <div className="marginleft24299 textleft1231">
                15 ÷{' '}
                <input
                  value={answers['2'][0]}
                  onChange={e => handleChange('2', 0, e.target.value)}
                  className="averageInput"
                  type="text"
                />{' '}
                = 15
              </div>
              <div className="marginleft24299 textleft1231">
                15 ÷{' '}
                <input
                  value={answers['2'][1]}
                  onChange={e => handleChange('2', 1, e.target.value)}
                  className="averageInput"
                  type="text"
                />{' '}
                = 5
              </div>
            </div>
            <div className="  flexRow fif221221">
              <div className="marginleft24299 textleft1231">
                15 ÷{' '}
                <input
                  value={answers['2'][2]}
                  onChange={e => handleChange('2', 2, e.target.value)}
                  className="averageInput"
                  type="text"
                />{' '}
                = 3
              </div>
              <div className="marginleft24299 textleft1231">
                15 ÷{' '}
                <input
                  value={answers['2'][3]}
                  onChange={e => handleChange('2', 3, e.target.value)}
                  className="averageInput"
                  type="text"
                />{' '}
                = 1
              </div>
            </div>
          </div>
          <div className="quizCard211 flexCol">
            <div className=" flexRow fif221221">
              <p className="quizNumber1226">
                ③
                {showResults && (
                  <div>
                    {isCorrect('3') ? (
                      <div>
                        <img
                          className="answerImg22"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg22"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}
              </p>
              <div className="marginleft24299 textleft1231">
                12 ÷{' '}
                <input
                  value={answers['3'][0]}
                  onChange={e => handleChange('3', 0, e.target.value)}
                  className="averageInput"
                  type="text"
                />{' '}
                = 12
              </div>
              <div className="marginleft24299 textleft1231">
                12 ÷{' '}
                <input
                  value={answers['3'][0]}
                  onChange={e => handleChange('3', 0, e.target.value)}
                  className="averageInput"
                  type="text"
                />{' '}
                = 6
              </div>
            </div>
            <div className=" flexRow fif221221">
              <div className="marginleft24299 textleft1231">
                12 ÷{' '}
                <input
                  value={answers['3'][1]}
                  onChange={e => handleChange('3', 1, e.target.value)}
                  className="averageInput"
                  type="text"
                />{' '}
                = 4
              </div>
              <div className="marginleft24299 textleft1231">
                12 ÷{' '}
                <input
                  value={answers['3'][2]}
                  onChange={e => handleChange('3', 2, e.target.value)}
                  className="averageInput"
                  type="text"
                />{' '}
                = 3
              </div>
            </div>
            <div className="  flexRow fif221221">
              <div className="marginleft24299 textleft1231">
                12 ÷{' '}
                <input
                  value={answers['3'][3]}
                  onChange={e => handleChange('3', 3, e.target.value)}
                  className="averageInput"
                  type="text"
                />{' '}
                = 2
              </div>
              <div className="marginleft24299 textleft1231">
                12 ÷{' '}
                <input
                  value={answers['3'][4]}
                  onChange={e => handleChange('3', 4, e.target.value)}
                  className="averageInput"
                  type="text"
                />{' '}
                = 1
              </div>
            </div>
          </div>
          <div className="quizCard211 flexCol">
            <div className=" flexRow fif221221">
              <p className="quizNumber1226">
                ④
                {showResults && (
                  <div>
                    {isCorrect('4') ? (
                      <div>
                        <img
                          className="answerImg22"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg22"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}
              </p>
              <div className="marginleft24299 textleft1231">
                18 ÷{' '}
                <input
                  value={answers['4'][0]}
                  onChange={e => handleChange('4', 0, e.target.value)}
                  className="averageInput"
                  type="text"
                />{' '}
                = 18
              </div>
              <div className="marginleft24299 textleft1231">
                18 ÷{' '}
                <input
                  value={answers['4'][1]}
                  onChange={e => handleChange('4', 1, e.target.value)}
                  className="averageInput"
                  type="text"
                />{' '}
                = 9
              </div>
            </div>
            <div className="flexRow fif221221">
              <div className="marginleft24299 textleft1231">
                18 ÷{' '}
                <input
                  value={answers['4'][2]}
                  onChange={e => handleChange('4', 2, e.target.value)}
                  className="averageInput"
                  type="text"
                />{' '}
                = 6
              </div>
              <div className="marginleft24299 textleft1231">
                18 ÷{' '}
                <input
                  value={answers['4'][3]}
                  onChange={e => handleChange('4', 3, e.target.value)}
                  className="averageInput"
                  type="text"
                />{' '}
                = 3
              </div>
            </div>
            <div className="flexRow fif221221">
              <div className="marginleft24299 textleft1231">
                18 ÷{' '}
                <input
                  value={answers['4'][4]}
                  onChange={e => handleChange('4', 4, e.target.value)}
                  className="averageInput"
                  type="text"
                />{' '}
                = 2
              </div>
              <div className="marginleft24299 textleft1231">
                18 ÷{' '}
                <input
                  value={answers['4'][5]}
                  onChange={e => handleChange('4', 5, e.target.value)}
                  className="averageInput"
                  type="text"
                />{' '}
                = 1
              </div>
            </div>
          </div>
        </div>
      </div>
      <ConfirmBtn type={type} day={1} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade01;
