import React from 'react';
import Styled from '../../style';

const FifthGrade07: React.FC = () => {
  return (
    <Styled.OneToNine className="sectionSize">
      <div className="quizAll">
        <div className="quiz">
          {/*  예제 문제  */}
          <div className="quizCard121">
            <div className="absolSetting121">
              <div className="twoQuiz">
                <div className="quiz121Ex">
                  <p className="explain1">
                    ( )가 있는 식은 ( )안을 먼저 계산합니다.
                  </p>
                  <div className="flexrow">
                    24 ÷ 4 × 2 = <div className="marginLeft9">12</div>
                  </div>
                  <div className="marginLeft7">6</div>
                  <div className="marginLeft8">12</div>
                  <img
                    className="img1211"
                    src={`${process.env.PUBLIC_URL}/1-2-1_1.png`}
                    alt=""
                  />
                </div>
                <div className="quiz121Ex">
                  <div className="flexrow">
                    24 ÷ (4 × 2) = <div className="marginLeft9">3</div>
                  </div>
                  <div className="marginLeft10">8</div>
                  <div className="marginLeft11">3</div>
                  <img
                    className="img1212"
                    src={`${process.env.PUBLIC_URL}/1-2-1_2.png`}
                    alt=""
                  />
                </div>
              </div>
              <p className="explain2">
                두 식을 비교해보면 ( )가 있을 때와 없을 때 계산 순서가 달라서
                계산 결과가 다릅니다.
              </p>
            </div>
          </div>
          {/* 예제문제 끝 */}
          <div className="quiz1">
            <div className="quizCardNone">
              <p className="quizNumber">①</p>
              <div className="lineStyleCss">
                <div className="flexrow">
                  <div>45 ÷ (15 ÷ 3) = </div>
                  <input type="text" className="borderRedInput1" />
                </div>
                <input type="text" className="borderRedInput2" />
                <input type="text" className="borderRedInput3" />
                <div className="d-line4"></div>
                <div className="d-line5"></div>
              </div>
            </div>
            <div className="quizCardNone">
              <p className="quizNumber">②</p>
              <div className="lineStyleCss">
                <div className="flexrow">
                  <div>14 × (12 ÷ 6) = </div>
                  <input type="text" className="borderRedInput1" />
                </div>
                <input type="text" className="borderRedInput2" />
                <input type="text" className="borderRedInput3" />
                <div className="d-line4"></div>
                <div className="d-line5"></div>
              </div>
            </div>
            <div className="quizCardNone">
              <p className="quizNumber">③</p>
              <div className="lineStyleCss">
                <div className="flexrow">
                  <div>100 ÷ (5 × 4) = </div>
                  <input type="text" className="borderRedInput1" />
                </div>
                <input type="text" className="borderRedInput2" />
                <input type="text" className="borderRedInput3" />
                <div className="d-line4 marginLeft3"></div>
                <div className="d-line5 marginLeft2"></div>
              </div>
            </div>
            <div className="quizCardNone">
              <p className="quizNumber">④</p>
              <div className="lineStyleCss">
                <div className="flexrow">
                  <div>80 ÷ (24 ÷ 3) = </div>
                  <input type="text" className="borderRedInput1" />
                </div>
                <input type="text" className="borderRedInput2" />
                <input type="text" className="borderRedInput3" />
                <div className="d-line4"></div>
                <div className="d-line5"></div>
              </div>
            </div>
            <div className="quizCardNone">
              <p className="quizNumber">⑤</p>
              <div className="lineStyleCss">
                <div className="flexrow">
                  <div>126 ÷ (3 × 7) = </div>
                  <input type="text" className="borderRedInput1" />
                </div>
                <input type="text" className="borderRedInput2" />
                <input type="text" className="borderRedInput3" />
                <div className="d-line4 marginLeft3"></div>
                <div className="d-line5 marginLeft2"></div>
              </div>
            </div>
            <div className="quizCardNone quizMargin2">
              <p className="quizNumber">⑥</p>
              <div className="lineStyleCss">
                <div className="flexrow">
                  <div>7 × (15 × 4) = </div>
                  <input type="text" className="borderRedInput1" />
                </div>
                <input type="text" className="borderRedInput2" />
                <input type="text" className="borderRedInput3" />
                <div className="d-line4"></div>
                <div className="d-line5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Styled.OneToNine>
  );
};

export default FifthGrade07;
