import React from 'react';
import logo from './logo.svg';
import './App.css';

let a: string = '100';
let isSamurai: boolean | null = true;
let names: Array<string> = ['1', '2']
let sex: 1 | 0;

type AddressType = {
  city?: string,
  country: string
}

type UserType = {
  sayHello: Function
  name: string
  address: AddressType | null
}

let user: UserType = {
  sayHello(message: string) { console.log('hey') },
  name: 'Art',
  address: {
    city: 'Irkutsk',
    country: 'Russia'
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
