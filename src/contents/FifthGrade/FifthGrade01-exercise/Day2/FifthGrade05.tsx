import React from 'react';
import Styled from '../../style';

const FifthGrade05: React.FC = () => {
  return (
    <Styled.OneToNine className="sectionSize">
      <div className="quizAll">
        <div className="">
          <div className="quizCard4">
            <p className="quizNumber">①</p>
            <div className="quizMargin">
              17 + 33 + 47 = <input className="inputSize1" type="text" /> + 47
              <div className="textRight">
                = <input className="inputSize1" type="text" />
              </div>
              <div className="d-line lineAbSet3"></div>
            </div>
            <div>
              17 + (33 + 47) = 17 + <input className="inputSize1" type="text" />
              <div className="textRight2">
                = <input className="inputSize1" type="text" />
              </div>
              <div className="d-line lineAbSet2"></div>
            </div>
          </div>

          <div className="quizCard5">
            <p className="quizNumber">②</p>
            <div className="quizMargin">
              68 - 29 - 16 = <input className="inputSize1" type="text" /> - 16
              <div className="textRight">
                = <input className="inputSize1" type="text" />
              </div>
              <div className="d-line lineAbSet1"></div>
            </div>
            <div>
              68 - (29 - 16) = 68 - <input className="inputSize1" type="text" />
              <div className="textRight2">
                = <input className="inputSize1" type="text" />
              </div>
              <div className="d-line lineAbSet2"></div>
            </div>
          </div>

          <div className="quizCard6">
            <p className="quizNumber">③</p>
            <div className="quizMargin">
              75 - 35 + 26 = <input className="inputSize1" type="text" /> + 26
              <div className="textRight">
                = <input className="inputSize1" type="text" />
              </div>
              <div className="d-line lineAbSet3"></div>
            </div>
            <div>
              75 - (35 + 26) = 75 - <input className="inputSize1" type="text" />
              <div className="textRight2">
                = <input className="inputSize1" type="text" />
              </div>
              <div className="d-line lineAbSet2"></div>
            </div>
          </div>
          <div className="quizCard4">
            <p className="quizNumber">④</p>
            <div className="quizMargin">
              13 + 27 - 19 = <input className="inputSize1" type="text" /> - 19
              <div className="textRight">
                = <input className="inputSize1" type="text" />
              </div>
              <div className="d-line lineAbSet1"></div>
            </div>
            <div>
              13 + (27 - 19) = 13 + <input className="inputSize1" type="text" />
              <div className="textRight2">
                = <input className="inputSize1" type="text" />
              </div>
              <div className="d-line lineAbSet2"></div>
            </div>
          </div>
        </div>
      </div>
    </Styled.OneToNine>
  );
};

export default FifthGrade05;
