(function() {
    function ModalCtrl(Room, $uibModalInstance) {
        this.cancel = function () {
           $uibModalInstance.close();
        };

        this.submit = function () {
            Room.add(this.newRoom);
            $uibModalInstance.close();
        };
    }

    angular
        .module('chat-app-6aa99')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();
