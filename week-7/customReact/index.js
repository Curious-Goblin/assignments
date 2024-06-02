const anchorData = {
    href: "https://chat.openai.com/",
    textData: "Open ChatGPT"
}
const button=document.getElementById("button")
button.addEventListener("click",handleClick)

function generateHtmlCode(anchorData) {
    const htmlCode=`<a href = ${anchorData.href} > ${anchorData.textData} </a>`
    return htmlCode
}

function handleClick(){
    const div=document.getElementById("anchor")
    div.innerHTML=generateHtmlCode(anchorData)
}
