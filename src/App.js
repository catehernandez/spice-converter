import React from 'react';
import { ConversionRatios } from './SpiceConfig';

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

  render() {
    return (
      <main>
        <input
          name="wholeUnits"
          type="number"
          onChange={this.convertToGround}
          value={this.state.wholeUnits}
        />
        <select value={this.state.selectedSpice} onChange={this.selectSpice}>
          <option value="allspice">berries</option>
          <option value="blackPepper">peppercorns</option>
          <option value="cardamom">pods</option>
        </select>
        <input
          name="groundUnits"
          type="number"
          onChange={this.convertToWhole}
          value={this.state.groundUnits}
        />
      </main>
    );
  }
}

export default App;
