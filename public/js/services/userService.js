// USER SERVICE
function userService($http) {
    return {
        datas: {},
        getUserName : function(id) {
            return $http.get('/user/' + id);
        },
        updateAccount : function(id, data){
            return $http.post('/user/' + id, data);
        },
        createAccount : function(data){
            return $http.post('/user', data).success(function(dat){  
                data.id = dat.id;
            });
        },
        delete : function(id) {
            return $http.delete('/user/' + id);
        }
    };
}
