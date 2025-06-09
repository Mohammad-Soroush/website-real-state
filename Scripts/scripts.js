document.addEventListener("DOMContentLoaded", function(){
    let popupbt = document.getElementById("popup");
    let closebt = document.querySelector(".close");
    
    setTimeout(function(){
        popupbt.style.display = "block";
        popupbt.style.justifyContent = "center";
       
    },5000);
    closebt.addEventListener( "click" , function(){
        popupbt.style.display = "none";
    });
});

document.querySelector(".dropdownbtn").addEventListener('click', function(){
    let dropdown = document.querySelector('.dropdown-content');
    let arrow = document.querySelector('.arrow');
    if(dropdown.style.display === "block"){
        dropdown.style.display = "none";
        arrow.classList.remove('rotate');
    }else{
        dropdown.style.display = "block";
        dropdown.classList.add('rotate');
    }
});
document.querySelector('.select-btn').addEventListener('click', function() {
    let selected = [];
    document.querySelectorAll('.dropdown-content input:checked').forEach(checkbox => {
        selected.push(checkbox.value);
    });
 });

document.querySelector('.delete-btn').addEventListener('click', function() {
    document.querySelectorAll('.dropdown-content input:checked').forEach(checkbox => {
        checkbox.checked = false;
    });
});

  function loginpage() {
    document.getElementById("loginpages").classList.add("show");
  }
  function closepage(){
    document.getElementById("loginpages").classList.remove("show");
  }