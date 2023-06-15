const { application } = require('express');
const axios = require('axios');
const express = require('express');
const router=express.Router(); 


const {

    // GENERAL API
    getCount,
    getDescribeTable,
    getMedicalConditionAllMalignancyCountState,

    // MALIGNNACY API
    getMedicalConditionAllMalignancyCount, 
    getMedicalConditionAllMalignancyData,
    getMedicalConditionOnlyMalignancyDataCount,
    getMedicalConditionOnlyMalignancyData,
    getMedicalConditionAllMalignancyFeilds,
    getMedicalCondition,

    // AGE API
    getAge, 
    getAgeRangeMalignancy,
    getAgeRangeMalignancyState,

    // GENDER APIs
    getGender,
    getGenderAllCount,
    getGenderAllcountCorrect,
    getGenderMCount,
    getGenderFCount,
    getGenderNcount,
    getGenderNoCount,
    getGenderTCount,
    getGender2Count,
    getGenderCountStateResidence,


    // ABOUT COVID DATA (WITHOUT TRUENAT)


    getCountCovidPositive,
    getCountCovidNegative,
    getCountCovidMalignancy,
    getCountCovidNegativeMalignancy,
    getCountCovidMalignancyNegative,
    getCountCovidNegativeMalignancyNegative,


    // STATE API
    getMedicalConditionAllMalignancyCountStateDistrict,
    getMedicalConditionAllMalignancyCountStateResidence,
    getMalignantCountStateResidence
    


} = require ('../controller/controller') 


// GENERAL API
router.get("/getCount",getCount);
router.get("/get/Describe/Table",getDescribeTable);
router.get("/get/MedicalCondition/All/Malignancy/Count/State", getMedicalConditionAllMalignancyCountState),


// MALIGNANCY API
router.get("/get/MedicalCondition/All/Malignancy/Count",getMedicalConditionAllMalignancyCount);
router.get("/get/MedicalCondition/All/Malignancy/Data",getMedicalConditionAllMalignancyData);
router.get("/get/MedicalCondition/Only/Malignancy/Data/Count",getMedicalConditionOnlyMalignancyDataCount);
router.get("/get/MedicalCondition/Only/Malignancy/Data",getMedicalConditionOnlyMalignancyData);
router.get("/get/MedicalCondition/All/Malignancy/Feilds",getMedicalConditionAllMalignancyFeilds);
router.get("/get/MedicalCondition",getMedicalCondition);



// AGE API
router.get("/get/Age",getAge);
router.get("/get/Age/Range/Malignancy", getAgeRangeMalignancy);
router.get("/get/Age/Range/Malignancy/State/:state_residence",getAgeRangeMalignancyState);


// GENDER APIs
router.get("/get/Gender/2/Count",getGender2Count);
router.get("/get/Gender/T/Count",getGenderTCount);
router.get("/get/Gender/No/Count",getGenderNoCount);
router.get("/get/Gender/N/count",getGenderNcount);
router.get("/get/Gender/F/Count",getGenderFCount);
router.get("/get/Gender/M/Count",getGenderMCount);
router.get("/get/Gender/All/count/Correct",getGenderAllcountCorrect);
router.get("/get/Gender/All/Count",getGenderAllCount);
router.get("/get/Gender",getGender);
router.get("/get/Gender/Count/State/:state_residence",getGenderCountStateResidence);

// STATE API
router.get("/get/MedicalCondition/All/Malignancy/Count/State/District", getMedicalConditionAllMalignancyCountStateDistrict);
router.get("/get/MedicalCondition/All/Malignancy/Count/State/:state_residence", getMedicalConditionAllMalignancyCountStateResidence);
// DISTRICT API
router.get("/get/Malignant/Count/State/:state_residence", getMalignantCountStateResidence);
// router.get('/get/MedicalCondition/All/Malignancy/Count/State/:state_residence', getMedicalConditionAllMalignancyCountStateResidence);


// ABOUT COVID DATA(WITHOUT TRUENAT)
router.get("/get/Count/covid/positive", getCountCovidPositive);
router.get("/get/Count/covid/negative", getCountCovidNegative);
router.get("/get/Count/covid/Malignancy", getCountCovidMalignancy)
router.get("/get/Count/covid/Negative/Malignancy",getCountCovidNegativeMalignancy);
router.get("/get/Count/covid/Malignancy/Negative",getCountCovidMalignancyNegative);
router.get("/get/Count/covid/Negative/Malignancy/Negative",getCountCovidNegativeMalignancyNegative);


module.exports=router