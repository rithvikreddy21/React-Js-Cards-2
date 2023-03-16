import react from 'react';
import './App.css';
import SportCard from './components/SportCard';
import athletesCric from './cricketers.json';
import athletesFoot from './footballers.json';

function App() {

 /*
  const athletesCric = [
    {name: "Sachin Tendulkar", sport:"Cricket",country:"India",age:45},
    {name: "Virat Kohli", sport:"Cricket",country:"India",age:32},
    {name: "Rohit Sharma", sport:"Cricket",country:"India",age:32},
  ];

  const athletesFoot = [
    {name:"Lionel Messi", sport:"Football",country:"Argentina",age:33},
    {name:"Cristiano Ronaldo", sport:"Football",country:"Portugal",age:36},
    {name:"Neymar Jr", sport:"Football",country:"Brazil",age:29},
  ];

  */
  return (
    <div className="mt-5 container">
      <div className="row" >
        <h2 style={{textAlign:"center"}}>Cricket Players</h2>
        {athletesCric.map((athlete) => (
          <div className = "col-3 g-4 rounded-bottom text-primary"> 
            <img src={athlete.image}
              className = "rounded mx-auto d-block"
              alt="picOfAthlete">
            </img>
            <SportCard name={athlete.name} sport={athlete.sport} country={athlete.country} age={athlete.age}/>
          </div>
        ))}
      </div>

      <div className="row">
        <h2  style={{textAlign:"center"}} >Football Players</h2>
        {athletesFoot.map((athlete) => (
          <div className = "col-3 g-4 rounded-bottom text-primary">
            <img src={athlete.image}
              className = "rounded mx-auto d-block"
              alt="picOfAthlete">
            </img>
            <SportCard name={athlete.name} sport={athlete.sport} country={athlete.country} age={athlete.age}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
