const express = require('express');
const app = express();


  app.get('/', (req, res) => {
     res.send('<h1>100% Hosted!</h1><p>The server is responding correctly.</p>');
     });

      const PORT = 5000;
      app.listen(PORT, '0.0.0.0', () => {
         console.log(`Server is live on port ${PORT}`);
         });
