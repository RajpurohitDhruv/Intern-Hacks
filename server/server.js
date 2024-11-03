const http=require('http');
const app=require('./index');
// const public=require('./public');
const server=http.createServer(app);

server.listen(8091,console.log('app is running'));