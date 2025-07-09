const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes'); 
const mapsRoutes = require('./routes/maps.routes')
const rideRoutes = require('./routes/ride.routes')

connectToDb();
const __dirname = path.resolve();

app.use(express.static(frontendPath));


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.get('/', (req, res) => {
    res.send('Hello World!');   
});


app.use('/users', userRoutes);
app.use('/captains', captainRoutes); 
app.use('/maps', mapsRoutes)
app.use('/rides', rideRoutes)

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

module.exports = app;