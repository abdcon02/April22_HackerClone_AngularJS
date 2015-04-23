newsApp.controller("ArticlesCtrl", function ArticlesCtrl($scope, ArticlesFactory, UtilitiesFactory) {
  $scope.articles = ArticlesFactory.articles;
  $scope.dataObj = UtilitiesFactory.dataObj;

  $scope.addArticle = function() {
    ArticlesFactory.addArticle($scope.newArticle, $scope.newLink);
    $scope.newArticle = null;
    $scope.newLink = null;
  };

  $scope.addLike = function(article) {
    article.likes++;
  };

});
