function turnFirstLettersLower(text, number)
{
    outPutText = ""
    for(let i = 0; i < number; i++)
        {
            outPutText += text[i].toLowerCase()
        }
        outPutText += text.slice(number)
    return outPutText
}

document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault()
    let text = document.getElementById("text").value
    if(text.length < 3){
        text = text.toUpperCase()
    }
    else{
        text = turnFirstLettersLower(text, 3)
    }
    document.querySelector(".output").textContent = text
})