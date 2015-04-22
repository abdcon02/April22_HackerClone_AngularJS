newsApp.factory('ArticlesFactory', function ArticlesFactory() {
  var factory = {};
  factory.articles = [];

  factory.addArticle = function(name, link) {
    this.articles.push({
      name: name,
      link: link,
      date: new Date().getTime(),
      likes: 0,
      comments: [],
      adminScore: function() {
        // var now = new Date().getTime();
        // var min = (now - this.date);
        // var baseScore = 10 - min + this.likes + this.comments.length;
        return this.likes;
      },
      timeCreated: function() {
        var now = new Date().getTime();
        var diff = now - this.date;
        var min = Math.round(diff / 1000 / 60);

        return min + " minutes ago";
      }
  });
  };

  return factory;
});
