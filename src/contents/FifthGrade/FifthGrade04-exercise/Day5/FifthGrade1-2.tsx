import DayLayout from '../../Layout/Day5';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FifthGrade1Day41 } from '../../utils/handleTitle';
import FifthGrade14 from './FifthGrade14';

const FifthGrade12Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade1Day41.title}
      subTitle={FifthGrade1Day41.subTitle}
    >
      <Styled.RowWrapBox10>
        <FifthGrade14 />
      </Styled.RowWrapBox10>
      <ConfirmBtn type={true} day={5} />
    </DayLayout>
  );
};

export default FifthGrade12Exercise;
