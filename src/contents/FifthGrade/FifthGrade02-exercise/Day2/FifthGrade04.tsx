import React from 'react';
import Styled from '../../style';

const FifthGrade04: React.FC = () => {
  return (
    <Styled.OneToNine className="sectionSize">
      <div className="quizAll">
        <div className="quiz">
          <div className="quizCard1 flexCol">
            <p className="quizNumber">예제</p>
            <div className="fifthQuiz212">
              <p>16의 약수 →</p>
              <div>
                <input
                  className="fifthQuiz221Input"
                  type="text"
                  placeholder="1,2,3,8,16"
                />
                (
                <input className="averageInput" type="text" placeholder="X" />)
              </div>
            </div>
          </div>
          <div className="quizCard1 flexCol">
            <p className="quizNumber">①</p>
            <div className="fifthQuiz212">
              <p>17의 약수 →</p>
              <div>
                <input
                  className="fifthQuiz221Input"
                  type="text"
                  placeholder=""
                />
                (
                <input className="averageInput" type="text" placeholder="" />)
              </div>
            </div>
          </div>
          <div className="quizCard1 flexCol">
            <p className="quizNumber">②</p>
            <div className="fifthQuiz212">
              <p>21의 약수 →</p>
              <div>
                <input
                  className="fifthQuiz221Input"
                  type="text"
                  placeholder=""
                />
                (
                <input className="averageInput" type="text" placeholder="" />)
              </div>
            </div>
          </div>
          <div className="quizCard1 flexCol">
            <p className="quizNumber">③</p>
            <div className="fifthQuiz212">
              <p>29의 약수 →</p>
              <div>
                <input
                  className="fifthQuiz221Input"
                  type="text"
                  placeholder=""
                />
                (
                <input className="averageInput" type="text" placeholder="" />)
              </div>
            </div>
          </div>
          <div className="quizCard1 flexCol">
            <p className="quizNumber">④</p>
            <div className="fifthQuiz212">
              <p>33의 약수 →</p>
              <div>
                <input
                  className="fifthQuiz221Input"
                  type="text"
                  placeholder=""
                />
                (
                <input className="averageInput" type="text" placeholder="" />)
              </div>
            </div>
          </div>
          <div className="quizCard1 flexCol">
            <p className="quizNumber">⑤</p>
            <div className="fifthQuiz212">
              <p>49의 약수 →</p>
              <div>
                <input
                  className="fifthQuiz221Input"
                  type="text"
                  placeholder=""
                />
                (
                <input className="averageInput" type="text" placeholder="" />)
              </div>
            </div>
          </div>
        </div>
      </div>
    </Styled.OneToNine>
  );
};

export default FifthGrade04;
