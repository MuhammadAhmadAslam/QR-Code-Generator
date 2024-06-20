let url = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='
let input = document.getElementById('input')
let generate = document.getElementById('generate')
let image = document.getElementById('image')
let child = document.getElementById('child')
generate.addEventListener('click' , (e) => {
    if (input.value != '') {
        child.innerHTML = `<h1>QR Code Generator</h1>
        <div class="inputOrButton">
        <input type="text" id="input" placeholder="Enter a Text or URL">
        <button id="generate">Generate QR Code</button>
        </div>
        <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}" alt="" id="image">
        <button>Download QR Code</button>`
        
    }else{
        setTimeout(() => {
            document.getElementById('error').innerHTML = `<i class="fa-solid fa-circle-info"></i>  Please Enter A URL Or Text In Input Field`
            setTimeout(() => {
                document.getElementById('error').innerText =  ''
            }, 4000);
        }, 10);
    }
})