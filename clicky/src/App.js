import React from 'react';
import Navbar from "./components/nav/navbars";
import Card from "./components/card/card";
import Holder from "./components/card_holder/index"
import lotr from "./cards.json"
import Container from "./components/container/index"
import './App.css';
class App extends React.Component {
state={
  score:0,
  topScore:0,
  list:lotr,
  clicked:[]
}  

sort=()=>{
  console.log("sorting")
    let sortedArray=this.state.list
    sortedArray.sort((a,b)=>Math.random()*5)
    console.log(`old ${this.state.list}`)
    this.setState({
      list:sortedArray
    })
    console.log(`new ${this.state.list}`)

}
click=(id)=>{
 
const clicked=this.state.clicked.filter(list=>list.id===id)//checks if obj is in clicked array 
let newScore
let newArray=this.state.clicked
let topScore=this.state.topScore;
//clicked obj is in the clicked array
  if(clicked[0]===undefined){
    console.log("not clicked")
    //when the  clicked is null its not in the clicked array
    let newClicked=this.state.list.filter(list=>list.id===id)
    newArray.push(newClicked[0])
    //push clicked obj to clicked array
      newScore=this.state.score+1
      //increment the score by 1
   topScore=(newScore>topScore)?newScore:topScore
     
  }

  else{
    console.log("clicked")
    newScore=0
    newArray=[]
    
  }
 
  this.sort()
  console.log(topScore)
  console.log(newArray)
  this.setState(
      {
         score:newScore,
         topScore:topScore,
         clicked:newArray
         
      }
    )

    console.log(this.state.clicked)

}



  render() {
    return (
    <Container>
    
      {/* <h1>Hello</h1> */}
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
