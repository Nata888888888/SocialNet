app.factory('usersFactory', usersFactory);

function usersFactory() {
    var db = [{
        firstName: "Petya",
        lastName: "Zhuk",
        userName: "Petro",
        password: "11",
        phone: "",
        country: "",
        city: "",
        skype: "",
        gitHub: "",
        description: ""
    }, {
        firstName: "Vova",
        lastName: "Pupkin",
        userName: "Vovan",
        password: "22",
        phone: "",
        country: "",
        city: "",
        skype: "",
        gitHub: "",
        description: ""
    }, {
        firstName: "Kolya",
        lastName: "Zhuk",
        userName: "Mykola",
        password: "333",
        phone: "",
        country: "",
        city: "",
        skype: "",
        gitHub: "",
        description: ""
    }];

    function addUser(firstName, lastName, userName, password) {
        db.push({
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            password: password
        });
    }
    return {
        addUser: addUser,
        users: db
    }
}
