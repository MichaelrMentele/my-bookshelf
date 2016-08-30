var Book = Backbone.Model.extend({
	defaults: {
		coverImage: 'assets/placeholder.jpg',
		title: 'No Title',
		author: 'Unknown',
		releaseDate: 'Unknown',
		keywords: 'none'
	}
});