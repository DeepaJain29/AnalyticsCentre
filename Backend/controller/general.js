// const { urlencoded } = require("express");
const db = require("../db/db1");

// GENERAL QUERY STARTS HERE

// SELECT COUNT(*) AS count FROM project1.patientdata WHERE final_test_result = 'Positive' AND (underlying_medical_condition LIKE '%Malignancy%' OR underlying_medical_condition LIKE '%Cancer%' OR underlying_medical_condition LIKE '%Chemo%');
// http://localhost:4200/get/Count/covid/Malignancy
// count of the data where final_rest_result is "positive" and malignant positive. (without TrueNAT)
exports.getCountCovidMalignancy = async (req, res) => {
    try {

        const SQLQuery = "SELECT COUNT(*) AS count FROM project1.patientdata WHERE final_test_result = 'Positive' AND (underlying_medical_condition LIKE '%Malignancy%' OR underlying_medical_condition LIKE '%Cancer%' OR underlying_medical_condition LIKE '%Chemo%');";
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result);
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

// http://localhost:4200/get/MedicalCondition/All/Malignancy/Data
// all the feilds having "all Malignancy"
exports.getMedicalConditionAllMalignancyData = async (req, res) => {
    try {
        const SQLQuery = 'select count(*) from project1.patientdata where underlying_medical_condition in (select distinct(underlying_medical_condition) from project1.patientdata where underlying_medical_condition like "%Malignancy%") AND (final_test_result = "positive" OR final_test_result = "yes");'
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result);
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


// http://localhost:4200/get/Count/covid/Malignancy/Negative
// count of the data where final_rest_result is "positive" and malignant negative. (without TrueNAT)
exports.getCountCovidMalignancyNegative = async (req, res) => {
    try {

        const SQLQuery = "SELECT COUNT(*) AS count FROM project1.patientdata WHERE final_test_result = 'Positive' AND not (underlying_medical_condition LIKE '%Malignancy%' OR underlying_medical_condition LIKE '%Cancer%' OR underlying_medical_condition LIKE '%Chemo%');";
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result);
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


// http://localhost:4200/get/Count/covid/Negative/Malignancy
// count of the data where final_rest_result is "negative" and malignant positive. (without TrueNAT)
exports.getCountCovidNegativeMalignancy = async (req, res) => {
    try {

        const SQLQuery = "SELECT COUNT(*) AS count FROM project1.patientdata WHERE final_test_result != 'Positive' AND (underlying_medical_condition LIKE '%Malignancy%' OR underlying_medical_condition LIKE '%Cancer%' OR underlying_medical_condition LIKE '%Chemo%');";
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result);
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


// http://localhost:4200/get/Count/covid/Negative/Malignancy/Negative
// count of the data where final_rest_result is "negative" and malignant negative. (without TrueNAT)
exports.getCountCovidNegativeMalignancyNegative = async (req, res) => {
    try {

        const SQLQuery = "SELECT COUNT(*) AS count FROM project1.patientdata WHERE final_test_result != 'Positive' AND not (underlying_medical_condition LIKE '%Malignancy%' OR underlying_medical_condition LIKE '%Cancer%' OR underlying_medical_condition LIKE '%Chemo%');";
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result);
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


// // GENDER TABLE QUERY


// http://localhost:4200/get/Gender/M/Count
// only gender "M" in the table "patientdata"
exports.getGenderMCount = async (req, res) => {
    try {

        const SQLQuery = `select count(*) as 'M-Count' from project1.patientdata where gender = "M"  AND (final_test_result = 'positive' OR final_test_result = 'yes');`;
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result);
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


// http://localhost:4200/get/Gender/F/Count
// only gender "F" in the table "patientdata"
exports.getGenderFCount = async (req, res) => {
    try {

        const SQLQuery = `select count(*) as 'F-Count' from project1.patientdata where gender = "F"  AND (final_test_result = 'positive' OR final_test_result = 'yes');`;        ;
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result);
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
};




// http://localhost:4200/get/Gender/N/count
// only gender "N" in the table "patientdata"
exports.getGenderNcount = async (req, res) => {
    try {

        const SQLQuery = 'select count(*) from project1.patientdata where gender = "N";';
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result);
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


// http://localhost:4200/get/Gender/No/Count
// only gender " " in the table "patientdata"
exports.getGenderNoCount = async (req, res) => {
    try {

        const SQLQuery = 'select count(*) from project1.patientdata where gender = "";';
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result);
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


// http://localhost:4200/get/Gender/T/Count
// only gender "T" in the table "patientdata"
exports.getGenderTCount = async (req, res) => {
    try {

        const SQLQuery = 'select count(*) from project1.patientdata where gender = "T";';
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result);
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


// http://localhost:4200/get/Gender/2/Count
// only gender "2" in the table "patientdata"
exports.getGender2Count = async (req, res) => {
    try {

        const SQLQuery = 'select count(*) from project1.patientdata where gender = "2";';
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result);
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
};





// http://localhost:4200/getCount
// All rows count in the table "patientdata" or get all count of the data 


// http://localhost:4200/get/Count/covid/positive
// count of the data where final_rest_result is "positive". (without TrueNAT)
exports.getCountCovidPositive = async (req, res) => {
    try {

        const SQLQuery = 'select count(*) from project1.patientdata where final_test_result="Positive";';
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result);
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


// http://localhost:4200/get/Count/covid/negative
// count of the data where final_rest_result is "positive". (without TrueNAT)
exports.getCountCovidNegative = async (req, res) => {
    try {

        const SQLQuery = "SELECT COUNT(*) AS count FROM project1.patientdata WHERE final_test_result != 'Positive';";
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result);
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


// http://localhost:4200/get/Gender
// All gender in the table "patientdata"
exports.getGender = async (req, res) => {
    try {

        const SQLQuery = 'select distinct(gender) from project1.patientdata;';
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result);
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
};



// http://localhost:4200/get/Gender/All/Count
// count of all gender from " project1.patientdata" 
exports.getGenderAllCount = async (req, res) => {
    try {
        console.log('i am in controller')
        const SQLQuery = 'SELECT gender, COUNT(*) AS count FROM  project1.patientdata GROUP BY gender;';
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result);
        })
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// http://localhost:4200/getCount
// All rows count in the table "patientdata"
exports.getCount = async (req, res) => {
    try {

        const SQLQuery = 'SELECT COUNT(*) FROM project1.patientdata';
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result);
        })
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

// http://localhost:4200/get/MedicalCondition/Only/Malignancy/Data
// ALL feilds having "only Malignancy" (sara data "only Malignancy" wala )
exports.getMedicalConditionOnlyMalignancyData = async (req, res) => {
    try {
        const SQLQuery = 'select * from project1.patientdata where underlying_medical_condition in (select distinct(underlying_medical_condition) from project1.patientdata where underlying_medical_condition = "Malignancy")  AND (final_test_result = "positive" OR final_test_result = "yes");';

        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result);
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


// http://localhost:4200/get/MedicalCondition/All/Malignancy/Feilds
// ALL THE COLUMN FEILDS HAVING "MALIGNANCY" as word (jo bhi column mei malignancy jaisa word h, wo sb "column" aare h)
exports.getMedicalConditionAllMalignancyFeilds = async (req, res) => {
    try {
        const SQLQuery = 'select distinct(underlying_medical_condition) from project1.patientdata where underlying_medical_condition like "%Malignancy%"  AND (final_test_result = "positive" OR final_test_result = "yes");';
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result);
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


// http://localhost:4200/get/MedicalCondition
// ALL Entries of medical conditions
exports.getMedicalCondition = async (req, res) => {
    try {
        const SQLQuery = `select distinct(underlying_medical_condition) from project1.patientdata ;`;
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result);
        })
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


// http://localhost:4200/get/Describe/Table
// Describe table "patientdata" data-types according to MySQL documentation
exports.getDescribeTable = async (req, res) => {
    try {

        const SQLQuery = 'DESCRIBE project1.patientdata';
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result);
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


// http://localhost:4200/get/MedicalCondition/All/Malignancy/Count/State/District
// gives the count of malignancy in states 
// covid+ malig+
exports.getMedicalConditionAllMalignancyCountStateDistrict = async (req, res) => {
    try {
        const SQLQuery = "SELECT COUNT(*) AS count, district_residence FROM project1.patientdata WHERE (underlying_medical_condition LIKE '%Malignancy%' OR underlying_medical_condition LIKE '%cancer%' OR underlying_medical_condition LIKE '%chemo%') AND state_residence = 'Delhi'AND (final_test_result like 'positive' or 'yes') GROUP BY district_residence;";
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred', error: err });
            }
            return res.send(result);
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
};






// // http://localhost:4200/get/MedicalCondition/All/Malignancy/Count/State/state_residence=
// // gives the count of malignancy in states covid+ malig+
// exports.getMedicalConditionAllMalignancyCountStateResidence = async (req, res) => {
//     try {
//         const SQLQuery = "SELECT COUNT(*) AS count, state_residence FROM patientdata WHERE (underlying_medical_condition LIKE '%Malignancy%' OR underlying_medical_condition LIKE '%Cancer%' OR underlying_medical_condition LIKE '%chemo%') AND state_residence = 'Delhi';";
//         db.query(SQLQuery, (err, result) => {
//             if (err) {
//                 console.error('Error executing query:', err);
//                 return res.status(500).json({ message: 'An error occurred' });
//             }
//             return res.send(result);
//         });
//     }
//     catch (error) {
//         return res.status(500).json({ message: error.message })
//     }
// };



// SELECT CASE
//    WHEN age BETWEEN 1 AND 18 THEN '1-18'
//    WHEN age BETWEEN 19 AND 40 THEN '19-40'
//    WHEN age BETWEEN 41 AND 60 THEN '41-60'
//    WHEN age BETWEEN 61 AND 100 THEN '61-100'
//    WHEN age > 100 THEN CONCAT(FLOOR(age / 365), ' years ', MOD(age, 365) DIV 30, ' months ', MOD(age, 30), ' days')
//  END AS age_range, COUNT(*) AS count FROM project1.patientdata WHERE underlying_medical_condition = 'Malignancy'
//  AND age <= 100 -- Exclude ages greater than 100
//  AND age IS NOT NULL -- Exclude NULL age values
// GROUP BY age_range ORDER BY age_range;









// SQL QUERY FOR ONLY MALIGNANCY
