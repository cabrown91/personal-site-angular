angular.module('Portfolio')
  .directive('portfolioCard', portfolioCard);

  function portfolioCard(){
    var directive = {
      restrict: 'E',
      templateUrl: '/templates/cardDirective.html',
      replace: true,
      scope: {
        project: '@',
      },
    };
    return directive;
  }
