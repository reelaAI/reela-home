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
  // prefer containers with radio state but fall back to the first scroll container
  const scrollContainer =
    element.querySelector('.scroll-container:has(:checked)') || element.querySelector('.scroll-container');
  if (!scrollContainer) return;
  scrollContainer.scrollBy({
    left: direction === 'left' ? -scrollContainer.offsetWidth : scrollContainer.offsetWidth,
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

function pauseAllVideos() {
  const videos = document.querySelectorAll('video');
  videos.forEach((video) => {
    if (video.paused) return; // Skip if already paused
    video.pause();
    video.currentTime = 0; // Reset video to start
    const overlay = video.closest('.video-wrapper')?.querySelector('.video-overlay');
    if (overlay) {
      overlay.classList.remove('opacity-0', 'pointer-events-none');
      overlay.setAttribute('aria-hidden', 'false');
    }
  });
}

function toggleVideoOverlay(button) {
  const wrapper = button.closest('.video-wrapper');
  if (!wrapper) return;
  const video = wrapper.querySelector('video');
  if (video) {
    toggleVideoPlayback(video);
  }
}

function toggleVideoPlayback(video) {
  const wrapper = video.closest('.video-wrapper');
  const overlay = wrapper?.querySelector('.video-overlay');
  if (!wrapper || !overlay) return;

  if (video.paused) {
    pauseAllVideos();
    video.play();
    overlay.classList.add('opacity-0', 'pointer-events-none');
    overlay.setAttribute('aria-hidden', 'true');
  } else {
    video.pause();
    overlay.classList.remove('opacity-0', 'pointer-events-none');
    overlay.setAttribute('aria-hidden', 'false');
  }
}

function resetVideoOverlay(video) {
  const wrapper = video.closest('.video-wrapper');
  const overlay = wrapper?.querySelector('.video-overlay');
  if (overlay) {
    video.pause();
    video.currentTime = 0;
    overlay.classList.remove('opacity-0', 'pointer-events-none');
    overlay.setAttribute('aria-hidden', 'false');
  }
}
