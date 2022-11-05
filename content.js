chrome.runtime.onMessage.addListener((request, sender, sendResponse)=>{
    let data=request.value
    let input_id = request.id.slice(0, -1)
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
            let id = input_id + (parseInt(i)+1)
            let input = document.getElementById(id)
            if(input!=null){
                input.value = value
            }
        }
    }
    let response = {status: "done"}
    setTimeout(() => {
        sendResponse(response)
    }, 500);
    return true
})