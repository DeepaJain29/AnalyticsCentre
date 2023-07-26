const userRoutes = require('./routes/routes')
const express = require('express');
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors({
  origin: "*",
  credentials: true,
}))
const db1= require('./db/db1');
const db2 = require('./db/db2');
const db3 = require('./db/db3')

// Connection starts Here
db1.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL database 1:', error);
  } else {
    console.log('Connected to MySQL database 1!');
  }
});

db2.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL database 2:', error);
  } else {
    console.log('Connected to MySQL database 2!');
  }
});

db3.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL database 3:', error);
  } else {
    console.log('Connected to MySQL database 3!');
  }
});


app.use("/", userRoutes)
// db.end();


// Listening to the port 4200
app.listen(4200, () => {
  console.log("server connected on port " + 4200);
}
);

