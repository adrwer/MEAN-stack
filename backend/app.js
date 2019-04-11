const express = require('express');

const app = express();

app.use('/api/posts',(req, res, next) => {
  const posts = [
    {
      id: 'j2k3rj24f',
      title: 'First server-side post',
      content: 'This is coming from the server'
    },
    {
      id: 'sxrdctu2345',
      title: 'Second server-side post',
      content: 'This too is coming from the server'
    }
  ];

  res.status(200).json({
    message: 'Posts fetched successfully',
    posts: posts
  });
});

module.exports = app;
