import React, { useState } from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <h1>Hooks working my dude!</h1>
      <Searchbox searchChange={(e) => setSearchTerm(e.target.value)} />
    </div>
  );
}

export default App;
