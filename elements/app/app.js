(function () {
  var app = angular.module('hello-world-app', ['ng1WebComponents']);
  app.component('greetUser', {
    template: '<greet-ce-wrapper message="$ctrl.message"></greet-ce-wrapper>',
    controller: function GreetUserController() {
      this.message = 'Welcome to AngularJs upgrade with Angular Elements';
    }
  });
})();
