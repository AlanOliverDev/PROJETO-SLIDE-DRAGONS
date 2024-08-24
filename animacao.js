       // JavaScript para criar o efeito de fumaça onde o usuário toca ou move o mouse
       document.addEventListener('mousemove', (e) => {
        createSmoke(e.clientX, e.clientY);
      });
  
      document.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];
        createSmoke(touch.clientX, touch.clientY);
      }, { passive: true });
  
      function createSmoke(x, y) {
        const smoke = document.createElement('div');
        smoke.className = 'smoke';
        smoke.style.left = `${x}px`;
        smoke.style.top = `${y}px`;
        document.querySelector('.smoke-container').appendChild(smoke);
  
        // Remove o elemento após a animação
        smoke.addEventListener('animationend', () => {
          smoke.remove();
        });
      }