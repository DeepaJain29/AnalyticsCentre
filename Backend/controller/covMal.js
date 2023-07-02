const db = require("../db/db");

// COVID+ MALIGNANCY+

// 1
// SELECT gender, COUNT(*) AS count FROM  project1.patientdata WHERE gender IN ('M', 'F', 'T') AND underlying_medical_condition LIKE '%malignancy%' GROUP BY gender;
// SELECT gender, COUNT(*) AS count FROM  project1.patientdata WHERE gender IN ("M", "F", "T") GROUP BY gender;
// http://localhost:4200/get/Gender/All/count/Correct
// count of only correct gender from " project1.patientdata" excluding 'N', "", '2'
exports.getGenderAllcountCorrect = async (req, res) => {
    try {

        // const SQLQuery = 'SELECT gender, COUNT(*) AS count FROM  project1.patientdata WHERE gender NOT IN ("N", "2", "") GROUP BY gender;';
        // const SQLQuery = 'SELECT gender, COUNT(*) AS count FROM  project1.patientdata WHERE gender IN ("M", "F", "T") GROUP BY gender;';
        const SQLQuery = "SELECT gender, COUNT(*) AS count FROM covid_pos.malignance WHERE gender IN ('M', 'F', 'T') GROUP BY gender;";
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


//covid+ MALIGNANCY+ QUERY STARTS HERE

// 2
// http://localhost:4200/get/MedicalCondition/All/Malignancy/Count
exports.getMedicalConditionAllMalignancyCount = async (req, res) => {
    try {
        const SQLQuery = "SELECT COUNT(*) AS condition_count FROM covid_pos.malignance;";
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




// 3
// http://localhost:4200/get/MedicalCondition/Only/Malignancy/Data/Count
// ALL feilds "count" having "only Malignancy" (sara data "count" "only Malignancy" wala )
exports.getMedicalConditionOnlyMalignancyDataCount = async (req, res) => {
    try {
        const SQLQuery = 'SELECT COUNT(*) FROM covid_pos.malignance WHERE underlying_medical_condition = "Malignancy";';

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



// DISTRICT QUERY STARTS HERE

// 4
// SELECT COUNT(*) AS count, district_residence FROM project1.patientdata WHERE (underlying_medical_condition LIKE '%Malignancy%' OR underlying_medical_condition LIKE '%Cancer%' OR underlying_medical_condition LIKE '%Chemo%') AND state_residence = 'Telangana' GROUP BY district_residence;
// http://localhost:4200/get/Malignant/Count/State/Delhi
// correct gender count in a particular state in the table "patientdata" covid+ malig+
exports.getMalignantCountStateResidence = async (req, res) => {
    try {
        const stateResidence = req.params.state_residence;
        const SQLQuery = "SELECT COUNT(*) AS count, district_residence FROM covid_pos.malignance WHERE state_residence = ? GROUP BY district_residence;";
        db.query(SQLQuery, [stateResidence], (err, result) => {
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

// 5
// http://localhost:4200/get/MedicalCondition/All/Malignancy/Count/State/Delhi
// covid+ malig+
exports.getMedicalConditionAllMalignancyCountStateResidence = async (req, res) => {
    try {
        const stateResidence = req.params.state_residence;
        const SQLQuery = "SELECT COUNT(*) AS count, state_residence FROM covid_pos.malignance WHERE state_residence = ? GROUP BY state_residence;";
        
        db.query(SQLQuery, [stateResidence], (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred' });
            }
            return res.send(result);
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


// 6
// SELECT state_residence, COUNT(*) AS malignancy_count FROM  project1.patientdata WHERE underlying_medical_condition = 'Malignancy' GROUP BY state_residence;
// http://localhost:4200/get/MedicalCondition/All/Malignancy/Count/State
// gives the count of malignancy in states covid+, malig+
exports.getMedicalConditionAllMalignancyCountState = async (req, res) => {
    try {
        // const SQLQuery = "SELECT state_residence, COUNT(*) AS malignancy_count FROM project1.patientdata WHERE underlying_medical_condition IN ('Malignancy', 'Cancer', 'Chemo') GROUP BY state_residence;";
        const SQLQuery = "SELECT state_residence, COUNT(*) AS malignancy_count FROM covid_pos.malignance GROUP BY state_residence;";
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
 
// AGE QUERY STARTS HERE covid+ malig+

// 7
// http://localhost:4200/get/Age
// All AGE in the table " project1.patientdata"
exports.getAge = async (req, res) => {
    try {

        const SQLQuery = 'select distinct(age) from covid_pos.malignance;';
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

// 8
// SELECT age_range, COUNT(*) AS count FROM (SELECT CASE WHEN age BETWEEN 1 AND 18 THEN '1-18' WHEN age BETWEEN 19 AND 40 THEN '19-40' WHEN age BETWEEN 41 AND 60 THEN '41-60' WHEN age BETWEEN 61 AND 100 THEN '61-100' WHEN age > 100 THEN CONCAT(FLOOR(age / 365), ' years ', MOD(age, 365) DIV 30, ' months ', MOD(age, 30), ' days') END AS age_range, age FROM project1.patientdata WHERE (underlying_medical_condition LIKE '%Malignancy%' OR underlying_medical_condition LIKE '%Cancer%' OR underlying_medical_condition LIKE '%Chemo%') AND age <= 100 AND age IS NOT NULL AND age <> '' AND state_residence = 'Delhi') subquery GROUP BY age_range ORDER BY age_range;
// http://localhost:4200/get/Age/Range/Malignancy/State/Delhi
// correct gender count in a particular state in the table "patientdata"
exports.getAgeRangeMalignancyState = async (req, res) => {
    try {
        const stateResidence = req.params.state_residence;
        const SQLQuery = "SELECT age_range, COUNT(*) AS count FROM (SELECT CASE WHEN age BETWEEN 1 AND 18 THEN '1-18' WHEN age BETWEEN 19 AND 40 THEN '19-40' WHEN age BETWEEN 41 AND 60 THEN '41-60' WHEN age BETWEEN 61 AND 100 THEN '61-100' WHEN age > 100 THEN CONCAT(FLOOR(age / 365), ' years ', MOD(age, 365) DIV 30, ' months ', MOD(age, 30), ' days') END AS age_range, age FROM covid_pos.malignance WHERE age <= 100 AND age IS NOT NULL AND age <> '' AND state_residence = ?) subquery GROUP BY age_range ORDER BY age_range;";
        db.query(SQLQuery, [stateResidence], (err, result) => {
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

// 9
// http://localhost:4200/get/Age/Range/Malignancy
// SQL query to get count the number of age data (present in the "age" column) in a range of every 10  who are malignant (present in column "underlying_medical _condition") in project1.patientdata table. (if age goes above 100 convert it into months and days and then embed in query) excluding unknown values--   project1.patientdata"
exports.getAgeRangeMalignancy = async (req, res) => {
    try {
        const SQLQuery = "SELECT age_range, COUNT(*) AS count FROM (SELECT CASE WHEN age BETWEEN 1 AND 18 THEN '1-18'  WHEN age BETWEEN 19 AND 40 THEN '19-40' WHEN age BETWEEN 41 AND 60 THEN '41-60' WHEN age BETWEEN 61 AND 100 THEN '61-100' WHEN age > 100 THEN CONCAT(FLOOR(age / 365), ' years ', MOD(age, 365) DIV 30, ' months ', MOD(age, 30), ' days') END AS age_range, age FROM covid_pos.malignance WHERE age <= 100 AND age IS NOT NULL AND age <> '') subquery GROUP BY age_range ORDER BY age_range;";
        // const SQLQuery = "SELECT age_range, COUNT(*) AS count FROM ( SELECT CASE WHEN age BETWEEN 1 AND 18 THEN '1-18' WHEN age BETWEEN 19 AND 40 THEN '19-40' WHEN age BETWEEN 41 AND 60 THEN '41-60' WHEN age BETWEEN 61 AND 100 THEN '61-100' WHEN age > 100 THEN CONCAT(FLOOR(age / 365), ' years ', MOD(age, 365) DIV 30, ' months ', MOD(age, 30), ' days') END AS age_range, age FROM project1.patientdata WHERE underlying_medical_condition = 'Malignancy' AND age <= 100 AND age IS NOT NULL) subquery GROUP BY age_range ORDER BY age_range;";
        db.query(SQLQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ message: 'An error occurred', error: err });
            }
            return res.send(result);
        })
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// 10
// SELECT gender, COUNT(*) AS count FROM project1.patientdata WHERE gender IN ('M', 'F', 'T') AND (underlying_medical_condition LIKE '%malignancy%' OR underlying_medical_condition LIKE '%Cancer%' OR underlying_medical_condition LIKE '%Chemo%') AND state_residence = 'Delhi' GROUP BY gender;
// http://localhost:4200/get/Gender/Count/State/Delhi
// correct gender count in a particular state in the table "patientdata"
exports.getGenderCountStateResidence = async (req, res) => {
    try {
        const stateResidence = req.params.state_residence;
        const SQLQuery = "SELECT gender, COUNT(*) AS count FROM covid_pos.malignance WHERE gender IN ('M', 'F', 'T') AND state_residence = ? GROUP BY gender;";
        db.query(SQLQuery, [stateResidence], (err, result) => {
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

