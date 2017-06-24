import React, { Component } from 'react';
import './Pane.css';

class Pane extends Component {
	getStats(team) {
		let standings = this.props.leagueStandings.standing;
		for (let x in standings) {
			if (standings[x].teamName === team) {
				return standings[x];	
			}
		}	
	}

  render() {
		let stats = this.getStats(this.props.team.name);
		if(stats && stats.position) {
			return (
        <div>
	        <div className="row row-centered">
						<div className="team-name">
							{this.props.team.name}
						</div>
						<div className="container">	        
							<img className="resize_fit_center" src={this.props.team.crestUrl} alt={this.props.team.name} />
						</div>
						<div className="info-box">
							<div>Position: {stats.position}</div>
							<div>Points: {stats.points}</div>
							<div>Win/Draw/Loss: {stats.wins}/{stats.draws}/{stats.losses}</div>
							<div>Goals For/Against: {stats.goals}/{stats.goalsAgainst}</div>
							<div>Goal Difference: {stats.goalDifference}</div>
	        	</div>
	        </div>
	    </div>
   		);
		} else {
			return (
        <div>
	        <div className="row row-centered">
						<div className="team-name">
							{this.props.team.name}
						</div>
						<div className="container">	        
							<img className="resize_fit_center" src={this.props.team.crestUrl} alt={this.props.team.name} />
						</div>
						<div className="info-box">
	        	</div>
	        </div>
	    </div>
    );
		}
  }
}
export default Pane;
