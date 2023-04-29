const modalEl = document.getElementById('modal')
const closeBtn = document.getElementById ('modal-close-btn')
const consenForm = document.getElementById ('consent-form')
const modalText = document.getElementById('modal-text')
const declineBtn = document.getElementById('decline-btn')
const modalChoiseBtn = document.getElementById('modal-choice-btns')

/*https://elegant-alpaca-def305.netlify.app/*/



setTimeout(function(){
    modalEl.style.display = 'inline'
},1500)
declineBtn.addEventListener('mouseenter', function(){
   
        modalChoiseBtn.classList.toggle('reverse')
   
})




closeBtn.addEventListener('click',function(){
    modalEl.style.display = 'none'
})

consenForm.addEventListener('submit',function(event){
    event.preventDefault()
    const consentFormData = new FormData(consenForm)
    const fullName = consentFormData.get('fullName')

    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="uploadText">
            Uploading your data to the dark web...
        </p>
    </div>
    `
   
    setTimeout(function(){
        document.getElementById ('uploadText').textContent = 'Making the sale...'
    },1500)
    setTimeout(function(){
        closeBtn.disabled = false
        document.getElementById ('modal-inner').innerHTML =`
        <h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>
        ` 
    },3000)
})
