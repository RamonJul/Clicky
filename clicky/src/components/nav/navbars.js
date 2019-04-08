import React from "react";
import "./nav.css"

class Navbar extends React.Component {
        // nav(props) {
        //         this.score=props.score
        //         this.top=props.topScore

        // }

        render() {
                return(

                        <nav className="navbar navbar-light">
                                 <h4 id="topScore"> Top Score: {this.props.topScore}</h4>
                                 <h4 id="score"> Score: {this.props.score}</h4>        
                              
                        </nav>
                )

        }

}

export default Navbar