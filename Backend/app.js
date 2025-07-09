const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const fs = require('fs');
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes'); 
const mapsRoutes = require('./routes/maps.routes')
const rideRoutes = require('./routes/ride.routes')

connectToDb();
const frontendPath = path.join(__dirname, './Frontend/dist');

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

app.get('*', (req, res) => {
  const indexPath = path.join(frontendPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(500).send('Frontend not built');
  }
});

module.exports = app;