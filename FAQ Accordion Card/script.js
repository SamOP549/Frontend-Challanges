document.querySelectorAll("summary").forEach(summary2 => {
    summary2.addEventListener("click", event => {
        summary2.classList.toggle("obrnuto");  
        summary2.classList.toggle("podebljano");  
    })
  })