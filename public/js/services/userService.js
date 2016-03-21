// USER SERVICE
function userService($http) {
    return {
        datas: {},
        getUserById : function(id) {
            return $http.get('/user/' + id);
        },
        updateAccount : function(id, objProfile, objSearch){
            return $http.post('/user/' + id, {objProfile:objProfile,objSearch:objSearch});
        },
        createAccount : function(data){
            return $http.post('/user', data).success(function(dat){
                data._id = dat.id;
            });
        },
        delete : function(id) {
            return $http.delete('/user/' + id);
        }
    };
}
