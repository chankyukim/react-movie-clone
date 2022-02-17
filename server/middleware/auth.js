const jwt = require('jsonwebtoken');
const { User } = require('../models/User');

const auth = (req, res, next) => {
  //클라이언트 쿠키에서 토큰을 가져온다
  const token = req.cookies.x_auth;

  //토큰을 복호화 한 후
  jwt.verify(token, 'secretToken', function (err, decoded) {
    // console.log('decoded', decoded);

    //유저를 찾는다.
    User.findOne({ _id: decoded, token }, function (err, user) {
      // console.log('user', user);
      if (err) throw err;
      //유저가 없으면 인증 no
      if (!user) return res.json({ isAuth: false, error: true });

      //유저가 있으면 인증 ok
      req.token = token;
      req.user = user;
      // console.log('req.user', req.user);
      next();
    });
  });
};

module.exports = { auth };
