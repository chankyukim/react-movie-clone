const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { User } = require('./models/User');
const config = require('./config/key');

//bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//mongoDB connected
main()
  .then(console.log('MongoDB Connected..'))
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect(config.mongoURI);
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

//sign up
app.post('/register', (req, res) => {
  //회원 가입 시 필요한 정보들을 client에서 받아온다.(req)
  //user instance를 생성하고, 받아온 client 정보들(req.body)을 user instance에 넣어준다.
  const user = new User(req.body);
  //최종적으로 데이터 베이스(컬렉션에)에 넣어준다
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

//login

app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`);
});

//express 모듈을 가져온다.
//express fn을 이용해서 app을 만든다.
//server와 mongoDB 연결
//req : 클라이언트에서 온 요청
//res : 클라이언트에 보내 줄 응답
