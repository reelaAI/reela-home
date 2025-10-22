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
  const card = button.closest('[data-video-card]');
  const video = card?.querySelector('[data-video-element]');
  if (video) {
    if (card) {
      delete card.dataset.videoUserPaused;
    }
    pauseOtherVideos(video);
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

function handleVideoPause(video, options) {
  const overlay = video.parentElement.querySelector('[data-overlay]');
  if (!overlay) return;
  if (overlay.__reactivateTimeout) {
    clearTimeout(overlay.__reactivateTimeout);
  }
  const card = video.closest('[data-video-card]');
  const userPaused = card?.dataset.videoUserPaused === 'true';
  const force = options?.force === true;
  const shouldShowOverlay = force || userPaused;

  if (!shouldShowOverlay) {
    overlay.classList.add('opacity-0', 'pointer-events-none');
    overlay.__reactivateTimeout = null;
    return;
  }

  overlay.__reactivateTimeout = window.setTimeout(() => {
    overlay.classList.remove('opacity-0', 'pointer-events-none');
    overlay.__reactivateTimeout = null;
  }, 150);
}

function handleVideoEnded(video) {
  video.pause();
  video.currentTime = 0;
  handleVideoPause(video, { force: true });
}

function pauseVideoOnClick(video) {
  if (video.paused) return;
  const card = video.closest('[data-video-card]');
  if (card) {
    card.dataset.videoUserPaused = 'true';
  }
  video.pause();
}

function toggleVideoSound(button) {
  const card = button.closest('[data-video-card]');
  const video = card?.querySelector('[data-video-element]');
  if (!video) return;
  video.muted = !video.muted;
  syncSoundIcon(button, video.muted);
}

function syncSoundIcon(button, muted) {
  const onIcon = button.querySelector('.icon-sound-on');
  const offIcon = button.querySelector('.icon-sound-off');
  if (!onIcon || !offIcon) return;
  if (muted) {
    onIcon.classList.add('hidden');
    offIcon.classList.remove('hidden');
  } else {
    onIcon.classList.remove('hidden');
    offIcon.classList.add('hidden');
  }
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

function pauseOtherVideos(currentVideo) {
  const videos = document.querySelectorAll('[data-video-element]');
  videos.forEach((video) => {
    if (video === currentVideo) return;
    if (video.paused) return;
    video.pause();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initAutoScrollSections();
  initVideoAutoplay();
});

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

function initVideoAutoplay() {
  const cards = document.querySelectorAll('[data-video-card]');
  if (!cards.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const container = entry.target;
        const video = container.querySelector('[data-video-element]');
        if (!video) return;
        const card = container.closest('[data-video-card]');
        const userPaused = card?.dataset.videoUserPaused === 'true';

        if (entry.isIntersecting) {
          if (!userPaused) {
            pauseOtherVideos(video);
            video.play().catch(() => {
              /* Ignore play errors triggered by browser policies */
            });
          }
        } else if (!video.paused) {
          video.pause();
        }
      });
    },
    { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: '-30% 0px -30% 0px' }
  );

  cards.forEach((card) => {
    const container = card.querySelector('[data-video-autoplay]');
    const video = card.querySelector('[data-video-element]');
    const soundToggle = card.querySelector('[aria-label="Toggle sound"]');

    if (!container || !video) return;

    video.muted = true;
    if (soundToggle) {
      syncSoundIcon(soundToggle, true);
    }

    observer.observe(container);
  });
}
