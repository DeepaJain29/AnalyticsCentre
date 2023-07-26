// SQL QUERY FOR ONLY COVID positive
// DATABASE 2- covid_pos

const db2 = require("../db/db2");


// GENDER - LINE CHART
// http://localhost:4200/Gender/All/count/Covid/Pos
// count of only correct gender from " project1.patientdata" excluding 'N', "", '2'
exports.GenderAllcountCovidPos = async (req, res) => {
    try {
        // const SQLQuery = 'SELECT gender, COUNT(*) AS count FROM  project1.patientdata WHERE gender NOT IN ("N", "2", "") GROUP BY gender;';
        // const SQLQuery = 'SELECT gender, COUNT(*) AS count FROM  project1.patientdata WHERE gender IN ("M", "F", "T") GROUP BY gender;';
        const SQLQuery = "SELECT gender, COUNT(*) AS count, CONCAT(MONTH(entry_date), '-', YEAR(entry_date)) AS month_year FROM (SELECT gender, entry_date FROM covid_pos.NonMalignance UNION ALL SELECT gender, entry_date FROM covid_pos.malignance) AS combined_data WHERE gender IN ('M', 'F', 'T') GROUP BY gender, month_year;";
        db2.query(SQLQuery, (err, result) => {
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

// AGE - PIE CHART
// http://localhost:4200/get/Age/Covid
exports.getAgeCovid = async (req, res) => {
    try {
        const SQLQuery = "SELECT age_range AS Age, COUNT(*) AS Count FROM (SELECT CASE  WHEN age BETWEEN 1 AND 18 THEN '1-18' WHEN age BETWEEN 19 AND 40 THEN '19-40' WHEN age BETWEEN 41 AND 60 THEN '41-60' WHEN age BETWEEN 61 AND 100 THEN '61-100' WHEN age > 100 THEN CONCAT(FLOOR(age / 365), ' years ', MOD(age, 365) DIV 30, ' months ', MOD(age, 30), ' days') END AS age_range FROM (SELECT age FROM covid_pos.NonMalignance UNION ALL SELECT age FROM covid_pos.malignance ) AS combined_data WHERE age <= 100 AND age IS NOT NULL AND age <> '' ) AS subquery GROUP BY age_range ORDER BY age_range;";
        
        db2.query(SQLQuery, (err, result) => {
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


// CARD - COUNT
// SELECT (SELECT COUNT(*) FROM covid_pos.NonMalignance) + (SELECT COUNT(*) FROM covid_pos.Malignance) AS count;
// http://localhost:4200/get/Count/Cov/Pos
exports.getCountCovPos = async (req, res) => {
    try {
        const SQLQuery = "SELECT (SELECT COUNT(*) FROM covid_pos.NonMalignance) + (SELECT COUNT(*) FROM covid_pos.Malignance) AS count;";
        db2.query(SQLQuery, (err, result) => {
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