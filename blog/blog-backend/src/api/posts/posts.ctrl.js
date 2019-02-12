const Post = require('models/post');
const { ObjectId } = require('mongoose').Types;
const Joi = require('joi');

exports.checkObjectId = (ctx, next) => {
  const { id } = ctx.params;

  // 검증 실패
  if (!ObjectId.isValid(id)) {
    ctx.status = 400;   // Bad Request
    return null;
  }

  return next();  // next를 리턴해야 ctx.body가 제대로 설정됩니다.
};

/*
  포스트 작성
  POST /api/posts
  {title, body, tags}
*/
exports.write = async ctx => {
  // 객체가 지닌 값들을 검증합니다.
  const schema = Joi.object().keys({
    title: Joi.string().required(),   // 뒤에 required를 붙여주면 필수 항목이라는 의미
    body: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).required()  // 문자열 배열
  });

  // 첫 번째 파라미터는 검증할 객체, 두 번째는 스키마
  const result = Joi.validate(ctx.request.body, schema);

  // 오류 발생 시 오류 내용 응답
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { title, body, tags } = ctx.request.body;

  // 새 Post 인스턴스를 만듭니다.
  const post = new Post({
    title, body, tags
  });

  try {
    await post.save();  // DB에 등록합니다.
    ctx.body = post;    // 저장결과를 반환합니다.
  } catch (e) {
    ctx.throw(e, 500);
  }
};

/*
  포스트 목록 조회
  GET /api/posts
*/
exports.list = async ctx => {
  try {
    const posts = await Post.find().exec();
    ctx.body = posts;
  } catch (e) {
    ctx.throw(e, 500);
  }
};

/*
  특정 포스트 조회
  GET /api/posts/:id
*/
exports.read = async ctx => {
  const { id } = ctx.params;
  try {
    const post = await Post.findById(id).exec();
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(e, 500);
  }
};

/*
  특정 포스트 제거
  DELETE /api/posts/:id
*/
exports.remove = async ctx => {
  const { id } = ctx.params;
  try {
    await Post.findByIdAndRemove(id).exec();
    ctx.status = 204;
  } catch (e) {
    ctx.throw(e, 500);
  }
};

/*
  포스트 수정(특정 필드 변경)
  PATCH /api/posts/:id
  {title, body, tags}
*/
exports.update = async ctx => {
  const { id } = ctx.params;
  try {
    const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
      new: true
      // 이 값을 설정해야 업데이트된 객체를 반환합니다.
      // 설정하지 않으면 업데이트되기 전의 객체를 반환합니다.
    }).exec();

    if (!post) {
      ctx.status = 404;
      return;
    }

    ctx.body = post;

  } catch (e) {
    ctx.throw(e, 500);
  }
};