// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var btn = document.getElementById('send')
var txt = document.getElementById('chat_send_content')
btn.onclick = function(){
	txt.value = txt.value + '123'
}