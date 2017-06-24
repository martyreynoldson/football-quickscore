import React, { Component } from 'react';

class RefreshButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  
  render() {
    return (
        <div>
          Refresh         
        </div>

    )
  }
}
export default RefreshButton;
