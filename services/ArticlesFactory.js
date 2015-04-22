newsApp.factory('ArticlesFactory', function ArticlesFactory() {
  var factory = {};
  factory.articles = [];

  factory.addArticle = function(name, link) {
    this.articles.push({  name: name,
                          link: link,
                          date: new Date().getTime(),
                          likes: 0,
                          adminScore: function() {
                            return 10;
                          }
                      });
  }

  return factory;
});
