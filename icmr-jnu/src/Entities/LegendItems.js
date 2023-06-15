import React from "react";
import LegendItem from "./LegendItem";

const LegendItems = [
    new LegendItem(
      "100,000 +",
      "#c86b85",
      (cases) => cases >= 100000,
      "white"
    ),
    new LegendItem(
      "75,000 - 99,999",
    //   "#8574B0",
    // "#796b9f",
    "#CD7991",
      (cases) => cases >= 75000 && cases < 100000,
      "white"
    ),
    new LegendItem(
      "50,000 - 74,999",
      // "#887baa",
    //   "#A08DCB",
    "#D3889D",
      (cases) => cases >= 50000 && cases < 75000,
      "white",
    ),
    new LegendItem(
      "25,000 - 49,999",
      // "#978cb4",
    //   "#BBA8E8",
    "#D897A9",
      (cases) => cases >= 25000 && cases < 50000,
      "white",
    ),
    new LegendItem(
      "10,000 - 24,999",
      // "#a69cbf",
    //   "#D7C3FF",
    "#DEA6B5",
      (cases) => cases >= 10000 && cases < 25000,
      "black"
    ),
    new LegendItem(
      "1,000 - 9,999",
      // "#b5adca",
    //   "#ecdefc",
    "#E3B5C1",
      (cases) => cases >= 1000 && cases < 10000,
      "black",
    ),
    new LegendItem(
      "50 - 999",
      "#E9C3CE",
    //   "#c3bdd4",
    //   "#d64161",
      (cases) => cases >= 50 && cases < 1000,
      "black",
    ),
    new LegendItem(
        "0 - 999",
        // "#d7c3ff",
        // "#d2cddf",
        // "#8574B0",
        // "#c8bce8",
        // "#aba0c5",
        // "#ddd5f3",
        "#EED2DA",
        // "rgba(255,204,112,0.37) 97.7% ",
        (cases) => cases >= 0 && cases < 49,
        "black",
      ),
  ];
  

export default LegendItems;
// #F4DFFF
// #8574B0
// #240747
// #350a68
// #450d89
// #5611a9
// #6614ca
// #771ae8
// #8b3aec
// #9e5bef
// #b17cf2
// #c59df5
// #d8bdf9
// #ecdefc

// background-image: linear-gradient( 58.2deg,  rgba(40,91,212,0.73) -3%, rgba(171,53,163,0.45) 49.3%, rgba(255,204,112,0.37) 97.7% );