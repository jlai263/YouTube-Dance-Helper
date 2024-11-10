chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log('Message received in content script:', request);
  
    function applySettings(video) {
      // Adjust playback speed
      if (request.speed !== undefined) {
        video.playbackRate = request.speed;
        console.log('Playback speed set to:', video.playbackRate);
      }
  
      // Mirror the video
      if (request.mirror !== undefined) {
        video.style.transform = request.mirror ? 'scaleX(-1)' : 'scaleX(1)';
        console.log('Video mirror state:', request.mirror);
      }
  
      // Set up looping
      if (request.loopStart !== undefined && request.loopEnd !== undefined) {
        // Remove existing event listener to prevent multiple loops
        video.removeEventListener('timeupdate', handleLoop);
        if (request.loopEnd > request.loopStart) {
          video.addEventListener('timeupdate', handleLoop);
          console.log('Looping between:', request.loopStart, 'and', request.loopEnd);
        } else {
          console.log('Invalid loop times. Looping disabled.');
        }
      }
  
      function handleLoop() {
        if (video.currentTime >= request.loopEnd || video.currentTime < request.loopStart) {
          video.currentTime = request.loopStart;
        }
      }
    }
  
    function getVideoElement() {
      return document.querySelector('video');
    }
  
    function waitForVideo(callback) {
      const video = getVideoElement();
      if (video) {
        callback(video);
      } else {
        console.log('Video element not found, retrying...');
        setTimeout(() => waitForVideo(callback), 500);
      }
    }
  
    waitForVideo((video) => {
      applySettings(video);
      sendResponse({ success: true });
    });
  
    return true; // Keep the message channel open for asynchronous response
  });
  