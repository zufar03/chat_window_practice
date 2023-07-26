let yes = false 
function yuborish1() {
    let text = document.f1.text
    let box = document.getElementById("box1")
    let box1 = document.getElementById("box2")

    if (yes == false) {
        box.innerHTML = box.innerHTML + "<h3>" +  text.value + "</h3>" 
        box.style.alignItems = "start"
        // text.focus()
        // text.value = ""
        
        yes = true
    }else{
        box1.innerHTML = box.innerHTML + "<h3>" +  text.value + "</h3>" 
        box1.style.alignItems = "end"
        
        yes = false
    }
    
    text.focus()
    text.value = ""
}

function yuborish2() {
    let text = document.f2.text1
    let box = document.getElementById("box3")
    box.innerHTML = box.innerHTML + "<h3>" +  text.value + "</h3>" 
    box.style.alignItems = "start"

    text.focus()
    text.value = ""
}

function yuborish3() {
    let text = document.f2.text1
    let box = document.getElementById("box4")
    box.innerHTML = box.innerHTML + "<h3>" +  text.value + "</h3>" 
    box.style.alignItems = "end"

    text.focus()
    text.value = ""
}