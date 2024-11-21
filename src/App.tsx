import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import BoardList from './BoardList';

function App() {
  return (
<>
<div className="container">
  <div className="row">
    <div className='col-md-12'>
    <BoardList/>     
    </div>
  </div>
</div>
</>
  );
}

export default App;
