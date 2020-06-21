import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  return (
    <>
      <label>
        Favorite Phrase:
        <input />
      </label>
      <label>
        Second Favorite Phrase:
        <input />
      </label>
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
