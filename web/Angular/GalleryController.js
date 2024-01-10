app.controller("gallery",function($scope,angularService)
{
    $scope.GetGallery = function()
    {
        angularService.getGalleryList().then(function(response){
            if(response.data.Message == "Success")
            {
                $scope.GalleryList = response.data.GalleryList;
            }
            else{
                alert("No Data Found");
            }
        });
    }
    $scope.GetGallery();
    
    $scope.btnName = "Submit";    

    $scope.SubmitGallery = function () {

        var img = document.getElementById("imgValue").src;

        var obj = {
            GalleryID: $scope.GalleryID,
            Event: $scope.event,
            Image: img
        };
    
        angularService.SubmitGallery(obj).then(function (response) {
            if (response.data.Message == "success")
             {

            if($scope.btnName == "Update"){
                alert("Update Sucess");
            }
            else {
                alert("Submit Sucess");
            }
            $scope.GetGallery();}
            else{
                alert("response.data.Message");
            }
        });
    
        // $scope.sudentid="";
    
        $scope.event = "";
        $scope.image = "";
        $scope.btnName = "Submit";
        
          // console.log($scope.StudentList);
        //   $scope.sudentid = ""
    }

    $scope.Editdata = function(v)

    {
        $scope.GalleryID = v.GalleryID;
        $scope.event = v.Event;
        $scope.image = v.Image;
        $scope.btnName = "Update";
    }
      
       
    


    $scope.Deletedata = function(id)
    {
        angularService.deleteGalleryById(id).then(function(response){
            if(response.data.Message == "success")
            {
                alert("Delete Success");
                $scope.GetGallery();
            }else{

                alert(response.data.Message);
            }


        });
    }
 
});
