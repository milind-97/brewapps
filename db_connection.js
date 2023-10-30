const mongoose = require('mongoose');

const connectDatabase = () => {
  mongoose.set('strictQuery', false);
  const username = 'smilin453'; // Replace with your MongoDB username
  const password = 'Milu9730'; // Replace with your MongoDB password
  const clusterURL = 'cluster0.fvao7uc.mongodb.net'; // Replace with your MongoDB cluster URL
  const databaseName = 'brewapps'; // Replace with your database name

  mongoose.connect(`mongodb+srv://smilin453:5JHjOEFH2oFXnNrl@cluster0.fvao7uc.mongodb.net/brewapps`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then((data) => {
    console.log(`Mongodb connected with server: ${data.connection.host} `);
  }).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
};

module.exports = connectDatabase;
