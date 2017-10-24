(function() {
    function ModalCtrl(Room, $uibModalInstance, $cookies) {
        this.cancel = function () {
           $uibModalInstance.close();
        };

        this.submit = function () {
            Room.add(this.newRoom);
            $uibModalInstance.close();
        };

        this.createUsername = function () {
            $cookies.put('blocChatCurrentUser', this.username);
            $uibModalInstance.close();
        }
    }

    angular
        .module('chat-app-6aa99')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', '$cookies', ModalCtrl]);
})();
