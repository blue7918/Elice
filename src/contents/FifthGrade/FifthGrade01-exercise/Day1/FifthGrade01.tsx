import React from 'react';
import Styled from '../../style';

const FifthGrade01: React.FC = () => {
  return (
    <Styled.OneToNine className="sectionSize">
      <div className="quizAll">
        <div className="quiz1">
          <div className="quizCard1">
            <p className="quizNumberTop">①</p>
            <div className="margin5px">
              <div>
                25 + 43 - 19 =
                <input className="inputSize1" type="text" /> - 19
                <div className="textRight">
                  = <input className="inputSize1" type="text" />
                </div>
              </div>
            </div>
          </div>
          <div className="quizCard2">
            <p className="quizNumberTop">②</p>
            <div className="margin5px">
              <div>
                31 - 16 + 23 = <input className="inputSize1" type="text" /> + 23
                <div className="textRight111">
                  = <input className="inputSize1" type="text" />
                </div>
              </div>
            </div>
          </div>
          <div className="quizCard3">
            <p className="quizNumberTop">③</p>
            <div className="margin5px">
              <div>
                19 - 13 + 7 = <input className="inputSize1" type="text" /> + 7
                <div className="textRight">
                  = <input className="inputSize1" type="text" />
                </div>
              </div>
            </div>
          </div>
          <div className="quizCard1">
            <p className="quizNumberTop">④</p>
            <div className="margin5px">
              <div>
                16 + 23 - 9 = <input className="inputSize1" type="text" /> - 9
                <div className="textRight1112">
                  = <input className="inputSize1" type="text" />
                </div>
              </div>
            </div>
          </div>
          <div className="quizCard2">
            <p className="quizNumberTop">⑤</p>
            <div className="absolSetting">
              <div className="elementAbsol1">35 - 27 + 9 - 14</div>
              <div className="elementAbsol2">
                <input className="inputSize1" type="text" /> + 9 - 14 ={' '}
                <input className="inputSize1" type="text" /> - 14
                <div className="elementAbsol3">
                  = <input className="inputSize1" type="text" />
                </div>
              </div>
            </div>
          </div>
          <div className="quizCard3">
            <p className="quizNumberTop">⑥</p>
            <div className="absolSetting">
              <div className="elementAbsol1">28 + 15 - 17 - 20</div>
              <div className="elementAbsol2">
                <input className="inputSize1" type="text" /> - 17 - 20 ={' '}
                <input className="inputSize1" type="text" /> - 20
                <div className="elementAbsol3">
                  = <input className="inputSize1" type="text" />
                </div>
              </div>
            </div>
          </div>
          <div className="quizCard1">
            <p className="quizNumberTop">⑦</p>
            <div className="absolSetting">
              <div className="elementAbsol1">15 + 4 - 16 + 11</div>
              <div className="elementAbsol6">
                <input className="inputSize1" type="text" /> - 16 + 11 ={' '}
                <input className="inputSize1" type="text" /> + 11
                <div className="elementAbsol4">
                  = <input className="inputSize1" type="text" />
                </div>
              </div>
            </div>
          </div>
          <div className="quizCard2">
            <p className="quizNumberTop">⑧</p>
            <div className="absolSetting">
              <div className="elementAbsol1">35 + 8 - 26 + 9</div>
              <div className="elementAbsol2">
                <input className="inputSize1" type="text" /> - 26 + 9 ={' '}
                <input className="inputSize1" type="text" /> + 9
                <div className="elementAbsol5">
                  = <input className="inputSize1" type="text" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Styled.OneToNine>
  );
};

export default FifthGrade01;
