const input =document.querySelectorAll("input");
input.forEach(input => {
    input.addEventListener('change', ()=> {
        if (input.value !== "") {
            input.classList.add("campo-preenchido")
        }else {
            input.classList.remove("campo-preenchido")
        }
    })
})