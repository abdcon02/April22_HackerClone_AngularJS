newsApp.controller("ArticlesCtrl", function ArticlesCtrl($scope, ArticlesFactory) {
  $scope.articles = ArticlesFactory.articles;

  $scope.addArticle = function() {
    ArticlesFactory.addArticle($scope.newArticle, $scope.newLink);
    $scope.newArticle = null;
    $scope.newLink = null;
  };

  $scope.addLike = function(article) {
    article.likes++;
  };

});
