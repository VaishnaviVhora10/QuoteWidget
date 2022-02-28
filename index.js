let request = require('request');
request('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts per page]=1',function(err,response,body){
let bodyJSON = JSON.parse(body);
let randomquote = bodyJSON[0]['content']
document.getElementById('quote').innerHTML = randomquote
});

setInterval(function(){
request('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts per page]=1',function(err,response,body){
let bodyJSON = JSON.parse(body);
let randomquote = bodyJSON[0]['content']
document.getElementById('quote').innerHTML = randomquote
});
},5000)