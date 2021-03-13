var testFolder ='./data'; // 파일이 있는 경로
var fs = require('fs');

fs.readdir(testFolder, function(error,filelist){
  console.log(filelist);
})
