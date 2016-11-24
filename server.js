var express = require('express'),
http = require('http'),
routes = require('./routes'),
api = require('./api'),
config = require('./config'),
path = require('path')

import { Server } from 'http';

var app = express();
const server = new Server(app);
var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));


//routes to use for the app -- might change in future to add functionality

app.get('/', routes.index);							//inital page with login screen
//app.get('/queue/:id', routes.queue);				//the queue page
//app.get('/queue/:id/data', api.queueData);			//gets the data for specific queue - api
//app.get('/queue/:id/exists', api.doesQueueExist)	//does queue exist - api
//
//
//app.post('/', api.register);						//registers the user - api
//app.post('/user/makeInactive', api.unregisterUser); //unregisterUser - api
//app.post('/queue/addSong', api.addSong);			//add song to queue - api
//api.post('/song/remove', api.removeSong);			//remoce song from queue - api

var server = http.createServer(app).listen(port, function(){
	console.log('server is listening on port '+port);
})