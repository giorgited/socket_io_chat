
function join_room(){
    namespace = '/test';
    var socket = io.connect(location.protocol + '//' + document.domain + ':' + location.port + namespace);
    socket.on('connect', function() {
        socket.emit('my_event', {data: 'I\'m connected!'});
    });
    socket.emit('join', {room: $('#room_name').val()});

    $.ajax({
        type: "POST",
        url: "/available_rooms",
        data: { 
                name: $('#join_name').val(),
                room: $('#room_name').val()
             },
        success: function(response){
            console.log(response)
        }
    });
    return false;
}