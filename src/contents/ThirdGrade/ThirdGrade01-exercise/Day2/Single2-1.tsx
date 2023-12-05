import React from 'react';
import Styled from '../../style';
import { Data12QuizProps } from '../../Type/Type1';
import Matrix from '../../utils/Matrix';

const Single21 = (props: Data12QuizProps) => {
  const { id, quiz1, quiz2 } = props;
  return (
    <Styled.SingleWrapper>
      <Styled.ColGapBox gap={0}>
        <Matrix />
        <Styled.InputWrapper2>
          <div>{id}</div>
          <div>{quiz1}</div>
          <div>+</div>
          <div>{quiz2}</div>
          <div>=</div>
          <Styled.InputBox2></Styled.InputBox2>
        </Styled.InputWrapper2>
      </Styled.ColGapBox>
    </Styled.SingleWrapper>
  );
};

export default Single21;
