import React, { useState } from 'react';
import "./style.css";
import B from './components/B';
import C from './components/C';
import Container from './components/Container';

function App() {
  
  return (
    <div className="App">
      <Container >
        <h1>Counter app</h1>
        <B/>
        <C/>
      </Container>
    </div>
  );
}

export default App;