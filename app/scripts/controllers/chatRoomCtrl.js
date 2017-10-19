(function() {
    function chatRoomCtrl(Room, Message, $uibModal) {
      this.rooms = Room.all;
      this.addRoom = function() {
          $uibModal.open({
              templateUrl: '/templates/modal.html',
              size: 'md',
              controller: 'ModalCtrl as modal'
          });
      }
      this.selectRoom = function(room) {
        this.currentRoom = room;
        this.messages = Message.getByRoomId(this.currentRoom.$id);
        console.log(this.messages)
      }
  }

    angular
        .module('chat-app-6aa99')
        .controller('chatRoomCtrl', ['Room', 'Message', '$uibModal', chatRoomCtrl]);
})();
