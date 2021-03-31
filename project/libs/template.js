module.exports =  {

  HTML: function(title,page,control){
    return   `
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
          <h1 id="home"><a href="/">WTV</a></h1>
          <div style="float:right">
            <input type="image" value="day" src="img/day.png" onfocus="this.blur()" style="padding: none;width:100px; height:100px; margin-right:5px; float:right;" onclick="
              nightDayHandler(this);
              ">
          </div>
        </div>

        <div class="menu_container">
          ${this.list()}
        </div>


        <div class="main_container">
          ${this.left_list()}
          ${this.main_contents(page)}
        </div>
        ${this.vidio(page)}
        ${control}
      </body>

    </html>

      `;
  },
  check:function(a,b){
    var list = '';
    var i=0;
    while(i < a.length){
      list = list + `<p>${a[i]}</p><p>${b[i]}</p>`
      i = i + 1;
    }
    return list;
  },
  list:function(){
    var dramaName = ["나의 아저씨", "미스터 션샤인", "이태원 클라쓰"];
    var dramaId = ["my-adult", "mrSun", "itaewon"];
    var list ='';
    var i=0;
    while(i<dramaName.length){
      list = list + `<a href="/?id=${dramaId[i]}" class="list">${dramaName[i]}</a>`
      i=i+1;
    }

    return list;
  },

  left_list:function(){
    var dramaName = ["나의 아저씨", "미스터 션샤인", "이태원 클라쓰"];
    var dramaId = ["my-adult", "mrSun", "itaewon"];
    var left_list = '<ul>';
    var i = 0;
    while(i < dramaName.length){
      left_list = left_list + `<li><a class="l_list" href="/?id=${dramaId[i]}">${dramaName[i]}</a></li>`;
      i = i + 1;
    }
    left_list = left_list +'</ul>';

    return left_list;
  },

  main_contents:function(page){
    var content = '';
    if(page === 'main'){
      content =   `
            <h2 id="welcome_msg">Weekly Ranking</h2>

            <div class="rank_container">

              <div class="rank_poster_container">
                <span id="top_1">1st</span>
                <article class="location-listing">
                  <a class="location-title" href="/?id=my-adult">나의 아저씨</a>
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
                  <a class="location-title" href="/?id=mrSun">미스터 션샤인</a>
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
                  <a class="location-title" href="/?id=itaewon">이태원 클라쓰</a>
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


        `
    }
    else if(page === 'my-adult'){
      content =`
      <div class="content_container">
        <h1 class="title">나의 아저씨</h1>
        <p id="genre">드라마 | 15세이상 | 완결</p>
        <img src="img/1.jpg" width="100%" height="100%">

        <div class="info_container">
          <span id="info">기본정보</span>
          <span class="gray_bar"></span>
          <span id="organ">편성</span>
          <a id="broadcast" href="http://tvn.tving.com/tvn">tvN</a>
          <span id="period">2018.03.21. ~ 2018.05.17.</span>
          <span id="episode">16부작</span>
          <span class="gray_bar"></span>
          <span id="rate">시청률</span>
          <span id="rate_percent">7.4%</span>
          <span id="company">닐슨코리아 최고시청률</span>
          <span></span>
          <span id="contents">삶의 무게를 버티며 살아가는 아저씨 삼 형제와 거칠게 살아온 한 여성이 서로를 통해 삶을 <u>치유</u>하게 되는 이야기</span>
          <span id="actor">등장인물</span>

          <div class="actor_container">

            <div class="actor_info_container">
              <span><img width="100%" height="100%" src="img/pdh.png"></span>
              <span id="actor_role">박동훈 역</span>
              <span id="actor_name">이선균</span>
            </div>

            <div class="actor_info_container">
              <span><img width="100%" height="100%" src="img/lje.png"></span>
              <span id="actor_role">이지안 역</span>
              <span id="actor_name">이지은</span>
            </div>

            <div class="actor_info_container">
              <span><img width="100%" height="100%" src="img/jgy.png"></span>
              <span id="actor_role">이광일 역</span>
              <span id="actor_name">장기용</span>
            </div>

            <div class="actor_info_container">
              <span><img width="100%" height="100%" src="img/kym.png"></span>
              <span id="actor_role">도준영 역</span>
              <span id="actor_name">김영민</span>
            </div>

            <div class="actor_info_container">
              <span><img width="100%" height="100%" src="img/jjs.png"></span>
              <span id="actor_role">윤상무 역</span>
              <span id="actor_name">정재성</span>
            </div>

            <div class="actor_info_container">
              <span><img width="100%" height="100%" src="img/phs.png"></span>
              <span id="actor_role">박상훈 역</span>
              <span id="actor_name">박호산</span>
            </div>

            <div class="actor_info_container">
              <span><img width="100%" height="100%" src="img/ssb.png"></span>
              <span id="actor_role">박기훈 역</span>
              <span id="actor_name">송새벽</span>
            </div>

            <div class="actor_info_container">
              <span><img width="100%" height="100%" src="img/lja.png"></span>
              <span id="actor_role">강윤희 역</span>
              <span id="actor_name">이지아</span>
            </div>

            <div class="actor_info_container">
              <span><img width="100%" height="100%" src="img/nr.png"></span>
              <span id="actor_role">최유라 역</span>
              <span id="actor_name">나라</span>
            </div>

            <div class="actor_info_container">
              <span><img width="100%" height="100%" src="img/onr.png"></span>
              <span id="actor_role">정희 역</span>
              <span id="actor_name">오나라</span>
            </div>

            <a id="actor_more" href="http://program.tving.com/tvn/mymister/8/Contents/Html?h_seq=1">더보기</a>
          </div>
        </div>
        </div>
      `
    }
    else if(page==='mrSun'){
      content = `
      <div class="content_container">
        <h1 class="title">미스터 션샤인</h1>
        <p id="genre">드라마 | 15세이상 | 완결</p>
        <img src="img/2.jpg" width="100%" height="100%">

        <div class="info_container">
          <span id="info">기본정보</span>
          <span class="gray_bar"></span>
          <span id="organ">편성</span>
          <a id="broadcast" href="http://tvn.tving.com/tvn">tvN</a>
          <span id="period">2018.07.07. ~ 2018.09.30.</span>
          <span id="episode">24부작</span>
          <span class="gray_bar"></span>
          <span id="rate">시청률</span>
          <span id="rate_percent">18.1%</span>
          <span id="company">닐슨코리아 최고시청률</span>
          <span></span>
          <span id="contents">신미양요(1871년) 때 군함에 승선해 미국에 떨어진 한 소년이 미국 군인 신분으로 자신을 버린 조국인 조선으로 돌아와 주둔하며 벌어지는 일을 그린 드라마</span>
          <span id="actor">등장인물</span>

          <div class="actor_container">

            <div class="actor_info_container">
              <span><img width="100%" height="100%" src="img/lbh.png"></span>
              <span id="actor_role">유진초이 역</span>
              <span id="actor_name">이병헌</span>
            </div>

            <div class="actor_info_container">
              <span><img width="100%" height="100%" src="img/ktl.png"></span>
              <span id="actor_role">고애신 역</span>
              <span id="actor_name">김태리</span>
            </div>

            <div class="actor_info_container">
              <span><img width="100%" height="100%" src="img/yys.png"></span>
              <span id="actor_role">구동매 역</span>
              <span id="actor_name">유연석</span>
            </div>

            <div class="actor_info_container">
              <span><img width="100%" height="100%" src="img/kmj.png"></span>
              <span id="actor_role">쿠도히나 역</span>
              <span id="actor_name">김민정</span>
            </div>

            <div class="actor_info_container">
              <span><img width="100%" height="100%" src="img/byh.png"></span>
              <span id="actor_role">김희성 역</span>
              <span id="actor_name">변요한</span>
            </div>

            <div class="actor_info_container">
              <span><img width="100%" height="100%" src="img/kks.png"></span>
              <span id="actor_role">황은산 역</span>
              <span id="actor_name">김갑수</span>
            </div>

            <div class="actor_info_container">
              <span><img width="100%" height="100%" src="img/cms.png"></span>
              <span id="actor_role">장승구 역</span>
              <span id="actor_name">최무성</span>
            </div>

            <div class="actor_info_container">
              <span><img width="100%" height="100%" src="img/lhj.png"></span>
              <span id="actor_role">고사홍 역</span>
              <span id="actor_name">이호재</span>
            </div>

            <div class="actor_info_container">
              <span><img width="100%" height="100%" src="img/kus.png"></span>
              <span id="actor_role">이완익 역</span>
              <span id="actor_name">김의성</span>
            </div>

            <div class="actor_info_container">
              <span><img width="100%" height="100%" src="img/knh.png"></span>
              <span id="actor_role">모리 타카시 역</span>
              <span id="actor_name">김남희</span>
            </div>

            <a id="actor_more" href="http://program.tving.com/tvn/mrsunshine/3/Contents/Html?h_seq=1">더보기</a>
          </div>
        </div>
        </div>
      `
    }
    else if(page === `itaewon`){
      content = `
      <div class="content_container">
        <h1 class="title">이태원 클라쓰</h1>
        <p id="genre">드라마 | 15세이상 | 완결</p>
        <img src="img/3.jpg" width="100%" height="100%">

        <div class="info_container">
          <span id="info">기본정보</span>
          <span class="gray_bar"></span>
          <span id="organ">편성</span>
          <a id="broadcast" href="https://tv.jtbc.joins.com/">JTBC</a>
          <span id="period">2020.01.31. ~ 2020.03.21.</span>
          <span id="episode">16부작</span>
          <span class="gray_bar"></span>
          <span id="rate">시청률</span>
          <span id="rate_percent">16.5%</span>
          <span id="company">닐슨코리아 최고시청률</span>
          <span></span>
          <span id="contents">불합리한 세상 속, 고집과 객기로 뭉친 청춘들의 '힙'한 반란이 시작된다. 세계를 압축해 놓은 듯한 이태원. 이 작은 거리, 각자의 가치관으로 자유를 쫓는 그들의 창업 신화 <이태원 클라쓰></span>
          <span id="actor">등장인물</span>

          <div class="actor_container">

            <div class="actor_info_container">
              <span><img width="100%" height="100%" src="img/psj.jpg"></span>
              <span id="actor_role">박새로이 역</span>
              <span id="actor_name">박서준</span>
            </div>

            <div class="actor_info_container">
              <span><img width="100%" height="100%" src="img/kdm.jpg"></span>
              <span id="actor_role">조이서 역</span>
              <span id="actor_name">김다미</span>
            </div>

            <div class="actor_info_container">
              <span><img width="100%" height="100%" src="img/yjm.jpg"></span>
              <span id="actor_role">장대희 역</span>
              <span id="actor_name">유재명</span>
            </div>

            <div class="actor_info_container">
              <span><img width="100%" height="100%" src="img/knr.jpg"></span>
              <span id="actor_role">오수아 역</span>
              <span id="actor_name">권나라</span>
            </div>

            <div class="actor_info_container">
              <span><img width="100%" height="100%" src="img/kdh.jpg"></span>
              <span id="actor_role">장근수 역</span>
              <span id="actor_name">김동희</span>
            </div>

            <div class="actor_info_container">
              <span><img width="100%" height="100%" src="img/abh.jpg"></span>
              <span id="actor_role">장근원 역</span>
              <span id="actor_name">안보현</span>
            </div>

            <div class="actor_info_container">
              <span><img width="100%" height="100%" src="img/khe.jpg"></span>
              <span id="actor_role">강민정 역</span>
              <span id="actor_name">김혜은</span>
            </div>

            <div class="actor_info_container">
              <span><img width="100%" height="100%" src="img/rks.jpg"></span>
              <span id="actor_role">최승권 역</span>
              <span id="actor_name">류경수</span>
            </div>

            <div class="actor_info_container">
              <span><img width="100%" height="100%" src="img/ljy.jpg"></span>
              <span id="actor_role">마현이 역</span>
              <span id="actor_name">이주영</span>
            </div>

            <div class="actor_info_container">
              <span><img width="100%" height="100%" src="img/cr.jpg"></span>
              <span id="actor_role">김토니 역</span>
              <span id="actor_name">크리스 라이언</span>
            </div>

            <a id="actor_more" href="http://program.tving.com/tvn/mrsunshine/3/Contents/Html?h_seq=1">더보기</a>
          </div>
        </div>
        </div>
      `
    }
    return content;
  },

  vidio:function(page){
    var vidio = '';
    if(page==='my-adult'){
      vidio =
      `  <h3 class = "comment">댓글</h3>
        <div class="row">
          <div class ='left'>
            <iframe style="float:left;" width="100%" height="100%" src="https://www.youtube.com/embed/HUQW58H2HI8" frameborder="0"  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe>
          </div>

          <div class='right'>
            <form id="board" action="/create_process" method="post">
              <p><input type="text" name="title" placeholder="title"></p>
              <p>
                <textarea cols="60" rows="3" name="description" placeholder="description"></textarea>
              </p>
              <p>
                <input type="submit" value="등록">
              </p>
            </form>
          </div>
        </div>`
    }
    else if(page===`mrSun`){
      vidio =
      `<h3 class = "comment">댓글</h3>
      <div class="row">
        <div class ='left'>
          <iframe style="float:left;" width="100%" height="100%" src="https://www.youtube.com/embed/I4wVGuVm2HU" frameborder="0"  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe>
        </div>
        <div class='right'>
          right
        </div>
      </div>
      `
    }
    else if(page===`itaewon`){
      vidio =
      `<h3 class = "comment">댓글</h3>
      <div class="row">
        <div class ='left'>
          <iframe style="float:left;" width="100%" height="100%" src="https://www.youtube.com/embed/r8FeCiNgers" frameborder="0"  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe>
        </div>
        <div class='right'>
          right
        </div>
      </div>`
    }

    return vidio;
  }



}
