const btn = document.getElementById("btn")

btn.addEventListener("click", function(){
    let value = document.getElementById("data").value
    let queryOption = { active: true, currentWindow: true }

    chrome.tabs.query(queryOption, (tabs) => {
        console.log(tabs[0].id, value)
        chrome.tabs.sendMessage(
            tabs[0].id,
            {
                value
            },
            function (response){
                console.log(response.status)
            }
        )
    })
})