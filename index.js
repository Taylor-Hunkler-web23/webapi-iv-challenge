const express =require('express');

const server =express();


server.get('/', (req, res) =>{
res.status(200).json({Hello: 'from heroku'});
})


const port =process.env.PORT || 4000;


server.listen(4000, () => {
    console.log(`\n Server running on port ${port} \n`);
  });
  