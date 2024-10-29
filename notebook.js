document.addEventListener('DOMContentLoaded', function() {
    const paperLeft = document.querySelector('.paperLeft');
    const paperRight = document.querySelector('.paperRight');
  
    let clickTimer;
    let isFolding = false;
    let startX, startY;
    let currentElement;
    let currentDirection;
  
    function startFoldAnimation(element, direction, mouseX, mouseY) {
      isFolding = true;
      currentElement = element;
      currentDirection = direction;
      startX = mouseX;
      startY = mouseY;
  
      element.style.transition = 'none';
      element.style.transformOrigin = direction === 'left' ? 'bottom right' : 'bottom left';
      updateFoldAnimation(mouseX, mouseY);
    }
  
    function updateFoldAnimation(mouseX, mouseY) {
      if (!isFolding || !currentElement) return;
  
      const deltaX = mouseX - startX;
      const deltaY = mouseY - startY;
  
      const foldIntensityX = Math.min(Math.max(deltaX / 5, -45), 45);
      const foldIntensityY = Math.min(Math.max(deltaY / 5, -45), 45);
  
      let rotation;
      let clipPath;
  
      if (currentDirection === 'left') {
        rotation = `perspective(800px) rotateX(${foldIntensityY}deg) rotateY(${Math.abs(foldIntensityX)}deg)`;
        clipPath = `polygon(0% 0%, 100% 0%, 100% 100%, ${Math.abs(foldIntensityX)}% ${Math.abs(foldIntensityY)}%)`;
      } else if (currentDirection === 'right') {
        rotation = `perspective(800px) rotateX(${foldIntensityY}deg) rotateY(${-Math.abs(foldIntensityX)}deg)`;
        clipPath = `polygon(${100 - Math.abs(foldIntensityX)}% ${Math.abs(foldIntensityY)}%, 0% 0%, 0% 100%, 100% 100%)`;
      }
  
      currentElement.style.transform = rotation;
      currentElement.style.boxShadow = 'inset 0px 0px 15px rgba(0, 0, 0, 0.3)';
      currentElement.style.clipPath = clipPath;
  
      // Update fold back effect
      if (!currentElement.querySelector('.back-fold')) {
        const backFold = document.createElement('div');
        backFold.className = 'back-fold';
        backFold.style.position = 'absolute';
        backFold.style.top = '0';
        backFold.style.right = currentDirection === 'left' ? '0' : 'auto';
        backFold.style.left = currentDirection === 'right' ? '0' : 'auto';
        backFold.style.width = '100%';
        backFold.style.height = '100%';
        backFold.style.background = 'linear-gradient(135deg, #f0f0f0, #e0e0e0)';
        backFold.style.transform = 'rotateY(180deg)';
        backFold.style.transformOrigin = currentDirection === 'left' ? 'right' : 'left';
        backFold.style.pointerEvents = 'none';
        currentElement.appendChild(backFold);
      }
    }
  
    function resetFoldAnimation(element) {
      isFolding = false;
      element.style.transition = 'all 0.5s ease';
      element.style.transform = 'rotateY(0deg)';
      element.style.boxShadow = 'none';
      element.style.clipPath = 'none';
      const backFold = element.querySelector('.back-fold');
      if (backFold) {
        element.removeChild(backFold);
      }
    }
  
    function handleMouseDown(event, element, direction) {
      clickTimer = setTimeout(() => {
        startFoldAnimation(element, direction, event.clientX, event.clientY);
      }, 200);
    }
  
    function handleMouseMove(event) {
      if (isFolding) {
        updateFoldAnimation(event.clientX, event.clientY);
      }
    }
  
    function handleMouseUp(event) {
      clearTimeout(clickTimer);
      if (isFolding && currentElement) {
        resetFoldAnimation(currentElement);
      }
    }
  
    function handleMouseLeave(event) {
      clearTimeout(clickTimer);
      if (isFolding && currentElement) {
        resetFoldAnimation(currentElement);
      }
    }
  
    // Add event listeners for the entire screen
    document.addEventListener('mousedown', (event) => {
      const screenWidth = window.innerWidth;
      if (event.clientX < screenWidth / 2) {
        handleMouseDown(event, paperLeft, 'left');
      } else if (event.clientX > screenWidth / 2) {
        handleMouseDown(event, paperRight, 'right');
      }
    });
  
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
  });