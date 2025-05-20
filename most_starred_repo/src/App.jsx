import React from 'react';
import AllRepos from './components/AllRepos';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Most Starred GitHub Repos (Last 10 Days)</h1>
      <AllRepos />
    </div>
  );
}

export default App;
