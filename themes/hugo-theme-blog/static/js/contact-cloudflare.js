//--------------------------------------------------------------------------------
//################################################################################
//--------------------------------------------------------------------------------
window.onload=function()
{
	//------------------------------------------------------------
	//############################################################
	//------------------------------------------------------------
    document.getElementById('nav_contact_us').style.display = 'none';
    document.getElementById('contact').style.display = 'block';
    document.getElementById('human_test_tr').classList.remove('hidden');
    document.getElementById('name').focus();
	//------------------------------------------------------------
    const num1 = Math.floor(Math.random() * 899) + 100;
    const num2 = Math.floor(Math.random() * 899) + 100;
	//------------------------------------------------------------
    document.getElementById('human_test_text').innerText = `${num1}    ${num2}`;
	//------------------------------------------------------------
	//############################################################
	//------------------------------------------------------------
};
//--------------------------------------------------------------------------------
function handleSubmit()
{
    document.getElementById('form_status').innerHTML = `<span style="color: black;"></span>`;
    //--------------------------------------------------------------------------------
    let name = document.getElementById('name').value.replace(/^\s+/,'').replace(/\s+$/,'');
    let email = document.getElementById('email').value.replace(/\s*/g,'');
    let message = document.getElementById('message').value.replace(/^\s+/,'').replace(/\s+$/,'');
    let human_test = document.getElementById('human_test').value.replace(/^\s+/,'').replace(/\s+$/,'');
    //--------------------------------------------------------------------------------
    let human_test_text = document.getElementById('human_test_text').innerText.replace(/\s/g,'');
    //--------------------------------------------------------------------------------
    document.getElementById('name').value = name;
    document.getElementById('email').value = email;
    document.getElementById('message').value = message;
    document.getElementById('human_test').value = human_test;
    //--------------------------------------------------------------------------------
    document.getElementById('check_value').value = parseInt(human_test_text.substring(0, 3), 10) * parseInt(human_test_text.substring(3, 6), 10);
    //--------------------------------------------------------------------------------
    if(name===''){ document.getElementById('form_status').innerHTML = `<span style="color: red;">Name cannot be blank</span>`; document.getElementById('name').focus(); return false; }
    //----------------------------------------
    if(email===''){ document.getElementById('form_status').innerHTML = `<span style="color: red;">Email Address cannot be blank</span>`; document.getElementById('email').focus(); return false; }
    //----------------------------------------
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*\.\w+$/.test(email)){ document.getElementById('form_status').innerHTML = `<span style="color: red;">Invalid Email Address</span>`; document.getElementById('email').focus(); return false; }
    //----------------------------------------
    if(message===''){ document.getElementById('form_status').innerHTML = `<span style="color: red;">Message cannot be blank</span>`; document.getElementById('message').focus(); return false; }
    //----------------------------------------
    if(human_test.replace(/\s/g,'') !== human_test_text.replace(/\s/g,'')){ document.getElementById('form_status').innerHTML = `<span style="color: red;">Please enter the two numbers displayed next to the form</span>`; document.getElementById('human_test').value = ''; document.getElementById('human_test').focus(); return false; }
    //--------------------------------------------------------------------------------
    let contactForm = document.getElementById('contact');
    let formData = new FormData(contactForm);
    //--------------------------------------------------------------------------------
    fetch('https://blog.timbrockley.co.uk/form-submit/', {
    method: 'POST',
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
    })
    .then(response =>
    {
        if(response.status===200)
        {
            response.text()
            .then(data =>
            {
                document.getElementById('form_status').innerHTML = `<span style="color: green;">form submitted</span>`;
                document.getElementById('name').disabled = true;
                document.getElementById('email').disabled = true;
                document.getElementById('message').disabled = true;
                document.getElementById('human_test').disabled = true;
                document.getElementById('submit').disabled = true;
            });
        }
        else
        {
            throw('status: '+response.status+': statusText: '+response.statusText);
        }
    })
    .catch((error) => document.getElementById('form_status').innerHTML = `<span style="color: red;">${error}</span>`);
    //--------------------------------------------------------------------------------
    return false;
    //--------------------------------------------------------------------------------
}
//------------------------------------------------------------
//################################################################################
//--------------------------------------------------------------------------------