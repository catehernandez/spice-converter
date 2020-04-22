//whole to ground conversion ratio
const SpiceConfig = {
  allspice: {
    conversionRatio: 1,
    wholeUnits: 'tsp allspice berries',
  },
  blackPepper: {
    conversionRatio: 1 / 1.5,
    wholeUnits: 'tsp black peppercorns',
  },
  cardamom: {
    conversionRatio: 12 / 1,
    wholeUnits: 'cardamom pods, dehusked',
  },
  cinnamon: {
    conversionRatio: 1,
    wholeUnits: '1.5 inch cinnamon stick',
  },
  cloves: {
    conversionRatio: 1 / 0.75,
    wholeUnits: 'tsp cloves',
  },
  coriander: {
    conversionRatio: 1 / 1.25,
    wholeUnits: 'tsp coriander seeds',
  },
  cumin: {
    conversionRatio: 1 / 1.25,
    wholeUnits: 'tsp cumin seeds',
  },
  fennel: {
    conversionRatio: 1 / 1.25,
    wholeUnits: 'tsp fennel seeds',
  },
  nutmeg: {
    conversionRatio: 1 / 2,
    wholeUnits: 'nutmeg',
  },
  mustard: {
    conversionRatio: 1 / 1.5,
    wholeUnits: 'tsp mustard seeds',
  },
};

const Spices = Object.keys(SpiceConfig);

const WholeUnits = Object.fromEntries(
  Spices.map((spice) => [spice, SpiceConfig[spice].wholeUnits])
);

const ConversionRatios = Object.fromEntries(
  Spices.map((spice) => [spice, SpiceConfig[spice].conversionRatio])
);

export { Spices, ConversionRatios, WholeUnits };
