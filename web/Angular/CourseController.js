app.controller("course",function($scope,angularService)
{
    $scope.GetCourse = function()
    {
        angularService.getCourseList().then(function(response){
            if(response.data.Message == "Success")
            {
                $scope.CourseList = response.data.CourseList;
            }
            else{
                alert("No Data Found");
            }
        });
    }
    $scope.GetCourse();
});