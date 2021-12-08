console.log('extension running')

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

    if (request.message == "generate")
    {  
      console.log('message received')
      
      console.log(request.url);
      fetch(`127.0.0.1:5000/index/id=${request.url}`)
      .then(res=>res.json())
      .then(result=>{
        //console.log('reached near message');
        console.log(result.message);
        sendResponse({message: result});
        //sendResponse({message:"hi there"});
      })
      .catch(err=>{
        console.log('error generated')
        sendResponse({message:err})
      });
      return true;
    }
  }
      
);