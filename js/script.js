document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault()
    let text = document.getElementById("text").value
    let outPutText = ""
    if(text.length <= 3)
    {
        outPutText = text.toUpperCase()
    }
    else
    {
        for(let i = 0; i < 3; i++)
        {
            outPutText += text[i].toUpperCase()
        }
        outPutText += text.slice(3)
    }
    document.querySelector(".output").textContent = outPutText
})