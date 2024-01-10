app.controller("contact",function($scope,angularService)
{
    $scope.GetContact = function()
    {
        angularService.getContactList().then(function(response){
            if(response.data.Message == "Success")
            {
                $scope.ContactList = response.data.ContactList;
            }
            else{
                alert("No Data Found");
            }
        });
    }
    $scope.GetContact();
    
    $scope.btnName = "Submit";    

    $scope.SubmitContact = function () {
        var obj = {
            ContactID: $scope.ContactID,
            Name: $scope.name,
            MobileNo: $scope.mobile,
            EmailID: $scope.email,
            Message: $scope.message,
        };
    
        angularService.SubmitContact(obj).then(function (response) {
            if (response.data.Message == "success")
             {

            if($scope.btnName == "Update"){
                alert("Update Sucess");
            }
            else {
                alert("Submit Sucess");
            }
            $scope.GetContact();}
            else{
                alert("response.data.Message");
            }
        });
    
        // $scope.sudentid="";
    
        $scope.name = "";
        $scope.mobile = "";
        $scope.email = "";
        $scope.message = "";
        $scope.btnName = "Submit";
        
          // console.log($scope.StudentList);
        //   $scope.sudentid = ""
    }

    $scope.Editdata = function(v)

    {
        $scope.ContactID = v.ContactID;
        $scope.name = v.Name;
        $scope.mobile = v.MobileNo;
      
        $scope.email = v.EmailID;
    
        $scope.message = v.Message;
        $scope.btnName = "Update";
    }
      
       
    


    $scope.Deletedata = function(id)
    {
        angularService.deleteContactBuyId(id).then(function(response){
            if(response.data.Message == "success")
            {
                alert("Delete Success");
                $scope.GetContact();
            }else{

                alert(response.data.Message);
            }


        });
    }
 
});
