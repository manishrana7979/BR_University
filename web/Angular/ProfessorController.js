app.controller("professor",function($scope,angularService)
{
    $scope.GetProfessor = function()
    {
        angularService.getProfessorList().then(function(response){
            if(response.data.Message == "Success")
            {
                $scope.ProfessorList = response.data.ProfessorList;
            }
            else{
                alert("No Data Found");
            }
        });
    }
    $scope.GetProfessor();

    $scope.btnName = "Submit";    

    $scope.SubmitProfessor = function () {
        var obj = {
            ProfessorID: $scope.ProfessorID,
            Name: $scope.name,
            FName: $scope.fname,
            MName: $scope.mname,
            MobileNo: $scope.mobile,
            DOB: $scope.dob,
            EmailID: $scope.email,
            Age: $scope.age,
            Address: $scope.address,
            Specialization: $scope.special,
            Experience: $scope.exp,
        };
    
        angularService.SubmitProfessor(obj).then(function (response) {
            if (response.data.Message == "success")
             {

            if($scope.btnName == "Update"){
                alert("Update Sucess");
            }
            else {
                alert("Submit Sucess");
            }
            $scope.GetProfessor();}
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
        $scope.special = "";
        $scope.exp = "";
        $scope.btnName = "Submit";
    }
    $scope.Editdata = function(v)
    {
          // console.log($scope.StudentList);
        //   $scope.sudentid = ""
        $scope.ProfessorID = v.ProfessorID;
        $scope.name = v.Name;
        $scope.fname = v.FName;
        $scope.mname = v.MName;
        $scope.mobile = v.MobileNo;
        $scope.dob = v.DOB;
        $scope.email = v.EmailID;
        $scope.age = v.Age;
        $scope.address = v.Address;
        $scope.special = v.Specialization;
        $scope.exp = v.Experience;
        $scope.btnName = "Update";

    }
   

    $scope.Deletedata = function(id)
    {
        angularService.deleteProfessorById(id).then(function(response){
            if(response.data.Message == "success")
            {
                alert("Delete Success");
                $scope.GetProfessor();
            }else{

                alert(response.data.Message);
            }


        });
    }
});