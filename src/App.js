import React from 'react';
import { WholeUnits, ConversionRatios } from './SpiceConfig';

import StyledSelect from './components/StyledSelect';
import { NumericalInput } from './components/StyledInput';
import EqualSign from './components/EqualSign';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedSpice: 'allspice',
      conversionRatio: ConversionRatios['allspice'],
      wholeUnits: 0,
      groundUnits: 0,
    };
  }

  selectSpice = (event) => {
    let value = event.target.value;

    this.setState(
      {
        selectedSpice: value,
        conversionRatio: ConversionRatios[value],
        groundUnits: this.state.wholeUnits / ConversionRatios[value],
      },
      () => console.log('ratio', this.state.conversionRatio)
    );
  };

  convertToGround = (event) => {
    let value = event.target.value;

    this.setState({
      wholeUnits: value,
      groundUnits: value / this.state.conversionRatio,
    });
  };

  convertToWhole = (event) => {
    let value = event.target.value;

    this.setState({
      groundUnits: value,
      wholeUnits: value * this.state.conversionRatio,
    });
  };

  renderOptions = () => {
    let spices = Object.keys(WholeUnits);

    const options = spices.map(
      (spice) => (
        <option key={spice} value={spice}>
          {WholeUnits[spice]}
        </option>
      )
      //console.log(WholeUnits[spice])
    );

    return options;
  };

  render() {
    return (
      <main>
        <div>
          <NumericalInput
            type="number"
            onChange={this.convertToGround}
            value={this.state.wholeUnits}
            step="0.25"
          />
          <br />
          <StyledSelect
            value={this.state.selectedSpice}
            onChange={this.selectSpice}
          >
            {this.renderOptions()}
          </StyledSelect>
        </div>
        <EqualSign />
        <div>
          <NumericalInput
            type="number"
            onChange={this.convertToWhole}
            value={this.state.groundUnits}
            step="0.25"
          />
        </div>
        <div>tsp ground {this.state.selectedSpice}</div>
      </main>
    );
  }
}

export default App;
