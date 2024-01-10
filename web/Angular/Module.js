var app = angular.module("MyApp",[]);

app.directive('imgUpload', ['$rootScope',function (rootScope) {
    return {
      restrict: 'A',
      link: function (scope, elem, attrs) {
        var canvas = document.createElement("canvas");
        var extensions = 'jpeg ,jpg, png, gif';
        elem.on('change', function () {
        reader.readAsDataURL(elem[0].files[0]);
        var filename = elem[0].files[0].name;
  
          var extensionlist = filename.split('.');
          var extension =extensionlist[extensionlist.length - 1];
              if(extensions.indexOf(extension) == -1){
                  alert("File extension , Only 'jpeg', 'jpg', 'png', 'gif', 'bmp' are allowed.");       
  
              }else{
                      scope.file = elem[0].files[0];
                      scope.imageName = filename;
                  }
        });
  
              var reader = new FileReader();
              reader.onload = function (e) {
  
                scope.image = e.target.result;
                scope.$apply();
  
              }
          }
      }
  }]);