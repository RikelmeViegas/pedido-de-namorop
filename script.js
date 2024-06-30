document.getElementById('accept-button').addEventListener('click', function() {
    // Adiciona classe de fade-out para efeito de transição
    document.querySelector('.container').classList.add('fade-out');
    
    // Aguarda a transição antes de redirecionar para o contrato de namoro
    setTimeout(function() {
        // Obtém a data atual
        var currentDate = new Date();
        var formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
        
        // Mensagem personalizada com a data atual
        var mensagem = `A partir desta data ${formattedDate}, eu assinei o contrato e aceito ser a namorada de Rikelmen, por que ...`;

        // Redirecionamento para o WhatsApp com a mensagem personalizada
        var whatsappLink = `https://wa.me/5583999497619?text=${encodeURIComponent(mensagem)}`;
        window.location.href = whatsappLink;
    }, 300); // Tempo em milissegundos correspondente à duração da transição (0.3 segundos)
});

document.getElementById('decline-button').addEventListener('mouseover', function() {
    var button = this;
    var container = document.querySelector('.container');
    var containerRect = container.getBoundingClientRect();
    var buttonRect = button.getBoundingClientRect();

    var newLeft = Math.random() * (containerRect.width - buttonRect.width);
    var newTop = Math.random() * (containerRect.height - buttonRect.height);

    button.style.position = 'absolute';
    button.style.left = newLeft + 'px';
    button.style.top = newTop + 'px';
});
