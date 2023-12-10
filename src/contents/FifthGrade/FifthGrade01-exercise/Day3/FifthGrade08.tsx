import React from 'react';
import Styled from '../../style';

const FifthGrade08: React.FC = () => {
  return (
    <Styled.OneToNine className="sectionSize">
      <div className="quizAll">
        <div className="quiz2">
          <div className="quizCard4">
            <p className="quizNumber">①</p>
            <div>
              7 × 3 × 4 = <input className="inputSize1" type="text" /> × 4
              <br />
              <div className="textRight">
                = <input className="inputSize1" type="text" />
              </div>
            </div>
          </div>
          <div className="quizCard4">
            <div>
              7 × (3 × 4) = 7 × <input className="inputSize1" type="text" />
              <br />
              <div className="textRight">
                = <input className="inputSize1" type="text" />
              </div>
            </div>
          </div>
          <div className="quizCard4">
            <p className="quizNumber">②</p>
            <div>
              64 ÷ 8 ÷ 2 = <input className="inputSize1" type="text" /> ÷ 2
              <br />
              <div className="textRight">
                = <input className="inputSize1" type="text" />
              </div>
            </div>
          </div>
          <div className="quizCard4">
            <div>
              64 ÷ (8 ÷ 2) = 64 ÷ <input className="inputSize1" type="text" />
              <br />
              <div className="textRight">
                = <input className="inputSize1" type="text" />
              </div>
            </div>
          </div>

          <div className="quizCard4">
            <p className="quizNumber">③</p>
            <div>
              90 ÷ 5 × 2 = <input className="inputSize1" type="text" /> × 2
              <br />
              <div className="textRight">
                = <input className="inputSize1" type="text" />
              </div>
            </div>
          </div>
          <div className="quizCard4">
            <div>
              90 ÷ (5 × 2) = 90 ÷ <input className="inputSize1" type="text" />
              <br />
              <div className="textRight">
                = <input className="inputSize1" type="text" />
              </div>
            </div>
          </div>
          <div className="quizCard4">
            <p className="quizNumber">④</p>
            <div>
              5 × 12 ÷ 6 = <input className="inputSize1" type="text" /> ÷ 6
              <br />
              <div className="textRight">
                = <input className="inputSize1" type="text" />
              </div>
            </div>
          </div>
          <div className="quizCard4">
            <div>
              5 × (12 ÷ 6) = 5 × <input className="inputSize1" type="text" />
              <br />
              <div className="textRight">
                = <input className="inputSize1" type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Styled.OneToNine>
  );
};

export default FifthGrade08;
