



document.querySelector('.form-select').addEventListener('change', (e) => {
    const model = document.querySelector(".form-select").value
    //show spinning wheel next to select
    document.querySelector('.spinner').style.display="inline"
    document.querySelector('.btn').disabled = true

    //async request to set model, then show green checkmark

    console.log(model)

})

//Event to get predictions on AUIs
document.querySelector('.form-signin').addEventListener('submit', (e) => {
    e.preventDefaul\
    t()
    aui1 = document.querySelector('.aui1').value
    aui2 = document.querySelector('.aui2').value
    //fetch prediction score from API
    
}) 