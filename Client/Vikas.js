//always use Js file below the <script src="http://localhost:8000/socket.io/socket.io.js"></script>

const socket = io('http://localhost:8080');

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector(".container-message");

const append = (message,position)=>{
    const messageElement = document.createElement('div');
    messageElement.innerText=message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);

}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const message=messageInput.value;
    if(!messageInput.value){
        alert("please write your message.");
    }else{
        append(`You: ${message}`,'right');
        socket.emit('send',message);
    }
   
    messageInput.value='';

})

const name= prompt("Enter your name to join..")
socket.emit('new-user-joined', name);


socket.on('user-joined',name=>{
    
    append(`${name} joined the chat`,'left');

})
// If you get undefined then you need to fix data.name and data.message
socket.on('receive',data=>{
  
    append(`${data.name }:${data.message}`,'left');

})

socket.on('left',name=>{
    append(`${name}:left the chat`,'left');

})


   