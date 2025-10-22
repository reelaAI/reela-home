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

function horizontalScroll(element, direction) {
  const scrollContainer = element.querySelector('.scroll-container');
  if (!scrollContainer) return;
  const scrollAmount = scrollContainer.clientWidth;
  scrollContainer.scrollBy({
    left: direction === 'left' ? -scrollAmount : scrollAmount,
    behavior: 'smooth',
  });
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

function pauseAllVideos(exceptVideo) {
  const videos = document.querySelectorAll('video');
  videos.forEach((video) => {
    if (video === exceptVideo) return;
    if (video.paused) return; // Skip if already paused
    video.pause();
    if (video.dataset.resetOnPause !== 'false') {
      video.currentTime = 0; // Reset video to start
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initAutoScrollSections();
  initScrollAutoplayVideos();
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

function updateSoundButton(button, isMuted) {
  const mutedIcon = button.querySelector('[data-sound-icon="muted"]');
  const unmutedIcon = button.querySelector('[data-sound-icon="unmuted"]');

  if (mutedIcon && unmutedIcon) {
    if (isMuted) {
      mutedIcon.classList.remove('hidden');
      unmutedIcon.classList.add('hidden');
    } else {
      mutedIcon.classList.add('hidden');
      unmutedIcon.classList.remove('hidden');
    }
  }

  button.setAttribute('aria-label', isMuted ? '开启声音' : '关闭声音');
  button.setAttribute('aria-pressed', String(!isMuted));
}

function syncSoundButtonForVideo(video) {
  const container = video.closest('[data-video-container]');
  if (!container) return;
  const button = container.querySelector('[data-sound-toggle]');
  if (!button) return;
  updateSoundButton(button, video.muted);
}

function toggleVideoMute(button) {
  const container = button.closest('[data-video-container]');
  if (!container) return;
  const video = container.querySelector('[data-autoplay-video]');
  if (!video) return;

  const newMutedState = !video.muted;
  video.muted = newMutedState;

  if (!newMutedState) {
    pauseAllVideos(video);
    const playPromise = video.play();
    if (playPromise) {
      playPromise.catch(() => {});
    }
  }

  updateSoundButton(button, newMutedState);
}

function initScrollAutoplayVideos() {
  const videos = Array.from(document.querySelectorAll('[data-autoplay-video]'));
  if (!videos.length || typeof IntersectionObserver === 'undefined') {
    videos.forEach((video) => {
      video.muted = true;
      video.controls = false;
      video.dataset.resetOnPause = 'false';
      syncSoundButtonForVideo(video);
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const video = entry.target;
      if (!(video instanceof HTMLVideoElement)) return;

      if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
        if (video.paused) {
          pauseAllVideos(video);
          const playPromise = video.play();
          if (playPromise) {
            playPromise.catch(() => {});
          }
        }
      } else if (!entry.isIntersecting && !video.paused) {
        video.pause();
      }
    });
  }, { threshold: [0.6] });

  videos.forEach((video) => {
    video.muted = true;
    video.controls = false;
    video.dataset.resetOnPause = 'false';
    video.setAttribute('playsinline', '');

    video.addEventListener('play', () => {
      pauseAllVideos(video);
      syncSoundButtonForVideo(video);
    });

    video.addEventListener('volumechange', () => {
      syncSoundButtonForVideo(video);
    });

    observer.observe(video);
    syncSoundButtonForVideo(video);
  });
}

function toggleMute(element) {
  toggleVideoMute(element);
}
