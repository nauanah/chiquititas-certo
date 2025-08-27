document.addEventListener('DOMContentLoaded', () => {
    // Lógica para o tema claro/escuro
    const themeToggleButton = document.getElementById('theme-toggle');
    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });

    // Lógica para aumentar/diminuir a fonte
    const increaseFontButton = document.getElementById('increase-font');
    const decreaseFontButton = document.getElementById('decrease-font');
    
    // Define os tamanhos de fonte em um array
    const fontSizes = [16, 18, 20, 22]; // em pixels
    let currentFontSizeIndex = 0;

    increaseFontButton.addEventListener('click', () => {
        if (currentFontSizeIndex < fontSizes.length - 1) {
            currentFontSizeIndex++;
            document.body.style.fontSize = `${fontSizes[currentFontSizeIndex]}px`;
        }
    });

    decreaseFontButton.addEventListener('click', () => {
        if (currentFontSizeIndex > 0) {
            currentFontSizeIndex--;
            document.body.style.fontSize = `${fontSizes[currentFontSizeIndex]}px`;
        }
    });
});
