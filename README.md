YouTube Enhancer Chrome Extension
YouTube Enhancer is a Chrome extension that allows you to control YouTube video playback

Features
Adjust Playback Speed: Fine-tune the playback speed to your preference, whether you want to slow down to catch details or speed up to save time.
Mirror Video: Useful for learning choreography, practicing sign language, or simply viewing the video from a different perspective.
Loop Specific Sections: Repeat a particular part of the video seamlessly without manually adjusting the playback position.

Installation
Clone or Download the Repository:

git clone https://github.com/jlai263/YouTube-Dance-Helper.git
Or download the ZIP file and extract it to a folder.

Load the Extension in Chrome:

Open Google Chrome and navigate to chrome://extensions/.
Enable Developer mode by toggling the switch in the top right corner.
Click on Load unpacked and select the folder where you placed the extension files.
Pin the Extension (Optional):

Click on the puzzle piece icon (Extensions) next to the address bar.
Find YouTube Enhancer in the list and click the pin icon to make it always visible.
Usage
Navigate to a YouTube Video:
Open any YouTube video in your Chrome browser.

Open the Extension Popup:
Click on the YouTube Enhancer icon in the Chrome toolbar.

Set Your Preferences:
Playback Speed: Use the input field to set a speed between 0.00 and 2.00.
Mirror Video: Check the box to mirror the video horizontally.
Loop Start and End:
Enter the minutes and seconds for the loop start time.
Enter the minutes and seconds for the loop end time.
Apply Settings:

Click the Apply Settings button.
The video will adjust according to your specified settings.
Screenshots

The extension popup with playback speed, mirror option, and loop time inputs.

Development
Folder Structure
manifest.json: Extension configuration file.
popup.html: HTML file for the extension's popup UI.
popup.js: JavaScript file handling the popup's logic.
content.js: JavaScript file that interacts with YouTube pages.
styles.css: CSS file for styling the popup UI.
icons/: Folder containing icon images for the extension.
screenshots/: Folder containing images for the README.
Build and Test
Make Changes:

Modify the code in popup.js, content.js, or popup.html as needed.
Reload the Extension:

After making changes, go to chrome://extensions/ and click the Reload button under YouTube Enhancer.
Refresh YouTube:

Refresh the YouTube page to ensure the updated content script is injected.

Thanks for reading and enjoy!
