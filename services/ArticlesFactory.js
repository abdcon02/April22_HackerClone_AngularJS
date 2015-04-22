newsApp.factory('ArticlesFactory', function ArticlesFactory() {
  var factory = {};
  factory.articles = [];

  factory.addArticle = function(name, link) {
    this.articles.push({  name: name,
                          link: link,
                          date: new Date().getTime(),
                          likes: 0,
                          comments: [],
                          adminScore: function() {
                            // combination of comments.length, time in existance, and likes
                            return 10;
                          },
                          timeCreated: function() {
                            var now = new Date().getTime();
                            var diff = now - this.date;
                            var min = Math.round(diff / 1000 / 60);

                            return min + " minutes ago";
                          }
                      });
  }

  return factory;
});
