import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>The Counter</h1>
      <div className='App'>
        <div
          className='card'
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '3rem',
          }}
        >
          <button onClick={() => setCount((count) => count - 1)}>
            Decrease
          </button>
          {count < 0 ? (
            <h4 style={{ background: 'red', color: 'white', padding: '1rem' }}>
              The count is{' '}
              <strong style={{ fontSize: '1.5rem' }}>{count}</strong>
            </h4>
          ) : (
            <h4
              style={{ background: 'green', color: 'white', padding: '1rem' }}
            >
              The count is{' '}
              <strong style={{ fontSize: '1.5rem' }}>{count}</strong>
            </h4>
          )}
          <button onClick={() => setCount((count) => count + 1)}>
            Increase
          </button>
        </div>
        <button
          onClick={() => {
            setCount(0);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
