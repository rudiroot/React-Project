import React, { Component } from 'react';
import ResultItem from './ResultItem.js';

class Results extends Component {
  render() {
    return (
      <div className="ResultField">
         
         {this.props.resultdata.map(function(item){
            return <ResultItem song={item}/>   
         })}
      </div>
    )
  }
}

export default Results;
