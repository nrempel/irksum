

exports = module.exports = function errorHandler(){
  return function errorHandler(err, req, res, next){
    // respond with html page
    if (req.accepts('html')) 
    {
      res.status(500);
      res.render('500', { title: 'Internal Server Error' });
      return;
    }
    // respond with json
    if (req.accepts('json')) 
    {
      res.status(500);
      res.send({ error: 'Error' });
      return;
    }
      res.status(500);
      res.end('500 - Internal Server Error');
  };
};
