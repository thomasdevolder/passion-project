const changePage = (e) => {
    e.preventDefault(); 
    window.location.href = "pages/home.html"; 
}

const init = () => {
    if(document.querySelector(`.enter_form`)) {
        document.querySelector(`.enter_form`).addEventListener("submit", changePage);
    }
}; 

init(); 