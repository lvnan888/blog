var posts=["2026/06/06/My-New-Post/","2026/06/06/naiwa/","2026/06/06/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };