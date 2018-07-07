// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const ipc = require('electron').ipcRenderer
const $ = require('jquery')

const btn = document.getElementById('send')
const txt = document.getElementById('chat_send_content')
const chatContent = document.getElementById('chat-content')

$("#chat_send_content").bind('keyup', function(event){
	if (event.keyCode == 13) {
		btn.onclick()
	}
})

btn.onclick = function(){
	chatContent.innerHTML = chatContent.innerHTML + 
											"<div class=\"message\">"	+
										      	"<div class=\"clearfix\">"	+
										      		"<div class=\"msg_content right\">"	+
										      			"<img src=\"./img/man.jpg\" title=\"man\" class=\"right\">"	+
										      			"<div class=\"bubble arrow_right\">"	+
										      				"<div class=\"arrow_content\">"	+
										      					"<div class=\"plain\">"	+
										      						"<pre>" + txt.value + "</pre>" +
										      					"</div>" +
										      				"</div>" +
										      			"</div>" +
										      		"</div>" +
										      	"</div>" +
										      "</div>";

	txt.value = '';
}