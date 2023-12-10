import styled from '@emotion/styled';

const Styled = {
  ColGapBox: styled.div<{ gap?: number }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${props => (props.gap ? `${props.gap}rem` : '')};
  `,
  RowWrapBox: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
    align-items: center;
    justify-content: center;
    & > div {
      width: 40%;
      justify-content: center;
    }
  `,
  RowWrapBox2: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    & > div {
      width: 30%;
      justify-content: center;
    }
  `,
  RowWrapBox3: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    align-items: center;
    margin-left: 3.5rem;
    & > div {
      width: 40%;
      justify-content: center;
    }
  `,
  RowWrapBox4: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    justify-content: center;
  `,
  RowWrapBox10: styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;
    align-items: center;
    margin-left: 3.5rem;
    & > div {
      width: 80%;
      justify-content: center;
    }
  `,
  RowBox: styled.div`
    display: flex;
  `,
  RowBox2: styled.div`
    display: flex;
    gap: 1rem;
    width: 80%;
  `,
  RowBox3: styled.div`
    display: flex;
    width: 100%;
    margin-top: 1rem;
  `,
  RowBox4: styled.div`
    display: flex;
    height: 100%;
    align-items: flex-end;
    gap: 1rem;
  `,
  RowBox5: styled.div`
    display: flex;
    height: 2.67rem;
    align-items: flex-end;
    gap: 1rem;
  `,

  RedFont1: styled.div`
    color: #ff2e00;
    padding-left: 0.8rem;
    margin-top: 0.2rem;
    width: 100%;
  `,
  SetCenter: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  `,

  ExampleBox1: styled.div`
    //긴 example box
    margin-top: 2.938rem;
    margin-bottom: 0.1875rem;
    width: 42.5rem;
    height: 11.375rem;
    border-radius: 1.25rem;
    border: 1px solid #c0c0c0;
    background: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 600;
  `,
  ExampleBox2: styled.div`
    //짧은 example box
    margin-top: 2.938rem;
    margin-bottom: 0.1875rem;
    width: 25rem;
    height: 18rem;
    border-radius: 1.25rem;
    border: 1px solid #c0c0c0;
    background: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 600;
  `,
  ExampleBox3: styled.div`
    //길고 높은 example box
    margin-top: 2.938rem;
    margin-bottom: 0.1875rem;
    width: 42.5rem;
    height: 13rem;
    border-radius: 1.25rem;
    border: 1px solid #c0c0c0;
    background: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 600;
  `,
  ExampleBox4: styled.div`
    //길고 낮은 example box
    margin-bottom: 0.1875rem;
    width: 42.5rem;
    height: 9rem;
    border-radius: 1.25rem;
    border: 1px solid #c0c0c0;
    background: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    position: relative;
  `,
  ExampleExplain1: styled.div`
    position: absolute;
    color: #ff2e00;
    font-size: 1rem;
    top: 1.7rem;
    right: 14.5rem;
    display: flex;
    gap: 3.6rem;
  `,
  DashSingleWrapper: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    gap: 1.875rem;
    position: relative;
    padding-top: 5rem;
  `,
  SingleWrapper: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    gap: 1.875rem;
    position: relative;
  `,
  SingleWrapper2: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    gap: 1.875rem;
    width: 100%;
    height: fit-content;
    border-radius: 1rem;
    padding: 2rem;
    align-items: center;
    justify-content: center;
    background-color: #eff5ff;
    position: relative;
  `,
  SingleWrapper3: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    gap: 1.875rem;
    width: 100%;
    min-width: 32.5rem;
    height: fit-content;
    border-radius: 1rem;
    padding: 2rem;
    align-items: center;
    justify-content: center;
    background-color: #eff5ff;
    position: relative;
  `,
  SingleWrapper4: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    gap: 1.875rem;
    width: 100%;
    height: fit-content;
    border-radius: 1rem;
    padding: 2rem;
    align-items: center;
    justify-content: center;
    background-color: rgba(230, 248, 240, 0.6);
    position: relative;
  `,
  SingleWrapper5: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    gap: 1.875rem;
    width: 100%;
    min-width: 32.5rem;
    height: fit-content;
    border-radius: 1rem;
    padding: 2rem;
    align-items: center;
    justify-content: center;
    background-color: rgba(193, 193, 193, 0.2);
    position: relative;
  `,
  MiniSingleWrapper: styled.div`
    width: 30%;
    max-width: 16.875rem;
    height: fit-content;
    align-items: center;
    justify-content: center;
    background-color: rgba(193, 193, 193, 0.2);
    border-radius: 1rem;
    position: relative;
    padding: 2rem;
    margin: 0 5%;
  `,

  PaddingBox: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    gap: 1.875rem;
    padding: 4rem 2rem;
    align-items: center;
    justify-content: center;
  `,
  PaddingBox2: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    padding: 4rem 0;
    align-items: center;
    justify-content: center;
  `,
  InputWrapper: styled.div`
    display: flex;
    gap: 0.75rem;
    margin-bottom: 0.625rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    height: fit-content;
    align-items: center;
  `,
  InputWrapper2: styled.div`
    display: flex;
    gap: 0.75rem;
    margin-bottom: 0.625rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    height: fit-content;
  `,
  InputWrapper3: styled.div`
    display: flex;
    gap: 0.75rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    height: fit-content;
    align-items: center;
  `,
  RowInputWrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.625rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
  `,
  ExplainInputBox1: styled.div`
    width: 4.8125rem;
    height: 2.3125rem;
    border-radius: 0.25rem;
    border: 1px solid #c1c1c1;
    background: #fff;
    color: #ff2e00;
  `,
  LongInput: styled.input`
    width: 60%;
    height: 2rem;
    margin: 0 1rem;
    border: none;
    outline: none;
    border-bottom: 2px solid #c0c0c0;
    font-size: 1.5rem;
    background-color: transparent;
  `,
  ShortInput: styled.input`
    width: 13%;
    height: 2rem;
    margin: 0 1rem;
    border: none;
    outline: none;
    border-bottom: 2px solid #c0c0c0;
    font-size: 1.5rem;
    background-color: transparent;
  `,
  InputBox1: styled.input`
    width: 4.8125rem;
    height: 2.3125rem;
    border-radius: 0.25rem;
    border: 1px solid #c1c1c1;
    background: #fff;
    color: #2b1840;
    padding: 0 0.5rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    box-sizing: border-box;
    &::placeholder {
      color: #ff2e00;
    }
  `,
  InputBox2: styled.input`
    width: 6.6rem;
    height: 2.3125rem;
    border-radius: 0.25rem;
    border: 1px solid #c1c1c1;
    background: #fff;
    color: #2b1840;
    padding: 0 0.3rem;
    text-align: right;
    font-size: 1.5rem;
    font-weight: 600;
    box-sizing: border-box;
    letter-spacing: 0.375rem;
    &::placeholder {
      color: #ff2e00;
    }
  `,
  InputBox3: styled.input`
    width: 2.5rem;
    height: 2.3125rem;
    border-radius: 0.25rem;
    border: 1px solid #c1c1c1;
    background: #fff;
    color: #2b1840;
    padding: 0 0.5rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    box-sizing: border-box;
    &::placeholder {
      color: #ff2e00;
    }
  `,
  TopLineInput: styled.input`
    border: none;
    border-top: 2px solid #c0c0c0;
    outline: none;
    background-color: transparent;
    height: 2rem;
    font-size: 1.5rem;
    font-weight: 600;
    width: 40%;
    text-align: center;
    letter-spacing: 0.55rem;
    padding-left: 0.6rem;
    box-sizing: border-box;
  `,
  InputExplainWrapper: styled.div<{ left?: number }>`
    display: flex;
    gap: 2.6rem;
    margin-bottom: 0.25rem;
    padding-left: ${props => (props.left ? `${props.left}rem` : '')};
  `,
  InputExplain: styled.div`
    width: 4.8125rem;
    height: fit-content;
    color: #ff2e00;
    font-size: 0.75rem;
    font-weight: 600;
    text-align: center;
  `,
  Line: styled.div`
    color: #6297ff;
  `,
  QuestionBox: styled.div`
    padding: 0.375rem 0.6rem;
    border-bottom: 1px solid #6297ff;
    width: fit-content;
    height: fit-content;
  `,
  LineWrppaer1: styled.div`
    width: 17.5rem;
    height: 4rem;
    position: relative;
  `,
  IdNumBox: styled.div`
    position: absolute;
    top: 1.8rem;
    left: 1.2rem;
    font-size: 1.35rem;
  `,
  IdNumBox2: styled.div`
    position: absolute;
    top: 1rem;
    left: 1.2rem;
    font-size: 1.35rem;
  `,
  IdNumBox3: styled.div`
    position: absolute;
    top: 1rem;
    left: 1.2rem;
    font-size: 1.7rem;
  `,
  TextBoxWrapper: styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
    align-items: center;
    gap: 1rem;
    width: 100%;
    padding-left: 1rem;
    .boxCenter {
      display: flex;
      align-items: center;
    }

    .answerBox {
      margin: 0px 10px 0;
      height: 30px;
      font-size: 15px;
    }
  `,
  TextBox: styled.div`
    width: 95%;
    height: fit-content;
    white-space: pre-wrap;
    line-height: 150%;
    font-weight: 500;
    font-size: 1.25rem;
  `,
  TextSize: styled.div`
    font-size: 1.25rem;
    font-weight: 600;
    padding: 1rem;
  `,
  InnerColBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    gap: 0.5rem;
    margin: 0 1rem;
  `,
  AngleShapeBox: styled.div`
    position: relative;
    width: 1.3rem;
    height: 3rem;
    display: flex;
  `,
  AngleShapeLeft: styled.div`
    height: 3rem;
    width: 0.6rem;
    border: 1px solid #c0c0c0;
    border-right: none !important;
    position: absolute;
    top: 0.2rem;
    left: 1rem;
  `,
  AngleLineLeft: styled.div`
    border-bottom: 1px solid #c0c0c0;
    width: 1rem;
    height: 0;
    position: absolute;
    top: 1.8rem;
    left: 0;
  `,
  AngleShapeRight: styled.div`
    height: 3rem;
    width: 0.6rem;
    border: 1px solid #c0c0c0;
    border-left: none !important;
    position: absolute;
    top: 0.2rem;
    right: 1rem;
  `,
  AngleLineRight: styled.div`
    border-bottom: 1px solid #c0c0c0;
    width: 1rem;
    height: 0;
    position: absolute;
    top: 1.8rem;
    right: 0;
  `,
  LetterSpacing: styled.div`
    letter-spacing: 0.5rem;
    text-align: right;
    width: 100%;
  `,
  LetterSpacing2: styled.div`
    letter-spacing: 2.5rem;
    margin-left: 1.8rem;
    text-align: right;
    width: 100%;
  `,
  RightDashBorder: styled.div`
    width: 3rem;
    height: 9rem;
    margin-right: 0.5rem;
    border-right: 1.5px dashed #c0c0c0;
  `,
  RightDashBorderWrapper: styled.div`
    position: relative;
  `,
  DashNumWrapper: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  `,
  DashNumMid: styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    padding-left: 1.2rem;
  `,
  DashBoxMidLine: styled.div`
    width: 110%;
    height: 0.125rem;
    background-color: black;
  `,
  DashBoxUpper: styled.div`
    position: absolute;
    top: -3rem;
    left: 3.4rem;
    border: 2px solid #d0e0ff;
    border-radius: 0.4rem;
    background-color: #eff5ff;
    width: 2.5rem;
    height: 2.3125rem;
  `,

  OneToNine: styled.div`
    .absolSetting {
      width: 100%;
      height: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
    }

    .elementAbsol1 {
      position: absolute;
      top: 0%;
      right: 50%;
    }

    .elementAbsol2 {
      position: absolute;
      top: 24%;
      right: 20%;
    }

    .elementAbsol3 {
      position: absolute;
      right: 28.5%;
      top: 75%;
    }
    .elementAbsol4 {
      position: absolute;
      right: 30%;
      top: 75%;
    }
    .elementAbsol5 {
      position: absolute;
      right: 27.5%;
      top: 75%;
    }
    .inputSize1 {
      width: 3vw;
      height: 3vh;
      border-radius: 5px;
      border: 1px solid #e2e2e2;
      margin-top: 4%;
      outline: none;
      padding-left: 4px;
    }

    .quiz {
      position: relative;
      display: grid;
      grid-template-columns: 70%;
      align-content: center;
      justify-content: center;
      margin-left: 30px;
      margin-top: 50px;
    }

    .quiz1 {
      position: relative;
      display: grid;
      grid-template-columns: 40% 40%;
      align-content: center;
      justify-content: center;
      margin-top: 50px;
    }

    .quiz2 {
      position: relative;
      display: grid;
      grid-template-columns: 37% 37%;
      align-content: center;
      justify-content: center;
      margin-top: 50px;
    }

    .quizAll {
      margin-top: 30px;
      width: 100%;
    }

    .quizCard {
      width: 90%;
      height: 190px;
      padding: 23px;
      border: 1px solid #e9e9e9;
      position: relative;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 3%;
    }

    .quizCard1 {
      width: 90%;
      height: 120px;
      padding: 23px;
      background-color: #e2e2e2;
      position: relative;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      margin: 3%;
      .margin5px {
        margin-top: 5px;
      }
    }

    .quizCard4 {
      width: 92%;
      height: 120px;
      padding: 25px;
      background-color: #e2e2e2;
      position: relative;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      margin: 50px 0px;
    }

    .quizNumber {
      position: absolute;
      left: 2%;
      top: -10%;
    }

    .sectionSize {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-content: center;
    }

    .textRight {
      margin-top: 1%;
      margin-left: 60px;
      text-align: center;
    }

    .textRight2 {
      margin-top: 1%;
      margin-left: 50px;
      text-align: center;
    }
    .marginTop18 {
      margin-top: 18px;
      margin-left: 10px;
    }

    .twoQuiz {
      display: grid;
      grid-template-columns: 40% 40%;
      align-content: center;
      justify-content: center;
      margin-left: 40px;
    }

    .lineStyleCss {
      .d-line {
        width: 0; /* 가로 길이 조절 */
        height: 32px; /* 세로 길이 조절 */
        border: 0.5px solid red;
        position: absolute;
        left: 21%;
        top: 13%;
        transform: rotate(-90deg);
      }

      .d-line:before,
      .d-line:after {
        content: '';
        position: absolute;
        width: 7px; /* 가로 길이 조절 */
        height: 1px; /* 세로 길이 조절 */
        background-color: red; /* 선의 색상 설정 */
      }

      .d-line:before {
        top: -1px;
        left: 0;
        transform: rotate(0deg);
      }

      .d-line:after {
        top: 30px;
        left: 0px; /* 가로 길이의 절반만큼 이동 */
        transform: rotate(0deg);
      }

      .d-line1 {
        width: 0; /* 가로 길이 조절 */
        height: 42px; /* 세로 길이 조절 */
        border: 0.5px solid red;
        position: absolute;
        transform: rotate(-90deg);
        left: 25%;
        top: 47%;
      }

      .d-line1:before,
      .d-line1:after {
        content: '';
        position: absolute;
        width: 7px; /* 가로 길이 조절 */
        height: 1px; /* 세로 길이 조절 */
        background-color: red; /* 선의 색상 설정 */
      }

      .d-line1:before {
        top: -1px;
        left: 0;
        transform: rotate(0deg);
      }

      .d-line1:after {
        width: 38px; /* 가로 길이 조절 */
        top: 40px;
        left: 0px; /* 가로 길이의 절반만큼 이동 */
        transform: rotate(0deg);
      }

      .d-line2 {
        width: 0; /* 가로 길이 조절 */
        height: 32px; /* 세로 길이 조절 */
        border: 0.5px solid red;
        position: absolute;
        transform: rotate(-90deg);
        right: 35%;
        top: 12%;
      }

      .d-line2:before,
      .d-line2:after {
        content: '';
        position: absolute;
        width: 7px; /* 가로 길이 조절 */
        height: 1px; /* 세로 길이 조절 */
        background-color: red; /* 선의 색상 설정 */
      }

      .d-line2:before {
        top: -1px;
        left: 0;
        transform: rotate(0deg);
      }

      .d-line2:after {
        top: 30px;
        left: 0px; /* 가로 길이의 절반만큼 이동 */
        transform: rotate(0deg);
      }
      .d-line3 {
        width: 0; /* 가로 길이 조절 */
        height: 42px; /* 세로 길이 조절 */
        border: 0.5px solid red;
        position: absolute;
        transform: rotate(-90deg);
        right: 39%;
        top: 43%;
      }

      .d-line3:before,
      .d-line3:after {
        content: '';
        position: absolute;
        width: 8px; /* 가로 길이 조절 */
        height: 1px; /* 세로 길이 조절 */
        background-color: red; /* 선의 색상 설정 */
      }

      .d-line3:before {
        top: -1px;
        left: 0;
        transform: rotate(0deg);
        width: 38px; /* 좌측 세로 길이 조절 */
      }

      .d-line3:after {
        top: 40px;
        left: 0px; /* 가로 길이의 절반만큼 이동 */
        transform: rotate(0deg);
      }

      .d-line4 {
        width: 0; /* 가로 길이 조절 */
        height: 32px; /* 세로 길이 조절 */
        border: 0.5px solid red;
        position: absolute;
        transform: rotate(-90deg);
        right: 45%;
        top: 34%;
      }

      .d-line4:before,
      .d-line4:after {
        content: '';
        position: absolute;
        width: 7px; /* 가로 길이 조절 */
        height: 1px; /* 세로 길이 조절 */
        background-color: red; /* 선의 색상 설정 */
      }

      .d-line4:before {
        top: -1px;
        left: 0;
        transform: rotate(0deg);
      }

      .d-line4:after {
        top: 30px;
        left: 0px; /* 가로 길이의 절반만큼 이동 */
        transform: rotate(0deg);
      }

      .d-line5 {
        width: 0; /* 가로 길이 조절 */
        height: 48px; /* 세로 길이 조절 */
        border: 0.5px solid red;
        position: absolute;
        transform: rotate(-90deg);
        left: 43%;
        top: 62%;
      }

      .d-line5:before,
      .d-line5:after {
        content: '';
        position: absolute;
        width: 8px; /* 가로 길이 조절 */
        height: 1px; /* 세로 길이 조절 */
        background-color: red; /* 선의 색상 설정 */
      }

      .d-line5:before {
        top: -1px;
        left: 0;
        transform: rotate(0deg);
        width: 38px; /* 좌측 세로 길이 조절 */
      }

      .d-line5:after {
        top: 46px;
        left: 0px; /* 가로 길이의 절반만큼 이동 */
        transform: rotate(0deg);
      }

      .marginLeft1 {
        right: 33%;
      }

      .marginLeft2 {
        right: 44.5%;
      }
    }
    .flexrow {
      display: flex;
      flex-direction: row;
      .margin8px {
        margin-left: 8px;
      }
      .margin10px {
        margin-left: 14px;
      }
    }

    .borderRedSq {
      width: 20px;
      height: 20px;
      text-align: center;
      border: 1px solid gray;
      color: red;
      border-radius: 2px;
      margin-left: 5px;
    }

    .borderRedSqAb1 {
      width: 20px;
      height: 20px;
      text-align: center;
      border: 1px solid gray;
      color: red;
      border-radius: 2px;
      position: absolute;
      top: 35%;
      left: 19%;
    }

    .borderRedSqAb2 {
      width: 20px;
      height: 20px;
      text-align: center;
      border: 1px solid gray;
      color: red;
      border-radius: 2px;
      position: absolute;
      top: 75%;
      left: 24%;
    }

    .borderRedSqAb3 {
      width: 20px;
      height: 20px;
      text-align: center;
      border: 1px solid gray;
      color: red;
      border-radius: 2px;
      position: absolute;
      top: 35%;
      left: 62.5%;
    }

    .borderRedSqAb4 {
      width: 20px;
      height: 20px;
      text-align: center;
      border: 1px solid gray;
      color: red;
      border-radius: 2px;
      position: absolute;
      top: 72%;
      left: 58%;
    }

    .quizCardNone {
      width: 80%;
      height: 100px;
      padding: 23px;
      position: relative;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      margin: 3%;
    }

    .borderRedInput1 {
      font-size: 10px;
      width: 20px;
      height: 20px;
      text-align: center;
      border: 1px solid gray;
      border-radius: 2px;
      position: absolute;
      top: 25%;
      right: 13%;
      outline: none;
      padding-left: 3px;
    }

    .borderRedInput2 {
      font-size: 10px;
      width: 20px;
      height: 20px;
      text-align: center;
      border: 1px solid gray;
      border-radius: 2px;
      position: absolute;
      top: 54%;
      right: 41%;
      outline: none;
      padding-left: 3px;
    }

    .borderRedInput3 {
      font-size: 10px;
      width: 20px;
      height: 20px;
      text-align: center;
      border: 1px solid gray;
      border-radius: 2px;
      position: absolute;
      top: 92%;
      right: 51%;
      outline: none;
      padding-left: 3px;
    }
    .quizMargin {
      margin-right: 80px;
    }

    .imgInputSet input {
      position: absolute;
      width: 60px;
      height: 60px;
      font-size: 25px;
      padding-inline-start: 7px;
    }

    .imgInput1 {
      top: 7.8%;
      right: 31.5%;
    }

    .imgInput2 {
      top: 31.8%;
      right: 43.5%;
    }

    .imgInput3 {
      top: 55.5%;
      right: 19.5%;
    }

    .imgInput4 {
      top: 79%;
      right: 31.5%;
    }

    .imgInput5 {
      top: 103%;
      right: 55.5%;
    }

    .imgInput6 {
      top: 103%;
      right: 19.5%;
    }

    .imgInput7 {
      top: 126.1%;
      right: 43.5%;
    }

    .imgInput8 {
      top: 126.1%;
      right: 67.5%;
    }
    .flexCol {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .marginBottom18 {
      margin-bottom: 18px;
    }
  `,
};

export default Styled;
