var express = require('express');
var fs = require('fs');
var app = express();
var url = require('url');
var qs = require('querystring');
var path = require('path');
var template = require('./libs/template.js');

app.get('/',function(req,res){
  var _url = req.url;
  var queryData = url.parse(_url,true).query;
  var pathname = url.parse(_url, true).pathname;
  if(pathname === '/'){

    if(queryData.id === undefined){
      var title = "Home";
      var page = "main";
      var html = template.HTML(title,page,'');
      res.writeHead(200);
      res.end(html);
    }
    else if(queryData.id === 'my-adult'){
      var i=0;
      var title = "나의 아저씨";
      var page = "my-adult";
      var file_title = [];
      var des = [];
      fs.readdir('./data', function(error, filelist){
        while(i<filelist.length){
          file_title.push(filelist[i]);
          // 디렉톨리에서 파일을 읽을때 동기화 방식으로 처리
          des.push(fs.readFileSync(`data/${filelist[i]}`,"utf-8"));

          i=i+1;
         }
        var file_list = template.check(file_title,des);
        console.log(file_list);
        var html = template.HTML(title,page,file_list);

        res.writeHead(200);
        res.end(html);
      });

    }
    else if(queryData.id === 'mrSun'){
      var title = "미스터 션샤인";
      var page = "mrSun";
      var html = template.HTML(title,page,'');
      res.writeHead(200);
      res.end(html);
    }
    else if(queryData.id === 'itaewon'){
      var title = "이태원 클라쓰";
      var page = "itaewon";
      var html = template.HTML(title,page,'');
      res.writeHead(200);
      res.end(html);
    }


    else {
      res.writeHead(404);
      res.end('Not found');
    }

  }

  else {
    res.writeHead(404);
    res.end('Not found');
  }

});



app.post('/create_process',function(req,res){
  var body = '';
  req.on('data', function(data){
      body = body + data;
  });
  req.on('end', function(){
      var post = qs.parse(body);
      var title = post.title;
      var description = post.description;
      fs.writeFile(`data/${title}`, description, 'utf8', function(err){
        res.writeHead(302, {Location: `/?id=my-adult`});
        res.end();
      })
  });
});

app.listen(3000, function(){});

app.use(express.static(__dirname + '/'));

app.use(express.static('/'));
