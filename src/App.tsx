import React from 'react';
import Description from './components/Product/Description';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Description name="test" description="description"/>
    </div>
  );
}

export default App;
