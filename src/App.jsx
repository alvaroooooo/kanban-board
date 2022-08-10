import { useState } from 'react';
import SideSection from './components/SideSection';
import Board from './components/Board';
import ModalBox from './components/modal/ModalBox';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="app">
      <ModalBox />
      <SideSection setIsModalActive />
      <Board />
    </div>
  )
}

export default App
