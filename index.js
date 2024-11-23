const card = document.querySelector('.card-n');
const audio = document.getElementById('audio-navidad');

function fadeIn(audioElement, duration = 1000) {
    audioElement.volume = 0; // Inicia con volumen cero
    audioElement.play();
    let step = 0.1; // Incremento del volumen
    let interval = duration / 10; // Duración dividida en pasos

    const fadeInInterval = setInterval(() => {
        if (audioElement.volume < 1) {
            audioElement.volume = Math.min(audioElement.volume + step, 1);
        } else {
            clearInterval(fadeInInterval);
        }
    }, interval);
}

function fadeOut(audioElement, duration = 1000) {
    let step = 0.1; // Decremento del volumen
    let interval = duration / 10; // Duración dividida en pasos

    const fadeOutInterval = setInterval(() => {
        if (audioElement.volume > 0) {
            audioElement.volume = Math.max(audioElement.volume - step, 0);
        } else {
            clearInterval(fadeOutInterval);
            audioElement.pause();
            audioElement.currentTime = 0; // Reinicia el audio
        }
    }, interval);
}

card.addEventListener('click', function() {
    const isOpen = card.classList.contains('open-n');
    card.classList.toggle('open-n');

    // Solo activar confeti y fadeIn si se está abriendo la tarjeta
    if (!isOpen) {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });
        fadeIn(audio, 1500); // Efecto de fade in al abrir la tarjeta
    } else {
        fadeOut(audio, 1500); // Efecto de fade out al cerrar la tarjeta
    }
});
