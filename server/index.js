const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');

main()
  .then(console.log('MongoDB Connected..'))
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect(
    'mongodb+srv://chankyu:0818@bolierplate.ojt4g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  );
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//express 모듈을 가져온다.
//express fn을 이용해서 app을 만든다.
//server와 mongoDB 연결
