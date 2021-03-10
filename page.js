var Page = {
  setBodyColor:function(bgColor,color){
    document.querySelector('body').style.backgroundColor=bgColor;
    document.querySelector('body').style.color=color;
  },
  setLinksColor:function(color){
    $('a').css("color",color);
    // var a = document.getElementsByClassName('list');
    // for(let i=0; i<a.length; i++){
    //   a[i].style.color=color;
    // }
  },
  setAColor:function(color){
    document.querySelector('a').style.color=color;
  }
}
function nightDayHandler(self){
  if(self.value==='day'){
    Page.setBodyColor('black','powderblue');
    Page.setAColor('powderblue');
    Page.setLinksColor('powderblue')
    document.querySelector('input').src="img/night2.png";
    document.querySelector('input').style.width="65px";
    document.querySelector('input').style.height="65px";
    document.querySelector('input').style.padding="15px";
    if(document.getElementById('now')){
      document.getElementById('now').style.color="blue";
    }
    document.getElementById('broadcast').style.color="blue";
    var list = document.getElementsByClassName('location-title');
    for (var i = 0; i <   document.getElementsByClassName('location-title').length; i++) {
      list[i].style.color="powderblue";
    }

    self.value='night';
  }
  else{
    Page.setBodyColor('white','black');
    Page.setAColor('black');
    Page.setLinksColor('black');
    document.querySelector('input').src="img/day.png";
    document.querySelector('input').style.width="100px";
    document.querySelector('input').style.height="100px";
    document.querySelector('input').style.padding="0px";
    if(document.getElementById('now')){
      document.getElementById('now').style.color="red";
    }
    document.getElementById('broadcast').style.color="blue";
    document.getElementById('actor_more').style.color="gray";
    var list = document.getElementsByClassName('location-title');
    for (var i = 0; i <   document.getElementsByClassName('location-title').length; i++) {
      list[i].style.color="white";
    }
    self.value='day';
  }
}
