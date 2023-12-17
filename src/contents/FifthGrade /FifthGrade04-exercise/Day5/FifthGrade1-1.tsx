import DayLayout from '../../Layout/Day5';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FifthGrade1Day41 } from '../../utils/handleTitle';
import FifthGrade13 from './FifthGrade13';

const FifthGrade11Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade1Day41.title}
      subTitle={FifthGrade1Day41.subTitle}
    >
      <Styled.RowWrapBox10>
        <FifthGrade13 />
      </Styled.RowWrapBox10>
      <ConfirmBtn type={true} day={5} />
    </DayLayout>
  );
};

export default FifthGrade11Exercise;
