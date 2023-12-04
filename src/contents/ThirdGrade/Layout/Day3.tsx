import { LayoutStyled as Styled } from './style';
import { handleColor } from '../utils/handleColor';
import { LayoutProps } from '../Type/Type1';
import { IsTwoLine } from '../utils/handleTitle';

const Day3Layout = (props: LayoutProps) => {
  const { children, title, subTitle } = props;

  const borderColor = handleColor('border', 3);
  const titleColor = handleColor('title', 3);
  const subColor = handleColor('sub', 3);
  const line = IsTwoLine(subTitle);

  return (
    <Styled.DailyBackgroud color={borderColor}>
      <Styled.QuizTitle color={titleColor}>{title}</Styled.QuizTitle>
      <Styled.QuizSub border={borderColor} color={subColor} >
        {subTitle}
      </Styled.QuizSub>
      <Styled.QuizBox color={borderColor} line={line}>{children}</Styled.QuizBox>
    </Styled.DailyBackgroud>
  );
};


export default Day3Layout;