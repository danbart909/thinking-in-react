import React, { Component } from 'react'

export default class Cart extends Component {
	render() {
		return Object.keys(this.props.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.props.selected[feature];
      return (
        <div className="summary__option" key={featureHash}>
          <div className="summary__option__label">{feature} </div>
          <div className="summary__option__value">{selectedOption.name}</div>
          <div className="summary__option__cost">
            {this.props.format.format(selectedOption.cost)}
          </div>
        </div>
      );
    });
	}
}