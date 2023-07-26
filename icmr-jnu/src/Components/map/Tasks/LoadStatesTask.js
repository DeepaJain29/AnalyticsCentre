// import React from "react";
// import papa from 'papaparse';
// import features from "../Data/statesIndia.json" 
// import statesIndia from '../Data/statesIndia.json';
// // const appfeatures = require('../Data/statesIndia.json').features;
// import LegendItems from "../Entities/LegendItems";
// import { map } from "leaflet";

// const appfeatures = require('../Data/statesIndia.json').features;


// class LoadStatesTask {

//     Covid19DataUrl = "http://localhost:4200/get/MedicalCondition/All/Malignancy/Count/State";



//     setState = null;
//     mapStates = statesIndia.features;

//     load = (setState)=> {
//         this.setState = setState;

//         papa.parse(this.Covid19DataUrl, {
//             download: true,
//             header:true,
//             complete:(result)=> {
//             const excludedRow = 0; // Replace 2 with the index of the row you want to exclude
//             const filteredData = result.data.filter((_, index) => index !== excludedRow);

//             console.log("data for map of india",filteredData);
//                 this.#processCovid19Data(filteredData);
//             }
//         });



//     }
//     #processCovid19Data = (CovidStates) => {
//         for (let i = 0; i < this.mapStates.length; i++) {
//             const mapstate = this.mapStates[i];
//             const covidstate = CovidStates.find((covidstate)=>covidstate.State === mapstate.properties.st_nm);
//             // console.log(covidstate.State);
//             // console.log(mapstate.properties.st_nm)
//             // console.log(covidstate);
//             // console.log(mapstate);
//             mapstate.properties.confirmed = 0;
//             mapstate.properties.confirmedText = "0";

//             if(covidstate != null){
//                 const confirmed = isNaN(covidstate.Confirmed) ? 0 : Number(covidstate.Confirmed); 
//                 mapstate.properties.Confirmed = confirmed;
//                 mapstate.properties.confirmedText = this.#formatNumberWithCommas(confirmed);
//                 mapstate.properties.confirmedText = (confirmed);
//                 // console.log(covidstate["Confirmed"]);
//                 // console.log(covidstate.Confirmed);
//             }

//             this.#setStateColor(mapstate);

//         }
//         this.setState(this.mapStates)

//     };

//     #setStateColor = (mapstate) => {
//         const LegendItem = LegendItems.find((LegendItem)=>
//         LegendItem.isFor(mapstate.properties.Confirmed)
//         );

//         if(LegendItem != null) {
//             mapstate.properties.color = LegendItem.color;
//         }
//     };

//     #formatNumberWithCommas = (number) =>{
//         return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
//     }

//     }



// export default LoadStatesTask;











import stringSimilarity from 'string-similarity';

import features from "../Data/statesIndia.json"
import statesIndia from '../Data/statesIndia.json';

import LegendItems from "../Entities/LegendItems";





class LoadStatesTask {

    Covid19DataUrl = "http://localhost:4200/Map/Cov/Mal/State/Count";



    setState = null;
    mapStates = statesIndia.features;

    load = (setState) => {
        this.setState = setState;

        fetch(this.Covid19DataUrl)
            .then(response => response.json())
            .then(data => {
                const excludedRow = 0; // Replace 2 with the index of the row you want to exclude
                //   const filteredData = data.filter((_, index) => index !== excludedRow);

                console.log("Data for map of India:", data);
                this.#processCovid19Data(data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });



    }
    #processCovid19Data = (CovidStates) => {
        console.log("CovidStates:", CovidStates);
        for (let i = 0; i < this.mapStates.length; i++) {
            const mapstate = this.mapStates[i];
            const covidstate = CovidStates.find(covidstate => {
                const state_residence = covidstate?.state_residence || '';
                // Compare the similarity of state_residence and mapstate.properties.st_nm
                const similarity = stringSimilarity.compareTwoStrings(state_residence.toLowerCase(), mapstate.properties.st_nm.toLowerCase());
                // return String(state_residence).toLowerCase() === String(mapstate.properties.st_nm).toLowerCase();
                return similarity >= 0.6; // Set a threshold for similarity comparison
            });
            //         console.log("mapstate.properties.st_nm:", mapstate.properties.st_nm);
            // console.log("covidstate:", covidstate);
            // console.log(mapstate.properties.st_nm)
            // console.log(covidstate);
            // console.log(mapstate);
            //         console.log("mapstate.properties.st_nm:", mapstate.properties.st_nm);
            //   console.log("covidstate:", covidstate);
            if (covidstate) {
                // console.log("mapstate.properties.st_nm:", mapstate.properties.st_nm);
                // console.log("CovidStates[i].state_residence:", CovidStates[i].state_residence);
                console.log("covidstate:", covidstate);


                const confirmed = isNaN(covidstate.malignancy_count) ? 0 : Number(covidstate.malignancy_count);
                mapstate.properties.Confirmed = confirmed;
                mapstate.properties.confirmedText = this.#formatNumberWithCommas(confirmed);
                // mapstate.properties.confirmedText = (confirmed);
                // console.log(covidstate["Confirmed"]);
                // console.log(covidstate.Confirmed);
                // this.#setStateColor(mapstate);
                this.#setStateColor(mapstate, confirmed);
            } else {
                console.log("No covidstate found for", mapstate.properties.st_nm);
                mapstate.properties.confirmed = 0;
                mapstate.properties.confirmedText = "0";
                this.#setStateColor(mapstate, 0);
            }
            






        }
        this.setState(this.mapStates)

    };

    #setStateColor = (mapstate) => {
        const LegendItem = LegendItems.find((LegendItem) =>
            LegendItem.isFor(mapstate.properties.Confirmed)
        );

        if (LegendItem != null) {
            mapstate.properties.color = LegendItem.color;
        }else {
            mapstate.properties.color = 'gray';
          }
    };

    #formatNumberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      };

}



export default LoadStatesTask;




