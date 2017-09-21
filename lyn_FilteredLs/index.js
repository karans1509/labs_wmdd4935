let fs = require('fs');
fs.readdir(process.argv[2], function(err, files){
   let format = "." + process.argv[3].toString();
   for(let i = 0; i<files.length ; i++) {
   	  if(files[i].endsWith(format)) {
         console.log(files[i]);
   	  }
   }
});