import React from 'react';
import Styled from '../../style';

const FifthGrade01: React.FC = () => {
  return (
    <Styled.OneToNine className="sectionSize">
      <div className="quizAll">
        <img
          className="quiz211"
          src={`${process.env.PUBLIC_URL}/2-1-1.png`}
          alt=""
        />
        <div className="quiz1">
          <div className="quizCard1 flexCol">
            <p className="quizNumber">①</p>
            <div className="marginTop18 flexRow">
              <div>
                8 ÷ <input className="averageInput" type="text" /> = 8
              </div>
              <div className="marginLeft30">
                8 ÷ <input className="averageInput" type="text" /> = 4
              </div>
            </div>
            <div className="marginBottom18 marginLeft6 flexRow">
              <div>
                8 ÷ <input className="averageInput" type="text" /> = 2
              </div>
              <div className="marginLeft30">
                8 ÷ <input className="averageInput" type="text" /> = 1
              </div>
            </div>
          </div>
          <div className="quizCard1 flexCol">
            <p className="quizNumber">②</p>
            <div className="marginTop18 flexRow">
              <div>
                15 ÷ <input className="averageInput" type="text" /> = 15
              </div>
              <div className="marginLeft30">
                15 ÷ <input className="averageInput" type="text" /> = 5
              </div>
            </div>
            <div className="marginBottom18 marginLeft6 flexRow">
              <div>
                15 ÷ <input className="averageInput" type="text" /> = 3
              </div>
              <div className="marginLeft30">
                15 ÷ <input className="averageInput" type="text" /> = 1
              </div>
            </div>
          </div>
          <div className="quizCard1 flexCol">
            <p className="quizNumber">③</p>
            <div className="marginTop18 flexRow">
              <div>
                12 ÷ <input className="averageInput" type="text" /> = 12
              </div>
              <div className="marginLeft30">
                12 ÷ <input className="averageInput" type="text" /> = 6
              </div>
            </div>
            <div className="marginLeft6 flexRow">
              <div>
                12 ÷ <input className="averageInput" type="text" /> = 4
              </div>
              <div className="marginLeft30">
                12 ÷ <input className="averageInput" type="text" /> = 3
              </div>
            </div>
            <div className="marginBottom18 marginLeft6 flexRow">
              <div>
                12 ÷ <input className="averageInput" type="text" /> = 2
              </div>
              <div className="marginLeft30">
                12 ÷ <input className="averageInput" type="text" /> = 1
              </div>
            </div>
          </div>
          <div className="quizCard1 flexCol">
            <p className="quizNumber">④</p>
            <div className="marginTop18 flexRow">
              <div>
                18 ÷ <input className="averageInput" type="text" /> = 18
              </div>
              <div className="marginLeft30">
                18 ÷ <input className="averageInput" type="text" /> = 9
              </div>
            </div>
            <div className="marginLeft6 flexRow">
              <div>
                18 ÷ <input className="averageInput" type="text" /> = 6
              </div>
              <div className="marginLeft30">
                18 ÷ <input className="averageInput" type="text" /> = 3
              </div>
            </div>
            <div className="marginBottom18 marginLeft6 flexRow">
              <div>
                18 ÷ <input className="averageInput" type="text" /> = 2
              </div>
              <div className="marginLeft30">
                18 ÷ <input className="averageInput" type="text" /> = 1
              </div>
            </div>
          </div>
        </div>
      </div>
    </Styled.OneToNine>
  );
};

export default FifthGrade01;
