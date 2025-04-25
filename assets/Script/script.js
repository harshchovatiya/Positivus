
let x = 0;
function myFunction() {
    if (x === 0) {
        document.getElementById('mobile-menu').style.display = "block";
        document.getElementById('down').style.display = "none";
        document.getElementById('up').style.display = "block";
        x = 1;
    } else {
        document.getElementById('mobile-menu').style.display = "none";
        document.getElementById('down').style.display = "block";
        document.getElementById('up').style.display = "none";
        x = 0;
    }
}

function toggleAccordion(button) {
    const item = button.closest('.accordion-item');
    const content = item.querySelector('.accordion-content');
    const isActive = item.classList.contains('active');

    document.querySelectorAll('.accordion-item').forEach(i => {
      i.classList.remove('active');
      i.querySelector('.accordion-content').style.display = 'none';
      i.querySelector('button').textContent = '+';
      
    });

    if (!isActive) {
      item.classList.add('active');
      content.style.display = 'block';
      button.textContent = '-';
    }
  }



const swiperWrapper = document.querySelector('.swiper-wrapper');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = document.querySelectorAll('.swiper-slide').length;

    let currentIndex = 0;

    function updateSwiper() {
      swiperWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    }

    document.getElementById('nextBtn').addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSwiper();
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSwiper();
    });

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateSwiper();
      });
    });