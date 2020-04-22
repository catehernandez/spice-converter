import React from 'react';
import Select from 'react-select';
import customSelectStyles from 'shared/CustomSelectStyles';

import { Spices, WholeUnits, ConversionRatios } from './SpiceConfig';

// Styles
import { NumericalInput } from 'shared/StyledInput';
import EqualSign from './EqualSign';
import Container from './Container';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedSpice: '',
      conversionRatio: 0,
      wholeAmount: 0,
      groundAmount: 0,
    };
  }

  selectSpice = (selectedOption) => {
    const selectedSpice = selectedOption.value;
    const conversionRatio = ConversionRatios[selectedSpice];
    const groundAmount = this.state.wholeAmount / conversionRatio;

    this.setState({ selectedSpice, conversionRatio, groundAmount });
  };

  convertToGround = (event) => {
    const wholeAmount = event.target.value;
    const groundAmount = wholeAmount / this.state.conversionRatio;

    this.setState({ wholeAmount, groundAmount });
  };

  convertToWhole = (event) => {
    const groundAmount = event.target.value;
    const wholeAmount = groundAmount * this.state.conversionRatio;

    this.setState({ groundAmount, wholeAmount });
  };

  render() {
    const options = Spices.map((spice) => ({
      value: `${spice}`,
      label: `${WholeUnits[spice]}`,
    }));

    return (
      <Container className="spice-converter-container">
        <NumericalInput
          type="number"
          onChange={this.convertToGround}
          value={this.state.wholeAmount}
          step="0.25"
        />
        <br />
        <Select
          styles={customSelectStyles}
          onChange={this.selectSpice}
          options={options}
        ></Select>
        <EqualSign />
        <NumericalInput
          type="number"
          onChange={this.convertToWhole}
          value={this.state.groundAmount}
          step="0.25"
        />
        <div>tsp ground {this.state.selectedSpice}</div>
      </Container>
    );
  }
}

export default App;
