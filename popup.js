const btn = document.getElementById("btn")

btn.addEventListener("click", function(){
    btn.style.pointerEvents="none"
    let value = document.getElementById("data").value
    let id = document.getElementById("id").value
    let queryOption = { active: true, currentWindow: true }

    chrome.tabs.query(queryOption, (tabs) => {
        chrome.tabs.sendMessage(
            tabs[0].id,
            {
                id,
                value
            },
            function (response){
                btn.style.pointerEvents="auto"
            }
        )
    })
})