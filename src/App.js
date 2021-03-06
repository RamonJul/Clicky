import React from 'react';
import Navbar from "./components/nav/navbars";
import Card from "./components/card/card";
import Holder from "./components/card_holder/index"
import lotr from "./cards.json"
import Container from "./components/container/index"
import './App.css';
class App extends React.Component {
  sort=()=>{
    let array=lotr
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
    return array
  }
state={
  score:0,
  topScore:0,
  list:this.sort(),
  clicked:[]
}  


click=(id)=>{
const clicked=this.state.clicked.filter(list=>list.id===id)//checks if obj is in clicked array 
let newScore
let newArray=this.state.clicked
let topScore=this.state.topScore;
//clicked obj is in the clicked array
  if(clicked[0]===undefined){
    //when the  clicked is null its not in the clicked array
    let newClicked=this.state.list.filter(list=>list.id===id)
    newArray.push(newClicked[0])
    //push clicked obj to clicked array
      newScore=this.state.score+1
      //increment the score by 1
   topScore=(newScore>topScore)?newScore:topScore
  }
  else{
    //resets score and clicked array
    newScore=0
    newArray=[]
    
  }
  this.setState(
      {
         score:newScore,
         topScore:topScore,
         list:this.sort(),
         clicked:newArray
         
      }
    )
}



  render() {
    return (
    <Container>
         <Navbar score={this.state.score} topScore={this.state.topScore}/>
         <Holder>
         {this.state.list.map(element=>(
          <Card
          key={element.id}
          id={element.id}
          img={element.image}
          click={this.click}
          />     
      ))}
         </Holder>
     </Container>
    );
  }
}

export default App;
