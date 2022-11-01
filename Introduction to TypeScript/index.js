var score = [20, 45, 65, 199, 22];
var person = ["John", 40, true];

var Access;
(function (Access) {
    Access[Access["Admin"] = 0] = "Admin";
    Access[Access["TeamLead"] = 1] = "TeamLead";
    Access[Access["Employee"] = 2] = "Employee";
})(Access || (Access = {}));

var newEmployee = Access.Employee;
console.log(newEmployee);
