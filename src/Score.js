import React, { Component } from 'react';
import './Score.css';

class Score extends Component {
  render() {
    let date = this.props.match.date;
    let localDate = new Date(date).toLocaleString('en-GB');
    if(this.props.homeTeam === this.props.match.homeTeamName) {
      return (
          <div className="scoreline">
          <div className="date">{localDate}</div>
          <span className="team-status">H</span> {this.props.match.result.goalsHomeTeam} - {this.props.match.result.goalsAwayTeam} <span className="team-status">A</span>
          </div>
      )
    }
    return (
          <div className="scoreline">
            <div className="date">{localDate}</div>
            <span className="team-status">A</span> {this.props.match.result.goalsAwayTeam} - {this.props.match.result.goalsHomeTeam} <span className="team-status">H</span>
          </div>
      )
  }
}
export default Score;
