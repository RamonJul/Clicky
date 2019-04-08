import React from 'react';
import "./container.css"
class container extends React.Component{
    render(){
        return(
                
      <div className="container">
      {this.props.children}
    </div>
        )
    }


}

export default container;