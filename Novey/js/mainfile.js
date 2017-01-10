var app=angular.module("novey",["ngRoute"]);

app.run(function($rootScope) {
      $rootScope.todoList = [{user:"var",taskname:"complete assignment",status:false},{user:"var 1",taskname:"complete assignment 1",status:false}];
      $rootScope.userList = [{username:"varpreet",password:"vps",key:"1"}];
  });

app.config(function($routeProvider){
    $routeProvider
      .when("/",{
        templateUrl:"/html/1_homepage.html"
      })
      .when("/move_to_starting_options",{
        templateUrl:"/html/2_startingOptions.html"
      })
      .when("/edit_user_task",{
        templateUrl:"/html/9_CreateTask.html"
      })
      .when("/edit_admin_task",{
        templateUrl:"/html/14_CreateTaskByAdmin.html"
      })
      .when("/move_to_user_sign_in",{
        templateUrl:"/html/3_userSignInPage.html"
      })
      .when("/move_to_user_sign_up",{
        templateUrl:"/html/5_CreateUser.html"
      })
      .when("/move_to_admin_sign_in",{
        templateUrl:"/html/4_AdminSignInPage.html"
      })
      .when("/move_to_user_dashboard",{
        templateUrl:"/html/6UserDashboard.html"
      })
      .when("/move_to_user_dashboard_after_new_user_sign_up",{
        templateUrl:"/html/6UserDashboard.html"
      })
      .when("/to_dashboard",{
        templateUrl:"/html/6UserDashboard.html"
      })
      .when("/move_to_admin_dashboard",{
        templateUrl:"/html/7_adminDashboard.html"
      })
      .when("/to_admin_dashboard",{
        templateUrl:"/html/7_adminDashboard.html"
      })
      .when("/create_task_by_admin",{
        templateUrl:"/html/9_CreateTask.html"
      })
      .when("/create_task_by_user",{
        templateUrl:"/html/9_CreateTask.html"
      })
      .when("/show_addons",{
        templateUrl:"/html/8_adminManageTask.html"
      })
      .when("/edit_task_by_user",{
        templateUrl:"/html/10_taskListuser.html"
      })
      .when("/mark_task_by_user",{
        templateUrl:"/html/10_taskListuser.html"
      })
      .when("/view_user_list",{
        templateUrl:"/html/12_viewUsers.html"
      })
      .when("/create_new_user_by_admin_to_assign_task",{
        templateUrl:"/html/11_viewtasks_admin.html"
      })
      .when("/create_task_by_admin",{
        templateUrl:"/html/14_CreateTaskByAdmin.html"
      })
      .when("/task_created_by_admin",{
        templateUrl:"/html/7_adminDashboard.html"
      })
      .when("/task_created_by_user",{
        templateUrl:"/html/6UserDashboard.html"
      })
      .when("/show_task_list_for_admin_to_edit",{
        templateUrl:"/html/13_tasklistAdmin.html"
      })
      .when("/show_task_list_for_admin_to_delete",{
        templateUrl:"/html/13_tasklistAdmin.html"
      })
      .when("/assign_task_to_new_user",{
        templateUrl:"/html/5_CreateUser.html"
      })
      .when("/move_to_admin_dashboard_after_new_user_created_and_task_assigned",{
        templateUrl:"/html/7_adminDashboard.html"
      });
  });



app.controller("maincontroller",function($scope,$rootScope){
   $scope.addTask = function() {
       $scope.todoList.push({user:$scope.user,taskname:$scope.task,status:false});
       alert("done adding task");
       console.log($rootScope.todoList);
       $scope.task = "";
     }
  $scope.addUser = function() {
         $scope.userList.push({userName:$scope.username,password:$scope.password,key:$scope.userKey}) ;
         alert("done adding user");
         console.log($rootScope.userList);
         $scope.username = "";
         $scope.password = "";
         $scope.userKey = "";
     }
  $scope.deleteTask=function(){
    var oldList=$scope.todoList;
    $scope.todoList=[];
    angular.forEach(oldList,function(x){
        if(!x.status){
          $scope.todoList.push(x);
        }
    });
  }
  $scope.approveTask=function(){
    var oldList=$scope.todoList;
    $scope.todoList=[];
    angular.forEach(oldList,function(x){
        if(!x.status){
          $scope.todoList.push(x);
        }
    });
    alert("task completed and approved by admin");
  }
});
