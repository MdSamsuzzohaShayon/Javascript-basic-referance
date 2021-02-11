const express = require('express');

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res, next) => {
  console.log('something happening');
  process.exit(1);
});

const obj = {
    hello: function(){
        console.log("hello");
    }
}

app.listen(PORT, () => console.log('Server is running on: 4000'));

class A{
    foo(){
        console.log("Hello World");
    }
}