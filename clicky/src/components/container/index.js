import React from 'react';
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