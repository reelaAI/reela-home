document.addEventListener('click', function (event) {
  const helpDropdown = document.getElementById('help-dropdown');
  // 如果点击的不是helpDropdown, 则隐藏下拉菜单
  if (!helpDropdown.contains(event.target)) {
    helpDropdown.removeAttribute('open');
  }

  const reelaDropdown = document.getElementById('reela-dropdown');
  // 如果点击的不是reelaDropdown, 则隐藏下拉菜单
  if (!reelaDropdown.contains(event.target)) {
    reelaDropdown.removeAttribute('open');
  }
});

function playOnHover(element) {
  // get inner video element
  const video = element.querySelector('video');
  if (video) {
    video.play();
  }
}

function pauseOnLeave(element) {
  // get inner video element
  const video = element.querySelector('video');
  if (video) {
    video.pause();
    video.currentTime = 0; // Reset video to start
  }
}

function toggleMute(element) {
  // get peer video element
  const video = element.parentElement.querySelector('video');
  if (video) {
    video.muted = !video.muted;
  }
  const volumeOnIcon = element.querySelector('.lucide-volume-2');
  const volumeOffIcon = element.querySelector('.lucide-volume-x');
  if (video.muted) {
    volumeOnIcon.classList.add('hidden');
    volumeOffIcon.classList.remove('hidden');
  } else {
    volumeOnIcon.classList.remove('hidden');
    volumeOffIcon.classList.add('hidden');
  }
}

function horizontalScroll(element, direction) {
  const scrollContainer = element.querySelector('.scroll-container');
  if (!scrollContainer) return;
  const scrollAmount = scrollContainer.clientWidth;
  scrollContainer.scrollBy({
    left: direction === 'left' ? -scrollAmount : scrollAmount,
    behavior: 'smooth',
  });
}

function playVideoFromOverlay(button) {
  const video = button.closest('[data-video-card]')?.querySelector('video');
  if (video) {
    video.play();
  }
}

function handleVideoPlay(video) {
  const overlay = video.parentElement.querySelector('[data-overlay]');
  if (!overlay) return;
  if (overlay.__reactivateTimeout) {
    clearTimeout(overlay.__reactivateTimeout);
    overlay.__reactivateTimeout = null;
  }
  overlay.classList.add('opacity-0', 'pointer-events-none');
}

function handleVideoPause(video) {
  const overlay = video.parentElement.querySelector('[data-overlay]');
  if (!overlay) return;
  if (overlay.__reactivateTimeout) {
    clearTimeout(overlay.__reactivateTimeout);
  }
  overlay.__reactivateTimeout = window.setTimeout(() => {
    overlay.classList.remove('opacity-0', 'pointer-events-none');
    overlay.__reactivateTimeout = null;
  }, 150);
}

function handleVideoEnded(video) {
  video.pause();
  video.currentTime = 0;
  handleVideoPause(video);
}

function activateLabel(element) {
  const labels = document.querySelectorAll('.video-category-label');
  labels.forEach((label) => {
    label.classList.remove('text-[#F7265B]');
  });
  element.classList.remove('text-gray-700', 'hover:text-gray-900');
  element.classList.add('text-[#F7265B]');
}

function videoTabClick(element, tabName) {
  const labels = document.querySelectorAll('.' + tabName);
  labels.forEach((label) => {
    label.classList.remove('bg-white', 'shadow-md', 'border-l-4', 'border-[#F7265B]');
    label.classList.add('bg-white/50');
    label.querySelector('h3').classList.remove('text-[#F7265B]');
  });

  element.classList.add('bg-white', 'shadow-md', 'border-l-4', 'border-[#F7265B]');
  element.classList.remove('bg-white/50');
  element.querySelector('h3').classList.add('text-[#F7265B]');

  // pause all videos
  pauseAllVideos();
}

function pauseAllVideos() {
  const videos = document.querySelectorAll('video');
  videos.forEach((video) => {
    if (video.paused) return; // Skip if already paused
    video.pause();
    video.currentTime = 0; // Reset video to start
  });
}

function initAutoScrollSections() {
  const sections = document.querySelectorAll('[data-auto-scroll]');
  sections.forEach((section) => {
    const scrollContainer = section.querySelector('.scroll-container');
    if (!scrollContainer) return;
    if (scrollContainer.scrollWidth <= scrollContainer.clientWidth) return;

    const scrollStep = () => {
      const atEnd = scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 2;
      if (atEnd) {
        scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollContainer.scrollBy({ left: scrollContainer.clientWidth, behavior: 'smooth' });
      }
    };

    let intervalId = window.setInterval(scrollStep, 6000);

    const restartInterval = () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
      intervalId = window.setInterval(scrollStep, 6000);
    };

    section.addEventListener('mouseenter', () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    });

    section.addEventListener('mouseleave', restartInterval);

    window.addEventListener('blur', () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    });

    window.addEventListener('focus', restartInterval);
  });
}

if (typeof window !== 'undefined') {
  Object.assign(window, {
    playOnHover,
    pauseOnLeave,
    toggleMute,
    horizontalScroll,
    playVideoFromOverlay,
    handleVideoPlay,
    handleVideoPause,
    handleVideoEnded,
    activateLabel,
    videoTabClick,
    pauseAllVideos,
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initAutoScrollSections();
});
