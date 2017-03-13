app.controller('mainCtrl', mainCtrl);
mainCtrl.$inject = ["registerFactory"];

function mainCtrl(registerFactory) {
    this.addInfo = function() {
        this.showAdd = true;
    }
    this.logOut = function() {
        location.replace("#/login");
    }
    this.saveInfo = function(index) {
        registerFactory.db[index].phone = this.phone;
    }
}
