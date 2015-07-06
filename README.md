# Angular-LoadingIndicatorService
## Installation
###Bower
The easiest way to install the HttpService is by including the bower package to your solution
```shell
bower install symanto-angular-loadingindicatorservice --save
```

## Configuration
The HttpService comes fully configured and runnable out of the box. The only thing you need to do is adding the LoadingIndicatorService to your root modules dependencies:
```javascript
angular.module("Application.Root", [
    "Symanto.LoadingIndicatorService"
]);
```

## Usage
The LoadingIndicatorService is designed to operate in the background and updates the visibility property by itsself whenever needed. Therefore the best way to use it is bindig this variable to the visibility of the UI element that you want to show whenever the application is busy. To do so, we recommend the following steps:

### 1. Resolve the indicatorVisibleStatus in your root state
```javascript
$stateProvider.state('root', {
    controller: "RootController",
    templateUrl: "rootlayout.html",
    resolve: {
        loadingIndicatorState: function (LoadingIndicatorService) {
            return LoadingIndicatorService.getCurrentState();
        }
    }
})
```
### 2. Prepare the $scope inside your root controller
```javascript
angular.module("Root").controller("RootController", function ($scope, loadingIndicatorState) {
   $scope.loader = loadingIndicatorState;
});
```
### 3. Bind the visibility to your loading UI element
```html
<div ng-include="'loading_indicator.html'" ng-show="loader.visible"></div>
```
