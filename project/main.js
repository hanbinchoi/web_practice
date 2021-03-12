var http = require('http');
var fs = require('fs');
var url = require('url');
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;

    console.log(queryData);
    if(_url == '/'){
      title="Home"
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    fs.readFile('/template','utf-8',function(err,data){
      var template = `
        <!doctype html>
        <html lang="en" dir="ltr">
          <head>
            <title>WTV - ${title}</title>
            <meta charset="utf-8">
            <link rel="stylesheet" href="style.css">
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="page.js"></script>
          </head>

          <body>
            <div class="head_container">
              <script type="text/javascript">
                let today = new Date();

                let year = today.getFullYear(); // 년도
                let month = today.getMonth() + 1;  // 월
                let date = today.getDate();  // 날짜
                let day = today.getDay();  // 요일

                document.write("<div id=date>"+year + '년' + month + '월' + date +'일'+"</div>");
              </script>
              <h1 id="home"><a href="index.html">${title}</a></h1>
              <div style="float:right">
                <input type="image" value="day" src="/img/day.png" onfocus="this.blur()" style="padding: none;width:100px; height:100px; margin-right:5px; float:right;" onclick="
                  nightDayHandler(this);
                  ">
              </div>
            </div>

            <div class="menu_container">
              <a href="/?id=1" class="list">나의 아저씨</a>
              <a href="/?id=2" class="list">미스터 션샤인</a>
              <a href="/?id=3" class="list">이태원 클라쓰</a>
            </div>


            <div class="main_container">
              <ul>
                <li><a class="l_list" href="/?id=1">- 나의 아저씨</a></li>
                <li><a class="l_list" href="/?id=2">- 미스터 션샤인</a></li>
                <li><a class="l_list" href="/?id=3">- 이태원 클라쓰</a></li>
              </ul>
              <h2 id="welcome_msg">Weekly Ranking</h2>

              <div class="rank_container">

                <div class="rank_poster_container">
                  <span id="top_1">1st</span>
                  <article class="location-listing">
                    <a class="location-title" href="1.html">나의 아저씨</a>
                    <div class="location-image">
                      <a style="text-align:center;" href="#">
                        <img src="img/1.jpg" alt="나의 아저씨">
                      </a>
                    </div>
                  </article>
                  <span id="bottom">나의 아저씨</span>

                </div>

                <div class="rank_poster_container">
                  <span id="top_2">2nd</span>
                  <article class="location-listing">
                    <a class="location-title" href="2.html">미스터 션샤인</a>
                    <div class="location-image">
                      <a style="text-align:center;" href="#">
                        <img src="img/2.jpg" alt="미스터 션샤인">
                      </a>
                    </div>
                  </article>
                    <span id="bottom">미스터 션샤인</span>
                </div>

                <div class="rank_poster_container">
                  <span id="top_3">3rd</span>
                  <article class="location-listing">
                    <a class="location-title" href="3.html">이태원 클라쓰</a>
                    <div class="location-image">
                      <a style="text-align:center;" href="#">
                        <img src="img/3.jpg" alt="이태원 클라쓰">
                      </a>
                    </div>
                  </article>
                    <span id="bottom">이태원 클라쓰</span>
                </div>





                <article class="location-listing">
                  <a class="location-title" href="3.html">Coming Soon</a>
                  <div class="location-image">
                    <a style="text-align:center;" href="#">
                      <img src="img/coming_soon.png" alt="Coming Soon">
                    </a>
                  </div>
                </article>
                <h1>Coming Soon...</h1>
              </div>
            </div>



          </body>

        </html>

      `;
      response.end(template);
    })


});
app.listen(3000);
