import React from 'react'
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [listItem, setListItem]= useState(['Drama', 'Movie', 'Documentary', 'Variety', 'News', 'Kids', 'EngSubs Collection']);
  return (
    <div className='mt-50' style={{color:'#fff', fontWeight:'400'}}>
      <Header items={listItem}></Header>
    </div>
  );
}

export default App;
