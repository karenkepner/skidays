import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';

// import * as serviceWorker from './serviceWorker';


let skiData = {
  total: 19,
  powder: 10,
  fatbiking: 20,
  goal: 35
}

// class AddDayButton extends React.Component {
//   handleEvent() {
//     skiData.total++;
//     console.log("Total: ", skiData.total);
//     //need to re-render the data in total. how?
//   }
//   render() {
//     return (<button id="addDayButton" onClick={this.handleEvent}>Record another Ski Day!</button>);
//   }
// }

class SkiDayCounter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      total: props.total,
      powder: props.powder,
      fatbiking: props.fatbiking,
      goal: props.goal
    }
    this.addSkiDay = this.addSkiDay.bind(this);
    this.addPowderDay = this.addPowderDay.bind(this);
    this.addFatDay = this.addFatDay.bind(this);
  }
  getPercent = decimal => {
    return Math.round(decimal * 100) + '%'
  }
  calcGoalProgress = (total, goal) => {
    return this.getPercent(total/goal)
  }
  addSkiDay() {
    this.setState({total: this.state.total + 1});
  }
  addPowderDay() {
    this.setState({powder: this.state.powder + 1});
    this.setState({total: this.state.total + 1});
  }
  addFatDay() {
    this.setState({fatbiking: this.state.fatbiking + 1})
  }
  render() {
    return (
      <section>
        <h1>Ski Day Counter</h1>
        <div>
          <p>Total Days: {this.state.total}</p>
        </div>
        <div>
          <p>Powder Days: {this.state.powder}</p>
        </div>
        <div>
          <p>Fatbike Days: {this.state.fatbiking}</p>
        </div>
        <div>
          <p>Goal: {this.state.goal}</p>
        </div>
        <div>
          <p>Goal Progress: {this.calcGoalProgress(this.state.total, this.state.goal)}</p>
        </div>
        <button id="addSki" onClick={this.addSkiDay}>Record another Ski Day!</button>
        <button id="addPowder" onClick={this.addPowderDay}>Record another Powder Day!</button>
        <button id="addFat" onClick={this.addFatDay}>Record another Fatbike Day!</button>
        <button id="updateGoal" onClick={this.handleEvent}>Update your season goal.</button>
      </section>
    )
  }
}


ReactDOM.render(
  <SkiDayCounter 
    total={skiData.total}
    powder={skiData.powder}
    fatbiking={skiData.fatbiking}
    goal={skiData.goal}/>,
  document.getElementById('root')
)






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
