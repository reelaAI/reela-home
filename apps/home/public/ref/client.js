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

  const autoScrollData = element.__autoScrollData;
  if (autoScrollData) {
    autoScrollData.stop();
    if (direction === 'left') {
      autoScrollData.scrollPrev();
    } else {
      autoScrollData.scrollNext();
    }
    autoScrollData.start();
    return;
  }

  const scrollAmount = scrollContainer.clientWidth;
  const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
  const threshold = 2;

  if (direction === 'right') {
    if (scrollContainer.scrollLeft >= maxScrollLeft - threshold) {
      scrollContainer.scrollTo({ left: 0, behavior: 'auto' });
      return;
    }
    scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    return;
  }

  if (scrollContainer.scrollLeft <= threshold) {
    scrollContainer.scrollTo({ left: Math.max(maxScrollLeft, 0), behavior: 'auto' });
    return;
  }

  scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
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
    label.classList.remove('text-[#ff0058]');
  });
  element.classList.add('text-[#ff0058]');
}

function videoTabClick(element, tabName) {
  const labels = document.querySelectorAll('.' + tabName);
  labels.forEach((label) => {
    label.classList.remove('is-active', 'border-l-4', 'border-[#ff0058]', 'bg-white/10');
    label.classList.add('bg-white/5');
    label.dataset.active = 'false';
    const title = label.querySelector('.video-tab-title');
    if (title) {
      title.classList.remove('text-brand');
      title.classList.add('text-slate-200');
    }
  });

  element.classList.add('is-active', 'border-l-4', 'border-[#ff0058]', 'bg-white/10');
  element.classList.remove('bg-white/5');
  element.dataset.active = 'true';
  const activeTitle = element.querySelector('.video-tab-title');
  if (activeTitle) {
    activeTitle.classList.add('text-brand');
    activeTitle.classList.remove('text-slate-200');
  }

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
  initTestimonialCarousel();
});

function initAutoScrollSections() {
  const sections = document.querySelectorAll('[data-auto-scroll]');
  sections.forEach((section) => {
    const scrollContainer = section.querySelector('.scroll-container');
    if (!scrollContainer) return;

    const threshold = 2;
    const getScrollAmount = () => scrollContainer.clientWidth;
    const getMaxScrollLeft = () => scrollContainer.scrollWidth - scrollContainer.clientWidth;

    const scrollNext = () => {
      const maxScrollLeft = getMaxScrollLeft();
      if (maxScrollLeft <= 0) return;
      if (scrollContainer.scrollLeft >= maxScrollLeft - threshold) {
        scrollContainer.scrollTo({ left: 0, behavior: 'auto' });
        return;
      }
      scrollContainer.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
    };

    const scrollPrev = () => {
      const maxScrollLeft = getMaxScrollLeft();
      if (maxScrollLeft <= 0) return;
      if (scrollContainer.scrollLeft <= threshold) {
        scrollContainer.scrollTo({ left: Math.max(maxScrollLeft, 0), behavior: 'auto' });
        return;
      }
      scrollContainer.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
    };

    let intervalId = null;

    const start = () => {
      if (intervalId !== null) return;
      if (getMaxScrollLeft() <= 0) return;
      intervalId = window.setInterval(() => {
        scrollNext();
      }, 3000);
    };

    const stop = () => {
      if (intervalId === null) return;
      window.clearInterval(intervalId);
      intervalId = null;
    };

    const handleResize = () => {
      const maxScrollLeft = getMaxScrollLeft();
      if (maxScrollLeft <= 0) {
        scrollContainer.scrollTo({ left: 0, behavior: 'auto' });
        stop();
        return;
      }

      if (scrollContainer.scrollLeft > maxScrollLeft) {
        scrollContainer.scrollTo({ left: Math.max(maxScrollLeft, 0), behavior: 'auto' });
      }

      if (intervalId === null) {
        start();
      }
    };

    section.addEventListener('mouseenter', stop);
    section.addEventListener('mouseleave', start);
    section.addEventListener('touchstart', stop, { passive: true });
    section.addEventListener('touchend', start, { passive: true });
    section.addEventListener('touchcancel', start, { passive: true });

    window.addEventListener('blur', stop);
    window.addEventListener('focus', start);

    if (typeof ResizeObserver !== 'undefined') {
      const resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(scrollContainer);
    } else {
      window.addEventListener('resize', handleResize);
    }

    section.__autoScrollData = {
      scrollNext,
      scrollPrev,
      start,
      stop,
    };

    if (getMaxScrollLeft() > 0) {
      start();
    }
  });
}

