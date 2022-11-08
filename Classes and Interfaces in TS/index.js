var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(username, password, age) {
        this.username = username;
        this.password = password;
        this.age = age;
    }
    User.prototype.showData = function () {
        console.log("Hello, " + this.username);
    };
    User.prototype.editPassword = function (newPassword) {
        this.password = newPassword;
    };
    return User;
}());
var AdminUser = /** @class */ (function (_super) {
    __extends(AdminUser, _super);
    function AdminUser(username, password, age, email) {
        var _this = _super.call(this, username, password, age) || this;
        _this.email = email;
        return _this;
    }
    AdminUser.prototype.showData = function () {
        console.log("Hello, " + this.username);
        console.log("Your email is : " + this.email);
    };
    return AdminUser;
}(User));
var john = new User("John", "abc123", 54);
john.showData();
// john.editPassword("abc123");
var adminJane = new AdminUser("Jane", "jane123", 36, "jane@hello.com");
adminJane.showData();
