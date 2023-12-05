import { Route, Routes } from 'react-router-dom';
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

function App() {
  return (
    // <QueryClientProvider client={queryClient}>
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
    </Routes>
    // </QueryClientProvider>
  );
}

export default App;
