// const express = require('express');
// const bodyParser = require('body-parser');
// const db = require('./models');
// const routes = require('./routes');

// const app = express();
// const port = 8000;

// app.use(bodyParser.json());
// app.use('/api', routes);

// db.sequelize.sync().then(() => {
//     app.listen(port, () => {
//         console.log(`Server running on port ${port}`);
//     });
// });
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./models');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3001;

// Configure CORS
const corsOptions = {
    origin: 'http://localhost:3000', // Replace with your frontend URL
    optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('/api', routes);

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
});

