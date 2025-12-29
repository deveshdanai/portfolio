
console.log("✅ Barba and scroll script loaded");
  import barba from 'https://cdn.jsdelivr.net/npm/@barba/core/+esm';

  // 🌀 Horizontal scroll fix
  function initHorizontalScroll() {
    const scrollers = document.querySelectorAll('.scroller');

    scrollers.forEach(scroller => {
      // Clear any existing listeners (in case of re-navigation)
      scroller.removeEventListener('wheel', handleScroll);
      scroller.addEventListener('wheel', handleScroll, { passive: false });
    });
  }

  function handleScroll(e) {
    this.scrollLeft += e.deltaY;
    e.preventDefault();
  }

  // ✅ Run on first page load
  document.addEventListener("DOMContentLoaded", initHorizontalScroll);

  // ✅ Barba transition + scroll re-init
  barba.init({
    transitions: [
      {
        name: 'fade',
        async leave({ current }) {
          current.container.classList.add('fade-leave');
          await new Promise(resolve => {
            requestAnimationFrame(() => {
              current.container.classList.add('fade-leave-active');
              setTimeout(resolve, 300); // match CSS transition time
            });
          });
        },
        enter({ next }) {
          next.container.classList.add('fade-enter');
          requestAnimationFrame(() => {
            next.container.classList.add('fade-enter-active');
          });
        },
        afterEnter({ next }) {
          next.container.classList.remove('fade-enter', 'fade-enter-active');
          initHorizontalScroll(); // ✅ rebind scroll after page enters
        },
        afterLeave({ current }) {
          current.container.classList.remove('fade-leave', 'fade-leave-active');
        }
      }
    ]
  });
