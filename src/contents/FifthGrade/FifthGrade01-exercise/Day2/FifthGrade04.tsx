import React from 'react';
import Styled from '../../style';

const FifthGrade04: React.FC = () => {
  return (
    <Styled.OneToNine className="sectionSize">
      <div className="quizAll">
        <div className="quiz">
          {/*  예제 문제  */}
          <div className="quizCard">
            <p>( )가 있는 식은 ( )안을 먼저 계산합니다.</p>
            <div className="absolSetting">
              <div className="twoQuiz">
                <div className="lineStyleCss">
                  <div className="flexrow">
                    <div className="margin8px">17 - 5 + 6 = </div>
                    <div className="borderRedSq">18</div>
                  </div>
                  <div className="borderRedSqAb1">12</div>
                  <div className="borderRedSqAb2">18</div>
                  <div className="d-line"></div>
                  <div className="d-line1"></div>
                </div>
                <div className="lineStyleCss">
                  <div className="flexrow">
                    <div className="margin8px">17 - (5 + 6) = </div>
                    <div className="borderRedSq">6</div>
                  </div>
                  <div className="borderRedSqAb3">11</div>
                  <div className="borderRedSqAb4">6</div>
                  <div className="d-line2"></div>
                  <div className="d-line3"></div>
                </div>
                <br />
                <br />
                <br />
              </div>
            </div>
            <p className="explain">
              두 식을 비교해보면 ( )가 있을 때와 없을 때 계산 순서가 달라서 계산
              결과가 다릅니다.
            </p>
          </div>
          {/* 예제문제 끝 */}
          <div className="quiz1">
            <div className="quizCardNone">
              <p className="quizNumber">①</p>
              <div className="lineStyleCss">
                <div className="flexrow">
                  <div>23 - (16 - 3) = </div>
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
                  <div>14 + (32 - 7) = </div>
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
                  <div>103 - (35 + 26) = </div>
                  <input type="text" className="borderRedInput1" />
                </div>
                <input type="text" className="borderRedInput2" />
                <input type="text" className="borderRedInput3" />
                <div className="d-line4"></div>
                <div className="d-line5"></div>
              </div>
            </div>
            <div className="quizCardNone">
              <p className="quizNumber">④</p>
              <div className="lineStyleCss">
                <div className="flexrow">
                  <div>89 - (54 - 38) = </div>
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
                  <div>127 - (65 + 36) = </div>
                  <input type="text" className="borderRedInput1" />
                </div>
                <input type="text" className="borderRedInput2" />
                <input type="text" className="borderRedInput3" />
                <div className="d-line4"></div>
                <div className="d-line5"></div>
              </div>
            </div>
            <div className="quizCardNone">
              <p className="quizNumber">⑥</p>
              <div className="lineStyleCss">
                <div className="flexrow">
                  <div>71 + (15 + 27) = </div>
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

export default FifthGrade04;
