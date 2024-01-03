import { sendScore } from '@elice/extcontent-apis';
import { postKeyValue } from '@elice/extcontent-apis';
// import { useEliceAccount } from '@elice/extcontent-utils';

interface AnswerProps {
  key?: string;
  inputValue: string[][] | number[][] | (number | null)[][];
  answer: string[][] | number[][] | (number | null)[][];
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setCorrect: React.Dispatch<React.SetStateAction<boolean[]>>;
}

export const handleAnswer = ({
  key,
  inputValue,
  answer,
  setScore,
  setCorrect,
}: AnswerProps) => {
  let score = 0;
  const correct: boolean[] = [];
  const len = inputValue.length;

  for (let i = 0; i < len; i++) {
    let flag = true;
    for (let j = 0; j < inputValue[i].length; j++) {
      let temp = inputValue[i][j];
      if (temp === ('' || undefined || null)) temp = null;
      if (temp?.toString() !== answer[i][j]?.toString()) {
        flag = false;
      }
    }
    correct.push(flag);
    if (flag) score++;
  }
  const totalScore = handleScore(score, len);
  setScore(totalScore);
  setCorrect(correct);
  sendScore({ score: totalScore }).catch(err => {
    console.error('send score failed', err);
  });
  postDataUtil(key, inputValue)
    .then(response => {
      console.log('Success:', response);
    })
    .catch(error => {
      console.error('Error:', error);
    });
};

export const handleScore = (score: number, len: number) => {
  return Math.ceil((score / len) * 100);
};
export const postDataUtil = async (key: any, value: any) => {
  try {
    const response = await postKeyValue({ key, value });
    console.log('Success:', response);
  } catch (error) {
    console.error('Error:', error);
  }
};
