var app =angular.module("mainApp",[]);

app.controller("CRUDController", function($scope){

    $scope.EmpList=[]; //empty array of employees

    $scope.AddData = function(){ //add data to the or array

        var emp = {
            Id : $scope.EmpList.length + 1,
            Name : $scope.Name,
            Salary : $scope.Salary
        };

        $scope.EmpList.push(emp); //push the emp to object to the array
        ClearModel(); //this will reset all the values to the default
    };

    //function delete data
    $scope.DeleteData = function(emp){

        var index = $scope.EmpList.indexOf(emp); //what index we want to Delete

        $scope.EmpList.splice(index,1);

    };

    //function selected datain array
    $scope.BindingSelectedData = function(emp){

        $scope.Id = emp.Id;
        $scope.Name = emp.Name;
        $scope.Salary = emp.Salary;

    };

    //function update data
    $scope.UpdateData = function(){

        $.grep($scope.EmpList,function(e){

            if(e.Id == $scope.Id){
                e.Name = $scope.Name;
                e.Salary = $scope.Salary;
            } 
        });

        ClearModel(); //clear model

    };

    function ClearModel(){
        $scope.Id=0;
        $scope.Name='';
        $scope.Salary=0;
    };

});