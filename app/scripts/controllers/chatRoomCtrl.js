(function() {
    function RoomCtrl(Room) {
      this.rooms = Room.all;
    }

    angular
        .module('chat-app-6aa99')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})();
