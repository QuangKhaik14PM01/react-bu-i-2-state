import React, { Component } from 'react'
import { glassessArr } from './data'
export default class Glassess extends Component {
renderGlassesList=()=>{
return glassessArr.map((item)=>{
   

    return(
        <div className='row'>
          <div className='col-4 p-3'>

    <img src={item.url}  alt='' onClick={() => this.handleGlassesClick(item.model)}></img>

</div>
        </div>
        
        
        )

});
};
state={
model:'model',
};
    render() {
    return (
      <div>
<div> {this.renderGlassesList()}</div>

<img src={`./glassesImage/${this.state.model}.jpg`} alt=""  className='w-50 h-50'/>

      </div>
    )
  }
}