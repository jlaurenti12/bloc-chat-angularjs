(function() {
    function chatRoomCtrl(Room, Message, $uibModal, $cookies) {
      var promise = Room.all;
      this.currentRoom = null;
      this.currentUser = $cookies.get('blocChatCurrentUser');
      console.log(this.currentUser);


      promise.$loaded(rooms => {

      // now we set our `this.rooms` property the view needs
      this.rooms = rooms;

      // we use Firebase's `$keyAt` to get the id of the first record returned
      var id = rooms.$keyAt(0);

      // and the use Firebase's `$getRecord(id)` to get the entire first room object and pass that to `this.selectRoom`.
      this.selectRoom(rooms.$getRecord(id));

      });

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
        this.newMessage.content = null;
      }

      this.sendMessage = function() {
        this.currentUser =$cookies.get('blocChatCurrentUser');
        this.newMessage.roomId = this.currentRoom.$id;
        this.newMessage.username = this.currentUser;
        this.newMessage.sentAt = firebase.database.ServerValue.TIMESTAMP;
        Message.send(this.newMessage);
        this.newMessage.content = null;
      }
  }

    angular
        .module('chat-app-6aa99')
        .controller('chatRoomCtrl', ['Room', 'Message', '$uibModal', '$cookies', chatRoomCtrl]);
})();
