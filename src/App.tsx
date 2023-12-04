import { Route, Routes } from 'react-router-dom';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ThirdGrade11Exercise from './contents/ThirdGrade/ThirdGrade01-exercise/Day1/ThirdGrade1-1';
import ThirdGrade12Exercise from './contents/ThirdGrade/ThirdGrade01-exercise/Day1/ThirdGrade1-2';
import ThirdGrade13Exercise from './contents/ThirdGrade/ThirdGrade01-exercise/Day1/ThirdGrade1-3';

function App() {
  return (
    // <QueryClientProvider client={queryClient}>
    <Routes>
      <Route path="/" element={<ThirdGrade11Exercise />}></Route>
      <Route path="/2" element={<ThirdGrade12Exercise />}></Route>
      <Route path="/3" element={<ThirdGrade13Exercise />}></Route>
    </Routes>
    // </QueryClientProvider>
  );
}

export default App;
