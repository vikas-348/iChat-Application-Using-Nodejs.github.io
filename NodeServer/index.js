//Node Server which will handle socket.io connection.
const io = require('socket.io')(8080)

const users = {};

io.on('connection', socket => {

    socket.on('new-user-joined', name => {
        
        console.log("hello vikas",name);  
        
        users[socket.id] = name;
      

        socket.broadcast.emit('user-joined', name);

    });

    socket.on('send', message => {
        console.log(users[socket.id])
        socket.broadcast.emit('receive', {name: users[socket.id], message: message })
    });

    socket.on('disconnect', message => {
        socket.broadcast.emit('left', users[socket.id])
        delete users[socket.id];
    });
})      