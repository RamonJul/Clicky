import React from 'react';
import "./holder.css"
class holder extends React.Component{
    render(){
        return(
                
      <div className="holder">
      {this.props.children}
    </div>
        )
    }


}

export default holder;