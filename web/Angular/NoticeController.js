app.controller("notice",function($scope,angularService)
{
    $scope.GetNotice = function()
    {
        angularService.getNoticeList().then(function(response){
            if(response.data.Message == "Success")
            {
                $scope.NoticeList = response.data.NoticeList;
            }
            else{
                alert("No Data Found");
            }
        });
    }
    $scope.GetNotice();
    
    $scope.btnName = "Submit";    

    $scope.SubmitNotice = function () {
        var obj = {
            NoticeID: $scope.NoticeID,
            Title: $scope.title,
            Description: $scope.dis,
        };
    
        angularService.SubmitNotice(obj).then(function (response) {
            if (response.data.Message == "success")
             {

            if($scope.btnName == "Update"){
                alert("Update Sucess");
            }
            else {
                alert("Submit Sucess");
            }
            $scope.GetNotice();}
            else{
                alert("response.data.Message");
            }
        });
    
        // $scope.sudentid="";
    
        $scope.title = "";
        $scope.dis = "";
        $scope.btnName = "Submit";
        
          // console.log($scope.StudentList);
        //   $scope.sudentid = ""
    }

    $scope.Editdata = function(v)

    {
        $scope.NoticeID = v.NoticeID;
        $scope.title = v.Title;
        $scope.dis = v.Description;
        $scope.btnName = "Update";
    }
      
       
    


    $scope.Deletedata = function(id)
    {
        angularService.deleteNoticeById(id).then(function(response){
            if(response.data.Message == "success")
            {
                alert("Delete Success");
                $scope.GetNotice();
            }else{

                alert(response.data.Message);
            }


        });
    }

});