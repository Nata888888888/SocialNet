function registerCtrlHandler(usersFactory) {
    function cleanView(view) {
        view.firstName = "";
        view.lastName = "";
        view.userName = "";
        view.password = "";
    }
    this.registerUser = function(firstName, lastName, userName, password) {
        usersFactory.addUser(firstName, lastName, userName, password);
        cleanView(this);
        location.replace("#/");
    }
    this.cancelRegister = function() {
        cleanView(this);
        location.replace("#/");
    }
}
app.controller('registerCtrl', registerCtrlHandler);
registerCtrlHandler.$inject = ['usersFactory'];
