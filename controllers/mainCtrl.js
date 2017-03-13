app.controller('mainCtrl', mainCtrl);
mainCtrl.$inject = ["usersFactory"];

function mainCtrl(usersFactory) {
    this.addInfo = function() {
        this.showAdd = true;
    }
    this.logOut = function() {
        location.replace("#/login");
    }
    this.saveInfo = function(index) {
        usersFactory.users[index].phone = this.phone;
    }
}
