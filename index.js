const schemeModes = ["monochrome", "monochrome-dark", "monochrome-light",
"analogic", "complement", "analogic-complement", "triad", "quad"]

let test = []

const selectMode = document.getElementById("color-selector")
const inputColor = document.getElementById("color-input")
const colorsContainer = document.getElementById("colors-container")



for(let scheme of schemeModes){
    document.getElementById("color-selector").innerHTML += `<option value="${scheme}">${scheme}</option>`
}


function renderHtml(data){
    for(let i=0; i<5; i++){
        colorsContainer.innerHTML +=
        `<div class = "color-container">
            <div class = "single-color-container" style = "background-color:${data.colors[i].hex.value}"></div>
            <p>${data.colors[i].hex.value}</p>
        </div>`
    }
}


function fetchColors(){
        const cleanHex = inputColor.value.slice(1) 
        fetch(`https://www.thecolorapi.com/scheme/?hex=${cleanHex}&mode=${selectMode.value}`)
        .then(response => response.json())
        .then(data => renderHtml(data))
}

document.getElementById("color-form").addEventListener("submit", function(e) {
        e.preventDefault()
        colorsContainer.innerHTML = ""
        fetchColors()
    })

fetchColors()

