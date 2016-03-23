// USER SERVICE
function userNavBarService($location, userService, userFactory) {
    return {
        step: function(where) {
            if (where == 'next') {
                userFactory.prevCurrent = userFactory.current;
                userFactory.current++;
                if (userFactory.current > 3)  {
                    userService.update();
                }
            } else {
                userFactory.prevCurrent = userFactory.current;
                userFactory.current = where;
            }
            var path = '/userCreation/step-' + userFactory.current;
            $location.path(path);
        }
    };
}
