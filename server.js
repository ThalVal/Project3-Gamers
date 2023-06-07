const express = require('express');
const allRoutes = require('./controllers');
const sequelize = require('./config/connection');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3001;
const {User} =require('./models');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', allRoutes)

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App listening on ${PORT}`));
});