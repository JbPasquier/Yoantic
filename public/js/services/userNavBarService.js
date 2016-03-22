// USER SERVICE
function userNavBarService($location, userService) {
    return {
        current : 0,
        prevCurrent : 0,
        step : function(where) {
            console.log(this.current);
            if (where == 'next') {
                this.prevCurrent = this.current;
                this.current++;
                if(this.current == 3) {
                    userService.datas._id = userService.createAccount(userService.datas);
                } else if (this.current > 3) {
                    userService.update(this.current);
                }
            } else {
                this.prevCurrent = this.current;
                this.current = where;
            }
            $('body').css('background-image', 'none').css('background-image', 'url("./assets/accountCreation/step' + this.current + '.jpg")');
            var path = '/userCreation/step-' + this.current;
            $location.path(path);
        }
    };
}