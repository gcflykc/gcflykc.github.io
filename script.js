// Menu Mobile
document.addEventListener('DOMContentLoaded', function() {
  // Adicionar botão de menu
  const menuToggle = document.createElement('div');
  menuToggle.className = 'menu-toggle';
  menuToggle.innerHTML = '☰';
  document.querySelector('header').prepend(menuToggle);
  
  // Alternar menu
  menuToggle.addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
  });
  
  // Fechar menu ao clicar em link
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector('nav').classList.remove('active');
    });
  });

  // Modais
  function setupModal(modalId, openClass, closeClass) {
    const modal = document.getElementById(modalId);
    const openBtns = document.querySelectorAll(openClass);
    const closeBtn = document.querySelector(closeClass);

    openBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
      });
    });

    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
  }

  // Inicializar modais
  setupModal('personalizeModal', '.open-personalize-modal', '.close');
  setupModal('contactModal', '.open-contact-modal', '.close');

  // Formulário de personalização
  document.getElementById('personalizeForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Personalização enviada! Em breve entraremos em contato.');
    this.reset();
    document.getElementById('personalizeModal').style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  // Formulário de contato
  document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
    this.reset();
    document.getElementById('contactModal').style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  // Efeito de digitação
  const typingElement = document.querySelector('.typing-effect');
  if (typingElement) {
    const texts = ["Energia", "Foco", "Performance"];
    let count = 0;
    let index = 0;
    let isDeleting = false;
    
    function type() {
      const currentText = texts[count];
      
      if (isDeleting) {
        typingElement.textContent = currentText.substring(0, index-1);
        index--;
      } else {
        typingElement.textContent = currentText.substring(0, index+1);
        index++;
      }
      
      if (!isDeleting && index === currentText.length) {
        isDeleting = true;
        setTimeout(type, 1500);
      } else if (isDeleting && index === 0) {
        isDeleting = false;
        count = (count + 1) % texts.length;
        setTimeout(type, 500);
      } else {
        setTimeout(type, isDeleting ? 100 : 200);
      }
    }
    
    type();
  }
});
