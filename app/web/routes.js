module.exports = function(app) {
	app

	.get('/', function(req, res) {
	    res.render('home/index');
	})

	.get('/news', function(req, res) {
		 app.db.query('SELECT * FROM new', function(error, result) {
			res.render('home/new/all', { news: result });
		});		
	})

	.get('/admin/new/add', function(req, res) {
	    res.render('admin/new/form_new_add');
	})
};