const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('./models/User');
const config = require('./config/key');
const cookieParser = require('cookie-parser');
const { auth } = require('./middleware/auth');

//bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cookieParser
app.use(cookieParser());

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
app.post('/api/users/register', (req, res) => {
  //회원 가입 시 필요한 정보들을 client에서 받아온다.(req)
  //user instance를 생성하고, 받아온 client 정보들(req.body)을 user instance에 넣어준다.
  const user = new User(req.body);
  console.log('user', user);
  //최종적으로 데이터 베이스(컬렉션에)에 넣어준다
  user.save((err, user) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

//login
app.post('/api/users/login', (req, res) => {
  //요청된 이메일을 데이터베이스에서 찾는다
  User.findOne({ email: req.body.email }, async (err, user) => {
    //유저가 없을 시
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: '이메일에 해당하는 유저가 없습니다.',
      });
    }

    //요청된 이메일이 데이터 베이스에 있다면 비밀번호가 맞는 비밀번호인지 확인
    const passwordOk = await bcrypt.compare(req.body.password, user.password);
    if (!passwordOk) {
      return res.json({
        loginSuccess: false,
        message: '비밀번호가 맞지 않습니다',
      });
    }

    //비밀번호까지 맞다면 토큰을 생성해서, 해당 user의 token에 넣어준다.
    const token = await jwt.sign(user._id.toHexString(), 'secretToken');
    user.token = token;
    user.save((err, user) => {
      if (err) return res.status(400).send(err);

      //token을 cookie에 저장
      res
        .cookie('x_auth', user.token) //
        .status(200)
        .json({
          loginSuccess: true,
          userId: user._id,
        });
    });
  });
});

app.get('/api/users/auth', auth, (req, res) => {
  // console.log(req.user);

  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image,
  });
});

app.get('/api/users/logout', auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: '' }, (err, user) => {
    // console.log('user', user);
    if (err)
      return res.json({
        success: false,
        err,
      });

    return res.status(200).send({
      success: true,
    });
  });
});

app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`);
});

//express 모듈을 가져온다.
//express fn을 이용해서 app을 만든다.
//server와 mongoDB 연결
//req : 클라이언트에서 온 요청
//res : 클라이언트에 보내 줄 응답
