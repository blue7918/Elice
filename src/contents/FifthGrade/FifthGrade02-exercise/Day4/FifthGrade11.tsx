import React from 'react';
import Styled from '../../style';

const FifthGrade11: React.FC = () => {
  return (
    <Styled.OneToNine className="sectionSize">
      <div className="quizAll">
        <div className="quiz1">
          <div className="quizCard1 flexCol">
            <p className="quizNumber">①</p>
            <div className="marginTop18">
              36 + 13 + 20 = <input className="inputSize1" type="text" />
            </div>
            <div className="marginBottom18">
              36 + (13 + 20) = <input className="inputSize1" type="text" />
            </div>
          </div>
          <div className="quizCard1 flexCol">
            <p className="quizNumber">②</p>
            <div className="marginTop18">
              49 - 16 + 27 = <input className="inputSize1" type="text" />
            </div>
            <div className="marginBottom18">
              49 - (16 + 27) = <input className="inputSize1" type="text" />
            </div>
          </div>
          <div className="quizCard1 flexCol">
            <p className="quizNumber">③</p>
            <div className="marginTop18">
              57 - 15 + 27 = <input className="inputSize1" type="text" />
            </div>
            <div className="marginBottom18">
              57 - (15 + 27) = <input className="inputSize1" type="text" />
            </div>
          </div>
          <div className="quizCard1 flexCol">
            <p className="quizNumber">④</p>
            <div className="marginTop18">
              42 - 8 + 29 = <input className="inputSize1" type="text" />
            </div>
            <div className="marginBottom18">
              42 - (8 + 29) = <input className="inputSize1" type="text" />
            </div>
          </div>

          <div className="quizCard1 flexCol">
            <p className="quizNumber">⑤</p>
            <div className="marginTop18">
              5 × (3 × 12) = <input className="inputSize1" type="text" />
            </div>
            <div className="marginBottom18">
              5 × (3 × 12) = <input className="inputSize1" type="text" />
            </div>
          </div>
          <div className="quizCard1 flexCol">
            <p className="quizNumber">⑥</p>
            <div className="marginTop18">
              96 ÷ 4 ÷ 2 = <input className="inputSize1" type="text" />
            </div>
            <div className="marginBottom18">
              96 ÷ (4 ÷ 2) = <input className="inputSize1" type="text" />
            </div>
          </div>
          <div className="quizCard1 flexCol">
            <p className="quizNumber">⑦</p>
            <div className="marginTop18">
              84 ÷ (7 × 4) = <input className="inputSize1" type="text" />
            </div>
            <div className="marginBottom18">
              84 ÷ (7 × 4) = <input className="inputSize1" type="text" />
            </div>
          </div>
          <div className="quizCard1 flexCol">
            <p className="quizNumber">⑧</p>
            <div className="marginTop18">
              3 × 24 ÷ 8 = <input className="inputSize1" type="text" />
            </div>
            <div className="marginBottom18">
              3 × (24 ÷ 8) = <input className="inputSize1" type="text" />
            </div>
          </div>
        </div>
      </div>
    </Styled.OneToNine>
  );
};

export default FifthGrade11;
