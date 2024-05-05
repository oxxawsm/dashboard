const express = require('express');
const cors = require('cors');
const { addSubscription } = require('./add-sub');
const { sendNotification } = require('./send-not');

const app = express();
app.use(express.json());
app.use(cors());

app.route('/add-subscription').post(addSubscription);
app.route('/send-notification').get(sendNotification);

app.listen(9000, () =>
  console.log('Servidor de Push Notifications rodando!')
);