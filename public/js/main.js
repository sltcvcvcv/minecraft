$(function() {
  
    const $msg = $('.ntm'); // Input for ntm
  
    const socket = io();
  
    // Whenever the server emits 'new message', update the chat body
    socket.on('ccjacqob', (data) => {
      $msg.replaceWith(data);
    });
  
  
  });
  