function initTestimonialCarousel() {
  const carousels = document.querySelectorAll('[data-testimonial-carousel]');
  if (!carousels.length) return;

  carousels.forEach((carousel) => {
    const cards = Array.from(carousel.querySelectorAll('[data-carousel-card]'));
    if (!cards.length) return;

    const classMap = new Map();
    const videoClassMap = new Map();
    const textPanelClassMap = new Map();
    const quoteClassMap = new Map();
    const highlightClassMap = new Map();
    const avatarClassMap = new Map();

    cards.forEach((card) => {
      classMap.set(card, {
        base: card.dataset.baseClass || '',
        active: card.dataset.classActive || '',
        prev: card.dataset.classPrev || '',
        next: card.dataset.classNext || '',
        inactive: card.dataset.classInactive || '',
      });

      const videoContainer = card.querySelector('[data-video-container]');
      if (videoContainer) {
        videoClassMap.set(card, {
          element: videoContainer,
          base: videoContainer.dataset.videoBaseClass || '',
          active: videoContainer.dataset.videoClassActive || '',
          prev: videoContainer.dataset.videoClassPrev || '',
          next: videoContainer.dataset.videoClassNext || '',
          inactive: videoContainer.dataset.videoClassInactive || '',
        });
      }

      const textPanel = card.querySelector('[data-text-panel]');
      if (textPanel) {
        textPanelClassMap.set(card, {
          element: textPanel,
          base: textPanel.dataset.textPanelBaseClass || '',
          active: textPanel.dataset.textPanelClassActive || '',
          prev: textPanel.dataset.textPanelClassPrev || '',
          next: textPanel.dataset.textPanelClassNext || '',
          inactive: textPanel.dataset.textPanelClassInactive || '',
        });
      }

      const quote = card.querySelector('[data-quote]');
      if (quote) {
        quoteClassMap.set(card, {
          element: quote,
          base: quote.dataset.quoteBaseClass || '',
          active: quote.dataset.quoteClassActive || '',
          prev: quote.dataset.quoteClassPrev || '',
          next: quote.dataset.quoteClassNext || '',
          inactive: quote.dataset.quoteClassInactive || '',
        });
      }

      const highlight = card.querySelector('[data-highlight]');
      if (highlight) {
        highlightClassMap.set(card, {
          element: highlight,
          base: highlight.dataset.highlightBaseClass || '',
          active: highlight.dataset.highlightClassActive || '',
          prev: highlight.dataset.highlightClassPrev || '',
          next: highlight.dataset.highlightClassNext || '',
          inactive: highlight.dataset.highlightClassInactive || '',
        });
      }

      const avatar = card.querySelector('[data-avatar-container]');
      if (avatar) {
        avatarClassMap.set(card, {
          element: avatar,
          base: avatar.dataset.avatarBaseClass || '',
          active: avatar.dataset.avatarClassActive || '',
          prev: avatar.dataset.avatarClassPrev || '',
          next: avatar.dataset.avatarClassNext || '',
          inactive: avatar.dataset.avatarClassInactive || '',
        });
      }
    });

    const total = cards.length;
    const interval = Number.parseInt(carousel.dataset.interval || '0', 10);
    let activeIndex = cards.findIndex((card) => card.dataset.position === 'active');
    if (activeIndex < 0) {
      activeIndex = 0;
    }

    let rotateTimer = null;

    const applyPosition = (card, position) => {
      const classData = classMap.get(card);
      if (classData) {
        card.className = `${classData.base} ${classData[position] || ''}`.trim();
      }

      card.dataset.position = position;

      const cardIndex = Number.parseInt(card.dataset.index || '0', 10);
      const positionOrder =
        position === 'prev'
          ? 1
          : position === 'active'
          ? 2
          : position === 'next'
          ? 3
          : 10 + (Number.isNaN(cardIndex) ? 0 : cardIndex);
      card.style.order = String(positionOrder);

      const videoData = videoClassMap.get(card);
      if (videoData) {
        videoData.element.className = `${videoData.base} ${videoData[position] || ''}`.trim();
      }

      const textPanelData = textPanelClassMap.get(card);
      if (textPanelData) {
        textPanelData.element.className = `${textPanelData.base} ${textPanelData[position] || ''}`.trim();
      }

      const quoteData = quoteClassMap.get(card);
      if (quoteData) {
        quoteData.element.className = `${quoteData.base} ${quoteData[position] || ''}`.trim();
      }

      const highlightData = highlightClassMap.get(card);
      if (highlightData) {
        highlightData.element.className = `${highlightData.base} ${highlightData[position] || ''}`.trim();
      }

      const avatarData = avatarClassMap.get(card);
      if (avatarData) {
        avatarData.element.className = `${avatarData.base} ${avatarData[position] || ''}`.trim();
      }

      const soundToggle = card.querySelector('[data-sound-toggle]');
      if (soundToggle) {
        if (position === 'active') {
          soundToggle.classList.remove('hidden');
        } else {
          soundToggle.classList.add('hidden');
        }
      }

      const overlayButton = card.querySelector('[data-carousel-activate]');
      if (overlayButton) {
        if (position === 'active') {
          overlayButton.classList.add('hidden');
          overlayButton.setAttribute('tabindex', '-1');
        } else {
          overlayButton.classList.remove('hidden');
          overlayButton.removeAttribute('tabindex');
        }
      }

      const video = card.querySelector('video');
      if (!video) return;

      const soundButton = soundToggle;
      delete card.dataset.videoUserPaused;
      if (position === 'active') {
        card.setAttribute('data-video-card', '');
        video.setAttribute('data-video-element', '');
        video.setAttribute('loop', '');
        video.setAttribute('autoplay', '');
        video.setAttribute('controls', '');
        video.setAttribute('muted', '');
        video.muted = true;
        if (soundButton) {
          syncSoundIcon(soundButton, true);
        }
        pauseOtherVideos(video);
        try {
          video.currentTime = 0;
          video.play().catch(() => {
            /* Ignore playback errors triggered by browser policies */
          });
        } catch (error) {
          /* noop */
        }
      } else {
        card.removeAttribute('data-video-card');
        video.removeAttribute('data-video-element');
        video.removeAttribute('autoplay');
        video.removeAttribute('controls');
        video.removeAttribute('loop');
        video.pause();
        video.currentTime = 0;
        video.muted = true;
        if (soundButton) {
          syncSoundIcon(soundButton, true);
        }
      }
    };

    const goToIndex = (index) => {
      if (!cards.length) return;
      if (index === activeIndex) return;

      const nextIndex = (index + 1) % total;
      const prevIndex = (index - 1 + total) % total;

      cards.forEach((card, cardIndex) => {
        let position = 'inactive';
        if (cardIndex === index) {
          position = 'active';
        } else if (cardIndex === prevIndex) {
          position = 'prev';
        } else if (cardIndex === nextIndex) {
          position = 'next';
        }

        applyPosition(card, position);
      });

      activeIndex = index;
    };

    const goNext = () => {
      const nextIndex = (activeIndex + 1) % total;
      goToIndex(nextIndex);
    };

    const goPrev = () => {
      const prevIndex = (activeIndex - 1 + total) % total;
      goToIndex(prevIndex);
    };

    const stopRotate = () => {
      if (rotateTimer !== null) {
        window.clearInterval(rotateTimer);
        rotateTimer = null;
      }
    };

    const startRotate = () => {
      if (!interval || interval <= 0) return;
      stopRotate();
      rotateTimer = window.setInterval(goNext, interval);
    };

    const prevButton = carousel.querySelector('[data-carousel-prev]');
    const nextButton = carousel.querySelector('[data-carousel-next]');

    if (prevButton) {
      prevButton.addEventListener('click', () => {
        stopRotate();
        goPrev();
        startRotate();
      });
    }

    if (nextButton) {
      nextButton.addEventListener('click', () => {
        stopRotate();
        goNext();
        startRotate();
      });
    }

    const activateButtons = carousel.querySelectorAll('[data-carousel-activate]');
    activateButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        const card = button.closest('[data-carousel-card]');
        if (!card) return;
        const targetIndex = Number.parseInt(card.dataset.index || '-1', 10);
        if (Number.isNaN(targetIndex) || targetIndex < 0) return;
        stopRotate();
        goToIndex(targetIndex);
        startRotate();
      });
    });

    carousel.addEventListener('mouseenter', stopRotate);
    carousel.addEventListener('mouseleave', startRotate);
    carousel.addEventListener('focusin', stopRotate);
    carousel.addEventListener('focusout', () => {
      if (!carousel.contains(document.activeElement)) {
        startRotate();
      }
    });
    carousel.addEventListener('touchstart', stopRotate, { passive: true });
    carousel.addEventListener('touchend', startRotate, { passive: true });
    carousel.addEventListener('touchcancel', startRotate, { passive: true });

    goToIndex(activeIndex);
    startRotate();
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
        } else {
          video.pause();
        }
      });
    },
    { threshold: 0.6 }
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
