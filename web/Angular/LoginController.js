app.controller("LoginCtrl",function($scope,angularService){


    $scope.SystemLogin = function(){
        
        angularService.getSystemLogin($scope.username).then(function(response){
                if(response.data.Message == "sucess")
                {
                    if(response.data.LoginData[0].UserID != undefined){
                        alert("Login Success and username is : "+response.data.LoginData[0].UserID);
                        window.location.href="index.html";
                     }else{
                        alert("Invalid UserId");
                     }
                }else{
                    alert("Invalid UserId");
                }

        });


    }

});