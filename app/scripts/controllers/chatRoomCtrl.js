(function() {
    function chatRoomCtrl(Room, Message, $uibModal, $cookies) {
      this.rooms = Room.all;
      this.currentRoom = null;
      this.currentUser = $cookies.get('blocChatCurrentUser');
      console.log(this.currentUser);

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
      }
  }

    angular
        .module('chat-app-6aa99')
        .controller('chatRoomCtrl', ['Room', 'Message', '$uibModal', '$cookies', chatRoomCtrl]);
})();
