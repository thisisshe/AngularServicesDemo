Module level methods:
	angular.module()
	angular.bootstrap()
	angular.config()
	angular.run()
	angular.val()
	angular.provider()
	angular.factory()
	angular.service()
	angular.directive()
	angular.filter()
	angular.controller()

	
factory:
	we create an object within the factory.
	In that object,we can register methods.
	and return that object from factory.


e.g.
app.factory('factoryname',function(injection1,injection2,..){

	var rep={};

	rep.Method1=function(arg1,arg2,...){
		return data;
	}

	rep.Method2=function(){arg1,arg2,..){
		return data;
	}	

	return rep;
	
});


Now, we can inject this factory in a controller and access this factory methods.
And this factory is a singleton.

how to inject a custom factory in the controller?

syntax : -
	function DemoController($scope,$rootScope,$location,factoryname){

$scope.foo1=function(){
	factoryname.method1();
}

$scope.foo2=function(){
	factoryname.method2();
}
		
	
}

==================================

Adding js files:
	First:
		jQuery.js
		Angular.min.js
		Angular.route.min.js

		app.js
		services.js
		factories.js
		filters.js
		directives.js
		controller.js

===================================
Angular Services (User defined)
Service is also for encapsulation.
we can add properties  and methods to the service.  
It behave as singleton.
To add properties and methods to the service , we use "this" pointer.
if you add methods or properties in the service without "this" pointer,we can't access them in controllers.
It does not require to return any object.


syntax : -
app.service('servicename',function(DI){
	
	this.property=value;
	this.property=value;

	
	var localvariables;

	this.method1=function(arg1,arg2,arg3..){
		//logic
		return somedata;
	}

	this.method2=function(arg1,arg2,arg3,....){
	//logic
	return somedata;
	}
	
		
});


how to inject the service in a controller? 

syntax : -
function DemoController($scope,$rootScope,$http,$location,servicename){

	$scope.properties;
	
	$scope.method1=function(){
			servicename.method1();
	}
}
================================================================





