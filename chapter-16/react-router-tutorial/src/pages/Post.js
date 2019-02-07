import React from 'react';

const Post = ({match, location}) => {
  console.log('location :', location);
  console.log('Post :', match);

  return (
    <div>
      포스트 #{match.params.id}
    </div>
  );
};

export default Post;