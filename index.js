const textArea = document.getElementById('textarea');
const totalChar = document.getElementById('total');
const leftChar = document.getElementById('remaining');

textArea.addEventListener('keyup', ()=>{
    updateCounter()
})
updateCounter();
function updateCounter(){
    
    totalChar.innerText = textArea.value.length;
    leftChar.innerText = textArea.getAttribute('maxlength') - textArea.value.length;

   
}