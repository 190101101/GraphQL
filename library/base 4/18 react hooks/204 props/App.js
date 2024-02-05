import React from 'react';
import Note from './Note';
import Block from './Block';

const App = () => {
  return (
    <React.Fragment>
      <h1>Hello Cookies</h1>
      <Note note={'note 1'} color={'red'}/>
      <Note note={'note 2'} color={'green'}/>
      <Note note={'note 3'} color={'blue'}/>
      <Note note={'note 4'} color={'cyan'}/>
      <Block name={'cookie'} age={7}/>
    </React.Fragment>
  );
}

export default App;
