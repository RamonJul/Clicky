import React from "react";
import "./card.css"

class Card extends React.Component{

    render(){

        return(
        <div className="clickyImg" onClick={()=> this.props.click(this.props.id)} >        
            <img src={this.props.img} alt="img"></img>
        </div>
     

        );



    }    
}

export default Card