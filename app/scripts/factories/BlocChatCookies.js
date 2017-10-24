(function() {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        
        if (!currentUser || currentUser === '') {
            $uibModal.open({
                templateUrl: '/templates/usernamemodal.html',
                size: 'sm',
                controller: 'ModalCtrl as modal',
                keyboard: false,
                backdrop: 'static'
            });
        }
    }

    angular
        .module('chat-app-6aa99')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
