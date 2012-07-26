/*A module to route and render static pages.*/

var staticPageHandler = module.exports = function staticPageHandler(){};

staticPageHandler.prototype = 
{
	init: function(server)
	{

    /*Routes*/
    server.get('/', function(req, res)
      {
        res.render('index', { title: 'Home'});
      });

    server.get('/games', function(req, res)
      {
        res.render('games', { title: 'Games'});
      });

    /* Render 404 pages */
    server.get('/*', function(req, res){
      // respond with html page
      if (req.accepts('html')) 
      {
        res.status(404);
        res.render('404', { title: 'File Not Found' });
        return;
      }
      // respond with json
      if (req.accepts('json')) 
      {
        res.send({ error: 'Not found' });
        return;
      }
      // default to plain-text. send()
      res.type('txt').send('Not found');
    });
	}
};