// USER SERVICE
function userService($http) {
    return {
        datas: {},
        get : function() {
            return $http.get('/user');
        },
        updateAccount : function(id, data){
            return $http.post('/user/' + id, data);
        },
        createAccount : function(data) {
            return $http.post('/user', data);
        },
        delete : function(id) {
            return $http.delete('/user/' + id);
        }
    };
}
