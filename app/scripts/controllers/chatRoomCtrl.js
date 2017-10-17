(function() {
    function chatRoomCtrl(Room) {
      this.rooms = Room.all;
    }

    angular
        .module('chat-app-6aa99')
        .controller('chatRoomCtrl', ['Room', chatRoomCtrl]);
})();
