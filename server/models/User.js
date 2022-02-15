const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    try {
      const hashPassword = await bcrypt.hash(this.password, 10);
      this.password = hashPassword;
      next();
    } catch (err) {
      // console.log(err);
      return next(err);
    }
  } else {
    next();
  }
});

const User = mongoose.model('user', userSchema);

module.exports = { User };

//trim : space(빈칸)을 없애주는 역할을 한다.
//unique : 중복되지 못하도록 유니크 값을 준다.
//role : 관리자, 일반 유저로 나누기 위해서, 1이면 관리자 0이면 일반 유저
//token : 유효성 관리를 위해서
//tokenExp : 토큰을 사용할 수 있는 기간
//pre메서드 : 특정 동작 이전에 어떤 행동을 취할 지 정의할 수 있다. userSchema.pre("save") : save하기 전에 호출된다.
