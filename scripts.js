document.addEventListener('DOMContentLoaded', () => {
  // Мобильное меню
  const menuToggle = document.getElementById('mobile-menu');
  const navMenu = document.querySelector('.nav-menu');
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    document.querySelector('.navbar').classList.toggle('active');
  });

  // Обработка подписки
  const newsletterForm = document.getElementById('newsletter-form');
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.elements['email'].value;
    alert(`¡Gracias por suscribirte, ${email}!`);
    newsletterForm.reset();
  });

  // Инициализация Swiper для галереи
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
      // для мобильных устройств
      0: {
        slidesPerView: 1
      },
      // для десктопа
      768: {
        slidesPerView: 3
      }
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const consentBlock = document.getElementById('cookie-consent');
  const consentButton = document.getElementById('cookie-accept');

  // Función para comprobar si existe la cookie de consentimiento
  function hasCookie(name) {
    return document.cookie.split(';').some(cookie => cookie.trim().startsWith(name + '='));
  }

  // Si no existe la cookie, mostramos el bloque
  if (!hasCookie('cookieConsent')) {
    consentBlock.style.display = 'flex';
  } else {
    consentBlock.style.display = 'none';
  }

  // Al hacer clic en el botón, se establece la cookie y se oculta el bloque
  consentButton.addEventListener('click', function() {
    // Establece la cookie por 1 año
    document.cookie = "cookieConsent=true; max-age=" + (60 * 60 * 24 * 365) + "; path=/";
    consentBlock.style.display = 'none';
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Selecciona todos los formularios en la página
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevenir envío real al servidor
      window.location.href = '/thanks.html'; // Redirigir a la página de "Gracias"
    });
  });
});
