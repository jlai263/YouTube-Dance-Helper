document.getElementById('apply').addEventListener('click', () => {
    const speed = parseFloat(document.getElementById('speed').value);
    const mirror = document.getElementById('mirror').checked;
  
    // Get Loop Start Time
    const loopStartMin = parseInt(document.getElementById('loopStartMin').value) || 0;
    const loopStartSec = parseInt(document.getElementById('loopStartSec').value) || 0;
    const loopStart = loopStartMin * 60 + loopStartSec;
  
    // Get Loop End Time
    const loopEndMin = parseInt(document.getElementById('loopEndMin').value) || 0;
    const loopEndSec = parseInt(document.getElementById('loopEndSec').value) || 0;
    const loopEnd = loopEndMin * 60 + loopEndSec;
  
    console.log('Apply Settings Clicked');
    console.log({ speed, mirror, loopStart, loopEnd });
  
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length === 0) {
        console.error('No active tab found.');
        return;
      }
      chrome.tabs.sendMessage(
        tabs[0].id,
        {
          speed,
          mirror,
          loopStart,
          loopEnd,
        },
        (response) => {
          if (chrome.runtime.lastError) {
            console.error('Error sending message:', chrome.runtime.lastError.message);
          } else if (response && response.success) {
            console.log('Settings applied successfully.');
          } else {
            console.error('Failed to apply settings:', response ? response.error : 'Unknown error');
          }
        }
      );
    });
  });
  