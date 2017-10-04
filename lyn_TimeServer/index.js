const net = require('net')
let server = net.createServer(function(socket){
 
  let date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  if(month < 10) {
  	month = '0' + month
  }
  let day = date.getDate()
  if(day < 10) {
  	day = '0' + day
  }
  let hours = date.getHours()
  if(hours < 10) {
  	hours = '0' + hours
  }
  let min = date.getMinutes()
  if(min < 10) {
  	min = '0' + min
  }
  let newDate = year + "-" + month + "-" + day + ' '+hours+':'+min + '\n'
  socket.write(newDate)
  socket.end()
})
server.listen(process.argv[2])