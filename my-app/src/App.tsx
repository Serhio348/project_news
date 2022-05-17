import React from 'react';
import Header from './component/header/Header';

import './App.scss';





const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'newsx.p.rapidapi.com',
    'X-RapidAPI-Key': '63335a24a2msh3c174c9ace7bed7p12660ajsn0a7b14975146'
  }
};

fetch('https://newsx.p.rapidapi.com/search?limit=20&skip=0', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Host': 'newsx.p.rapidapi.com',
//     'X-RapidAPI-Key': '63335a24a2msh3c174c9ace7bed7p12660ajsn0a7b14975146'
//   }
// };

// const URL = 'https://newsx.p.rapidapi.com/search?limit=20&skip=0'

const App: React.FC = () => {

  return (
    <div className="app-container">
      <Header />
      <div className="app-content">

      </div>
    </div>
  );
};

export default App;

