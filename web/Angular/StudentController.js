app.controller("student",function($scope,angularService)
{
    $scope.GetStudent = function()
    {
        angularService.getStudentList().then(function(response){
            if(response.data.Message == "Success")
            {
                $scope.StudentList = response.data.StudentList;
            }
            else{
                alert("No Data Found");
            }
        });
    }
    $scope.GetStudent();
    
    $scope.btnName = "Submit";    

    $scope.SubmitStudent = function () {
        var obj = {
            StudentID: $scope.StudentID,
            Name: $scope.name,
            FName: $scope.fname,
            MName: $scope.mname,
            MobileNo: $scope.mobile,
            DOB: $scope.dob,
            EmailID: $scope.email,
            Age: $scope.age,
            Address: $scope.address,
        };
    
        angularService.SubmitStudent(obj).then(function (response) {
            if (response.data.Message == "success")
             {

            if($scope.btnName == "Update"){
                alert("Update Sucess");
            }
            else {
                alert("Submit Sucess");
            }
            $scope.GetStudent();}
            else{
                alert("response.data.Message");
            }
        });
    
        // $scope.sudentid="";
    
        $scope.name = "";
        $scope.fname = "";
        $scope.mname = "";
        $scope.mobile = "";
        $scope.dob = "";
        $scope.email = "";
        $scope.age = "";
        $scope.address = "";
        $scope.btnName = "Submit";
        
          // console.log($scope.StudentList);
        //   $scope.sudentid = ""
    }

    $scope.Editdata = function(v)

    {
        $scope.StudentID = v.StudentID;
        $scope.name = v.Name;
        $scope.fname = v.FName;
        $scope.mname = v.MName;
        $scope.mobile = v.MobileNo;
        $scope.dob = v.DOB;
        $scope.email = v.EmailID;
        $scope.age = v.Age;
        $scope.address = v.Address;
        $scope.btnName = "Update";
    }
      
       
    


    $scope.Deletedata = function(id)
    {
        angularService.deleteStudentBuyId(id).then(function(response){
            if(response.data.Message == "success")
            {
                alert("Delete Success");
                $scope.GetStudent();
            }else{

                alert(response.data.Message);
            }


        });
    }
 
});
