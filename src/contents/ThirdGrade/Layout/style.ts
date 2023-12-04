import styled from '@emotion/styled';

export const LayoutStyled = {
  DailyBackgroud: styled.div<{ color: string }>`
    position: relative;
    width: 100vw;
    height: 98vh;
    max-width: 100%;
    max-height: 100%;
    background: ${(
      props
    ) => `linear-gradient(${props.color} 0.5px, transparent 0.5px) 0 0,
  linear-gradient(90deg, ${props.color} 0.5px, transparent 0.5px) 0 0,
  linear-gradient(180deg,${props.color} 0.5px, transparent 1px) 0 0,
    linear-gradient(270deg, ${props.color} 0.5px, transparent 1px) 0 0
  `}; //'border'
    background-size: 2rem 1.375rem;
    background-color: #fff;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  QuizTitle: styled.div<{ color: string }>`
    top: 0;
    color: white;
    position: absolute;
    width: 30vw;
    height: 9vh;
    line-height: 9vh;
    background-color: ${(props) => props.color}; //'title'
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
  `,

  QuizSub: styled.div<{ border: string; color: string }>`
    top: 12%;
    position: absolute;
    width: 42.5rem;
    min-height: 4.5rem;
    max-height: 6rem;
    background-color: ${(props) => props.color}; //'sub'
    border: 1.5px solid ${(props) => props.border}; //'border'
    border-radius: 0.625rem;
    line-height: 150%;
    font-size: 1.5rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-sizing: border-box;
    white-space: pre-wrap;
  `,
  QuizBox: styled.div<{ color: string; line: boolean }>`
    bottom: 4%;
    left: 14%;
    position: absolute;
    width: 70.67vw;
    height: ${(props) => (props.line === true ? '46.4375rem' : '47.9375rem')};
    background-color: white;
    border: 8px solid ${(props) => props.color}; //'border'
    border-radius: 0.75rem;
    overflow: auto;
  `,
};
