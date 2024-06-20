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
        <button id="generate" >Generate QR Code</button>
        </div>
        <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}" alt="" id="image">
        <a href="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}" download="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}" id='btn'>Download QR Code</a>`
        let imgUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`
        let fileName = `qr-code-${input.value}.png`
        let btn = document.getElementById('btn')
        console.log(btn);
            btn.addEventListener('click', () => {
                const link = document.createElement('a');
                link.href = imgUrl;
                link.download = fileName;
                // link.click();
                console.log(true);
              });
        
    }else{
        setTimeout(() => {
            document.getElementById('error').innerHTML = `<i class="fa-solid fa-circle-info"></i>  Please Enter A URL Or Text In Input Field`
            setTimeout(() => {
                document.getElementById('error').innerText =  ''
            }, 4000);
        }, 10);
    }
})

