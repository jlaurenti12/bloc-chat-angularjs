(function() {
    function chatRoomCtrl(Room, $uibModal) {
      this.rooms = Room.all;
      this.addRoom = function() {
          $uibModal.open({
              templateUrl: '/templates/modal.html',
              size: 'md',
              controller: 'ModalCtrl as modal'
          });
      }
  }

    angular
        .module('chat-app-6aa99')
        .controller('chatRoomCtrl', ['Room', '$uibModal', chatRoomCtrl]);
})();
