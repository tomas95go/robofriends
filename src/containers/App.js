import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [robots, setRobots] = useState([]);

  const filterRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        setRobots(users);
      });
  }, []);

  return !robots.length ? (
    <h1>Loading...</h1>
  ) : (
    <div className="tc">
      <h1 className="f1"> Search your buddy! </h1>
      <Searchbox searchChange={(e) => setSearchTerm(e.target.value)} />
      <Scroll>
        <CardList robots={filterRobots} />
      </Scroll>
    </div>
  );
}

export default App;
