//Typed js Code
    var typed = new Typed(".auto-input", {
    strings: [" , I am"],
    typeSpeed:105,
    showCursor:false,
    })
    var typed = new Typed(".auto-input2", {
    strings: ["^150","Hakkeem"],
    typeSpeed:145,
    showCursor:false,
    })


    $("#submit-form").submit((e)=>{
        e.preventDefault()
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbzBBfve8ZvRXOqsnN7_0JDGnaV8IB3Ld6E7Qurha30XczXbgYkt1vAKpPLVrpK_u90/exec",
            data:$("#submit-form").serialize(),
            method:"get",
            success:function (response){
                alert("Form submitted successfully")
                window.location.reload()
                //window.location.href="https://google.com"
            },
            error:function (err){
                alert("Something Error")

            }
        })
    })
    
    const navLinks = document.querySelectorAll('.nav-item')
    const menuToggle = document.getElementById('navbarTogglerDemo03')
    const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})
    navLinks.forEach((l) => {
        if (screen.width < 992) {
            l.addEventListener('click', () => { bsCollapse.toggle() })
        }
    })