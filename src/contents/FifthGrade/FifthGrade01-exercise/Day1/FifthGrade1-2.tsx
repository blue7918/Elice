import DayLayout from '../../Layout/Day1';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { ThirdGrade1Day1 } from '../../utils/handleTitle';

const FifthGrade12Exercise: React.FC = () => {
  return (
    <DayLayout
      title={ThirdGrade1Day1.title}
      subTitle={ThirdGrade1Day1.subTitle}
    >
      <Styled.RowWrapBox>
        <div></div>
      </Styled.RowWrapBox>
      <ConfirmBtn type={true} day={1} />
    </DayLayout>
  );
};

export default FifthGrade12Exercise;
