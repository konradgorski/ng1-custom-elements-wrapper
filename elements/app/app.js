(function () {
  var app = angular.module('hello-world-app', ['ng1WebComponents']);
  app.component('greetUser', {
    template: '<greet-ce-wrapper name="$ctrl.name" name-change="$ctrl.nameChange(detail)"></greet-ce-wrapper>',
    controller: function GreetUserController() {
      this.name = 'Erin Coughlan';

      this.nameChange = function(detail) {
        this.name =  detail;
      }
    }
  });
})();
