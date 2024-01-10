app.controller("acadmic",function($scope,angularService){

    $scope.GetAcad = function()
    {    angularService.getAcadmicList().then(function(response){
                if(response.data.Message == "sucess")
                {
                    $scope.AcadmicList = response.data.AcadmicList;
                }else{
                    alert("No Data Found");
                }
        });
    }
    
    $scope.GetAcad();
    
    
    });