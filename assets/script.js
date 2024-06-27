document.addEventListener("DOMContentLoaded", function() {
    const text = document.querySelector('.nick2').textContent;
    const element = document.querySelector('.nick2');
    element.textContent = '';

    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        } else {
            setTimeout(() => {
                index = 0;
                element.textContent = '';
                typeWriter();
            }, 10000); 
        }
    }

    typeWriter();
});



