import React from 'react';
//import Rout from './Rout';
import Hoc from './Hoc';
const App = (props) => {
  return (
    <div>
      <center>
           <h2>Well come user {props.name}</h2>
      </center>
    </div>
  )
}

export default Hoc(App);
