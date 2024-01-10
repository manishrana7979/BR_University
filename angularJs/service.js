app.service('angularService',function($http){

    this.getAcadmicList = function()
    {
        return $http.get("http://192.168.1.139:5000/api/v2/acadmic/list");
    }

})