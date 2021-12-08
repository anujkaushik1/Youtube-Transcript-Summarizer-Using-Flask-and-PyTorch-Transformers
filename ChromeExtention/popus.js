const button=document.querySelector('.btn');
const summary=document.querySelector('.summary');
button.addEventListener('click',()=>{
    //console.log('here');
    button.classList.add('activebtn');
    summary.classList.add('active');
    summary.classList.add('loading');
   
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {message: "generate"}, function(response) {
        summary.classList.remove('loading');
        summary.innerHTML=response.message.message[0];
      });
   
    });
})