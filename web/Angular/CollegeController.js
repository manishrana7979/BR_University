app.controller("college",function($scope,angularService)
{
    $scope.GetCollege = function()
    {
        angularService.getCollegeList().then(function(response){
            if(response.data.Message == "Success")
            {
                $scope.CollegeList = response.data.CollegeList;
            }
            else{
                alert("No Data Found");
            }
        });
    }
    $scope.GetCollege();
});