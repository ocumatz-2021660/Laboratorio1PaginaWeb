
    const btnCorreo = document.getElementById('btn-correo');
    const ventanaCorreo = document.getElementById('ventana-correo');

    btnCorreo.addEventListener('click', (e) => {
        e.stopPropagation();
        ventanaCorreo.style.display = "block";
    });

    document.addEventListener('click', (e) => {
        if (!ventanaCorreo.contains(e.target)) {
            ventanaCorreo.style.display = "none";
        }
    });

