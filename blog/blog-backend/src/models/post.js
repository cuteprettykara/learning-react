const mongoose = require('mongoose');

const { Schema } = mongoose;

const Post = new Schema({
  title: String,
  body: String,
  tags: [String], // 문자열 배열
  publishedDate: {
    type: Date,
    default: new Date() // 현재 날짜를 기본 값으로 지정
  }
});

// 첫 번째 파라미터: 스키마 이름
// 두 번째 파라미터: 스키마 객체
module.exports = mongoose.model('Post', Post);



