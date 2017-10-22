(function() {
    function chatRoomCtrl(Room, Message, $uibModal, $cookies) {
      this.rooms = Room.all;
      console.log(this.rooms);
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
        this.username = this.currentUser;
        this.messages = Message.getByRoomId(this.currentRoom.$id);
      }

      this.sendMessage = function() {
        this.newMessage.roomId = this.currentRoom.$id;
        this.newMessage.username = this.currentUser;
        Message.send(this.newMessage);
      }
  }

    angular
        .module('chat-app-6aa99')
        .controller('chatRoomCtrl', ['Room', 'Message', '$uibModal', '$cookies', chatRoomCtrl]);
})();
