import styled from '@emotion/styled';

const ConfirmBtn = (type: { type: boolean }) => {
  return (
    <ButtonWrappr>
      {type ? (
        <ConfirmBox>제출하기</ConfirmBox>
      ) : (
        <RetryButton>다시풀기</RetryButton>
      )}
    </ButtonWrappr>
  );
};

const ButtonWrappr = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 2.5rem 0;
  & > button {
    border-radius: 0.625rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16.125rem;
    height: 4.125rem;
    font-size: 1.875rem;
    line-height: 100%;
  }
`;
const ConfirmBox = styled.button`
  background-color: #ff6291;
  color: #fff;
  font-weight: 500;
  border: none;
`;
const RetryButton = styled.button`
  border: 4px solid #ff6291;
  color: #ff6291;
  font-weight: 700;
`;

export default ConfirmBtn;
