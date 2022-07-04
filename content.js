chrome.runtime.onMessage.addListener((request, sender, sendResponse)=>{
    let data=request.value
    let array = []
    if(data!=null){
        for(let i of data.split("\n")){
            array.push(i)
        }
        for(let i in array){
            let value = array[i]
            if(value==""){
                continue
            }
            value = parseFloat(value).toFixed(2)
            if(value==0 || value==0.00){
                value=0.01
            }
            let id = "5116877-74966602953_29261844_" + (parseInt(i)+1)
            document.getElementById(id).value = value
        }
    }
    let response = {status: "done"}
    sendResponse(response)
})