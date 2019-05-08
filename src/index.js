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

class AddDayButton extends React.Component {
  handleEvent() {
    console.log('hippo');
  }
  render() {
    return (<button id="addDayButton" onClick={this.handleEvent}>Record another Ski Day!</button>);
  }
}

class SkiDayCounter extends React.Component {
  getPercent = decimal => {
    return Math.round(decimal * 100) + '%'
  }
  calcGoalProgress = (total, goal) => {
    return this.getPercent(total/goal)
  }

  render() {
    return (
      <section>
        <h1>Ski Day Counter</h1>
        <div>
          <p>Total Days: {this.props.total}</p>
        </div>
        <div>
          <p>Powder Days: {this.props.powder}</p>
        </div>
        <div>
          <p>Fatbike Days: {this.props.fatbiking}</p>
        </div>
        <div>
          <p>Goal Progress: {this.calcGoalProgress(this.props.total, this.props.goal)}</p>
        </div>
        <AddDayButton />
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
