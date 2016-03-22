// USER SERVICE
function userNavBarService($location, userService, userFactory) {
    return {
        step : function(where) {
            if (where == 'next') {
                userFactory.prevCurrent = userFactory.current;
                userFactory.current++;
                if (userFactory.current > 3) {
                    userService.update(userFactory.current);
                }
            } else {
                userFactory.prevCurrent = userFactory.current;
                userFactory.current = where;
            }
            $('body').css('background-image', 'none').css('background-image', 'url("./assets/accountCreation/step' + userFactory.current + '.jpg")');
            var path = '/userCreation/step-' + userFactory.current;
            $location.path(path);
        }
    };
}