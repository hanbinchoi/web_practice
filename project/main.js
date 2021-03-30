var express = require('express');
var fs = require('fs');
var app = express();
var url = require('url');
var template = require('./libs/template.js');

app.get('/',function(req,res){
  var _url = req.url;
  var queryData = url.parse(_url,true).query;
  var pathname = url.parse(_url, true).pathname;

  if(pathname === '/'){

    if(queryData.id === undefined){
      var title = "Home";
      var page = "main";
      var html = template.HTML(title,page);
      res.writeHead(200);
      res.end(html);
    }
    else if(queryData.id === 'my-adult'){
      var title = "나의 아저씨";
      var page = "my-adult";
      var html = template.HTML(title,page);
      res.writeHead(200);
      res.end(html);
    }
    else if(queryData.id === 'mrSun'){
      var title = "미스터 션샤인";
      var page = "mrSun";
      var html = template.HTML(title,page);
      res.writeHead(200);
      res.end(html);
    }
    else if(queryData.id === 'itaewon'){
      var title = "이태원 클라쓰";
      var page = "itaewon";
      var html = template.HTML(title,page);
      res.writeHead(200);
      res.end(html);
    }
    else {
      res.writeHead(404);
      res.end('Not found');
    }

  }
  else {
    console.log("not");
    res.writeHead(404);
    res.end('Not found');
  }

});


app.listen(3000, function(){
});

app.use(express.static(__dirname + '/'));

app.use(express.static('/'));
