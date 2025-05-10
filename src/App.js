import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Header from './components/Header/Header';

// Import page components
import Homepage from './components/Homepage/Homepage';
import Treez420 from './components/Treez420/Treez420';
import KnowUs from './components/KnowUs/KnowUs';
import ConnectWithUs from './components/ConnectWithUs/ConnectWithUs';
import Highlights from './components/Highlights/Highlights';
import Legals from './components/Legals/Legals';

function App() {
  return (
    <>
      <Header />
      <Box as="main" p={{ base: 4, md: 6 }} bg="var(--color-black)">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/treez" element={<Treez420 />} />
          <Route path="/about" element={<KnowUs />} />
          <Route path="/highlights" element={<Highlights />} />
          <Route path="/connect" element={<ConnectWithUs />} />
          <Route path="/legal" element={<Legals />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
