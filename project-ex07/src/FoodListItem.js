import React from 'react';
import { version } from 'react-dom';

export default class FoodListItem extends React.Component {
    
   render(){
        this.props.name = 'jskim';
        return (
        <li>{this.props.name} : {this.props.quantity}</li>
        );
   }
}