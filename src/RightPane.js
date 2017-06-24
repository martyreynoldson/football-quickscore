import React, { Component } from 'react';
import './Pane.css';

class RightPane extends Component {
  render() {
    return (
		<div>
	        <div className="row row-centered">
	        	<div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
			        <div className="team-name">
			        	{this.props.team.name}
			        </div>
					<div className="container">	        
				        <img className="resize_fit_center" src={this.props.team.crestUrl} alt={this.props.team.name} />
			        </div>
	        	</div>
				<div className="info-box col-xs-4 col-sm-4 col-md-4 col-lg-4">
	        		<div>
	        		<b>{this.props.team.name}</b> Statistics
	        		</div>
	        	</div>
	        </div>

	    </div>

    )
  }
}
export default RightPane;
