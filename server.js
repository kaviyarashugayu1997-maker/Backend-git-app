const express = require('express');
const app = express();

 app.get('/', (req, res) => {
   res.send('<h1>Success!</h1><p>Your application is now hosting live on EC2.</p>');
   });

   
   const PORT = 5000;
   app.listen(PORT, '0.0.0.0', () => {
     console.log(`Server running on port ${PORT}`);
     }); 
