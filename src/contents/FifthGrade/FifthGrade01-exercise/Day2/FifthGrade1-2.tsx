import DayLayout from '../../Layout/Day2';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FifthGrade1Day2 } from '../../utils/handleTitle';
import FifthGrade05 from './FifthGrade05';

const FifthGrade12Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade1Day2.title}
      subTitle={FifthGrade1Day2.subTitle}
    >
      <Styled.RowWrapBox10>
        <FifthGrade05 />
      </Styled.RowWrapBox10>
    </DayLayout>
  );
};

export default FifthGrade12Exercise;
