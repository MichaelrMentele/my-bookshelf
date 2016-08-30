var BookshelfView = Backbone.View.extend({
	el: '#books',
	events: {
		'click #add' : 'addBook'
	},
	initialize: function(initialBooks ) {
		this.collection = new Library(initialBooks);
		this.render();
		this.listenTo(this.collection, 'add', this.renderBook);
	},
	addBook: function(event) {
		event.preventDefault();

		var formdata = {};
		$("#addBook div").children('input').each(function(i, el) {
			if($(el).val() !== '') {
				formdata[el.id] = $(el).val();
			}
		});

		this.collection.add(new Book(formdata));
	},
	render: function() {
		this.collection.each(function(book) {
			this.renderBook(book);
		}, this);
	},
	renderBook: function(book) {
		var bookView = new BookView({
			model: book
		});
		console.log(book);
		this.$el.append( bookView.render().el );
	}
});