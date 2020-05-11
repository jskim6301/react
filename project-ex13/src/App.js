import React from 'react';
import Greeter from './Greeter';

export default class App extends React.Component {
   render(){
      return (
         <ul className='App'>
            <Greeter name='둘리'/> 
            <Greeter name='마이콜'/> 
            <Greeter /> 
         </ul>
            
      );
   }
}