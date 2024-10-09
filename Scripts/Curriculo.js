document.getElementById("downloadBtn").addEventListener("click", function() {
    const link = document.createElement('a');
    link.href = './assets/curriculo.pdf';  // Caminho relativo para o PDF
    link.download = 'curriculo-felipe-maia.pdf';  // Nome do arquivo para o download
    link.click();
});