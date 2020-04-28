import React from 'react';
import FoodList from './FoodList';

export default class App extends React.Component {
   render(){
      return (
         <ul className='App'>
            <FoodList /> 
         </ul>
            
      );
   }
}