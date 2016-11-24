(function(module) {
try {
  module = angular.module('ionic-timepicker.templates');
} catch (e) {
  module = angular.module('ionic-timepicker.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('ionic-timepicker.html',
    '<div><div class=heading>{{time.hours}} : {{time.minutes}} <span ng-show="time.format == 12">{{time.meridian}}</span></div><div class=row ng-class="{\'padding_left_15px\':time.format == 12}"><div class="col col-25" ng-class="{\'col-offset-20 col-25\':time.format == 24}"><button type=button class="button button-clear button-small button-dark time_picker_arrows" ng-click=increaseHours()><i class="icon ion-chevron-up"></i></button><div ng-bind=time.hours class=time_picker_box_text></div><button type=button class="button button-clear button-small button-dark time_picker_arrows" ng-click=decreaseHours()><i class="icon ion-chevron-down"></i></button></div><label class="col col-10 time_picker_colon">:</label><div class="col col-25" ng-class="{\'col-25\':time.format == 24}"><button type=button class="button button-clear button-small button-dark time_picker_arrows" ng-click=increaseMinutes()><i class="icon ion-chevron-up"></i></button><div ng-bind=time.minutes class=time_picker_box_text></div><button type=button class="button button-clear button-small button-dark time_picker_arrows" ng-click=decreaseMinutes()><i class="icon ion-chevron-down"></i></button></div><label class="col col-10 time_picker_colon" ng-if="time.format == 12">:</label><div class="col col-25" ng-if="time.format == 12"><button type=button class="button button-clear button-small button-dark time_picker_arrows" ng-click=changeMeridian()><i class="icon ion-chevron-up"></i></button><div ng-bind=time.meridian class=time_picker_box_text></div><button type=button class="button button-clear button-small button-dark time_picker_arrows" ng-click=changeMeridian()><i class="icon ion-chevron-down"></i></button></div></div></div>');
}]);
})();
