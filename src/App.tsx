import { Route, Routes } from 'react-router-dom';
import styled from '@emotion/styled';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ThirdGrade11Exercise from './contents/ThirdGrade/ThirdGrade01-exercise/Day1/ThirdGrade1-1';
import ThirdGrade12Exercise from './contents/ThirdGrade/ThirdGrade01-exercise/Day1/ThirdGrade1-2';
import ThirdGrade13Exercise from './contents/ThirdGrade/ThirdGrade01-exercise/Day1/ThirdGrade1-3';
import ThirdGrade21Exercise from './contents/ThirdGrade/ThirdGrade01-exercise/Day2/ThirdGrade2-1';
import ThirdGrade22Exercise from './contents/ThirdGrade/ThirdGrade01-exercise/Day2/ThirdGrade2-2';
import ThirdGrade23Exercise from './contents/ThirdGrade/ThirdGrade01-exercise/Day2/ThirdGrade2-3';
import ThirdGrade32Exercise from './contents/ThirdGrade/ThirdGrade01-exercise/Day3/ThirdGrade3-2';
import ThirdGrade33Exercise from './contents/ThirdGrade/ThirdGrade01-exercise/Day3/ThirdGrade3-3';
import ThirdGrade42Exercise from './contents/ThirdGrade/ThirdGrade01-exercise/Day4/ThirdGrade4-2';
import ThirdGrade43Exercise from './contents/ThirdGrade/ThirdGrade01-exercise/Day4/ThirdGrade4-3';
import ThirdGrade53Exercise from './contents/ThirdGrade/ThirdGrade01-exercise/Day5/ThirdGrade5-3';
import ThirdGrade212 from './contents/ThirdGrade/ThirdGrade02-exercise/Day1/ThirdGrade1-2';
import ThirdGrade213 from './contents/ThirdGrade/ThirdGrade02-exercise/Day1/ThirdGrade1-3';
import ThirdGrade222 from './contents/ThirdGrade/ThirdGrade02-exercise/Day2/ThirdGrade2-2';
import ThirdGrade223 from './contents/ThirdGrade/ThirdGrade02-exercise/Day2/ThirdGrade2-3';
import ThirdGrade232 from './contents/ThirdGrade/ThirdGrade02-exercise/Day3/ThirdGrade3-2';
import ThirdGrade233 from './contents/ThirdGrade/ThirdGrade02-exercise/Day3/ThirdGrade3-3';
import ThirdGrade242 from './contents/ThirdGrade/ThirdGrade02-exercise/Day4/ThirdGrade4-2';
import ThirdGrade243 from './contents/ThirdGrade/ThirdGrade02-exercise/Day4/ThirdGrade4-3';
import ThirdGrade251 from './contents/ThirdGrade/ThirdGrade02-exercise/Day5/ThirdGrade5-1';
import ThirdGrade252 from './contents/ThirdGrade/ThirdGrade02-exercise/Day5/ThirdGrade5-2';
import ThirdGrade253 from './contents/ThirdGrade/ThirdGrade02-exercise/Day5/ThirdGrade5-3';
import ThirdGrade313 from './contents/ThirdGrade/ThirdGrade03-exercise/Day1/ThirdGrade1-3';
import ThirdGrade323 from './contents/ThirdGrade/ThirdGrade03-exercise/Day2/ThirdGrade2-3';
import ThirdGrade333 from './contents/ThirdGrade/ThirdGrade03-exercise/Day3/ThirdGrade3-3';
import ThirdGrade343 from './contents/ThirdGrade/ThirdGrade03-exercise/Day4/ThirdGrade4-3';

function App() {
  return (
    // <QueryClientProvider client={queryClient}>
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<ThirdGrade11Exercise />}></Route>
        <Route path="/2" element={<ThirdGrade12Exercise />}></Route>
        <Route path="/3" element={<ThirdGrade13Exercise />}></Route>
        <Route path="/21" element={<ThirdGrade21Exercise />}></Route>
        <Route path="/22" element={<ThirdGrade22Exercise />}></Route>
        <Route path="/23" element={<ThirdGrade23Exercise />}></Route>
        <Route path="/32" element={<ThirdGrade32Exercise />}></Route>
        <Route path="/33" element={<ThirdGrade33Exercise />}></Route>
        <Route path="/42" element={<ThirdGrade42Exercise />}></Route>
        <Route path="/43" element={<ThirdGrade43Exercise />}></Route>
        <Route path="/53" element={<ThirdGrade53Exercise />}></Route>
        <Route path="/212" element={<ThirdGrade212 />}></Route>
        <Route path="/213" element={<ThirdGrade213 />}></Route>
        <Route path="/222" element={<ThirdGrade222 />}></Route>
        <Route path="/223" element={<ThirdGrade223 />}></Route>
        <Route path="/232" element={<ThirdGrade232 />}></Route>
        <Route path="/233" element={<ThirdGrade233 />}></Route>
        <Route path="/242" element={<ThirdGrade242 />}></Route>
        <Route path="/243" element={<ThirdGrade243 />}></Route>
        <Route path="/251" element={<ThirdGrade251 />}></Route>
        <Route path="/252" element={<ThirdGrade252 />}></Route>
        <Route path="/253" element={<ThirdGrade253 />}></Route>
        <Route path="/313" element={<ThirdGrade313 />}></Route>
        <Route path="/323" element={<ThirdGrade323 />}></Route>
        <Route path="/333" element={<ThirdGrade333 />}></Route>
        <Route path="/343" element={<ThirdGrade343 />}></Route>
      </Routes>
    </>

    // </QueryClientProvider>
  );
}

export default App;

const GlobalStyle = styled.div`
  @import url('https://font.elice.io/css?family=Elice+DX+Neolli');

  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
      format('woff');
    font-weight: 400;
    font-style: normal;
  }

  body {
    margin: 0 !important;
    font-family: 'Pretendard';
  }

  div {
    box-sizing: border-box;
  }
`;
