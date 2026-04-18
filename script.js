// Inicializar EmailJS correctamente
(function(){
    emailjs.init("vbe0UhhvMv3RzatVL");
})();

// Obtener botón
const btn = document.getElementById('button');

// Escuchar envío del formulario
document.getElementById('contact_form')
.addEventListener('submit', function(event){
    event.preventDefault();

    btn.innerText = 'Enviando...';

    const serviceID = 'service_zh2nm87';
    const templateID = 'template_lmv611q';

    // Enviar formulario
    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        btn.innerText = 'Enviar Cotización';
        alert("Mensaje enviado con éxito, has contactado al grupo de servicio");
        this.reset();
    })
    .catch((err) => {
        btn.innerText = 'Enviar Cotización';
        console.error(err); // mejor para debug
        alert("Ocurrió un error al enviar el mensaje");
    });
});