const socket=io('http://localhost:8080');

const form = document.getElementById('send-container');

const messageInput = document.getElementById('messageInp');

const messageContainer = document.querySelector(".container-message");

const name=  prompt("Please join");


console.log("hello vikas");  