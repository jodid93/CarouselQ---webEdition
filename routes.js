var JSX = require('node-jsx').install(),
React = require('react'),
CarouselQApp = require('./components/CarouselQApp')

module.exports = {
	index: function(req, res){


		var markup = React.renderComponentToString(
			CarouselQApp({
				data: data
			})
		)

		res.render('index',{
			markup: markup
		})
	},

	queue: function(req, res){


		var markup = React.renderComponentToString(
			CarouselQApp({
				data: data
			})
		)

		res.render('somepage',{
			markup: markup,
			state: JSON.stringify(/*somedata*/)
		})
	}
}