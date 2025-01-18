# Uday-360

This project is a 360° video player that allows users to experience immersive 360-degree videos with interactive controls. Built with **PANOLENS.js**, a WebGL-based library for 360-degree panoramic views, this project allows users to view videos in VR mode, control volume, and interact with video panoramas.

**Note**: PANOLENS.js is a deprecated library, but I chose to use it as part of my learning journey. I made necessary modifications to the library to suit my needs and create a custom 360° video player.

---

## Features

- **360° Video Playback**: View videos in an interactive 360-degree format.
- **VR Mode**: Switch between regular and VR viewing modes.
- **Volume Control**: Mute or unmute video playback with a simple button.
- **Device Orientation**: Use your device’s gyroscope to navigate the panorama (mobile support).
- **Fullscreen Mode**: Toggle fullscreen for an immersive viewing experience.

---

## Tech Stack

- **HTML/CSS/JavaScript**: The frontend structure and styling.
- **Three.js**: To back panolens.js 
- **PANOLENS.js**: A WebGL-based library for 360° panoramic videos.
- **WebGL**: For rendering the 360° video content.

---

## How It Works

### 1. **Video Selection**

   Users can browse a list of 360° videos. When a video is selected, it takes the user to a dedicated video page (`video.html`) where they can watch the selected 360° video.

### 2. **Interactive Video Player**

   On the video page, the video is rendered as a `PANOLENS.VideoPanorama`. Users can interact with the video by clicking on elements (e.g., the globe, volume button) or using device motion to control the viewing experience.

### 3. **Volume Control & VR Mode**

   Users can mute or unmute the video using a volume button. Additionally, VR mode enables full-screen interaction, ideal for immersive VR viewing.

---

## Setup & Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/360-video-viewer.git
   cd 360-video-viewer
   ```

2. Open `index.html` and `video.html` in your browser to test the application.

---

## Modifications to PANOLENS.js

As PANOLENS.js is deprecated, I made some necessary adjustments to the library to make it compatible with modern browsers and enhance functionality. These changes include:

- **Bug Fixes**: Addressed minor issues in video playback and device orientation features.
- **Customization**: Added custom event listeners and functionality to better suit my project’s requirements.
- **Optimizations**: Improved the performance and responsiveness of video rendering.

---

## Acknowledgements

- **PANOLENS.js**: This project relies on PANOLENS.js for rendering 360-degree panoramic videos. Though the library is no longer maintained, it served as a great learning tool.
- **WebGL**: For enabling 3D rendering in the browser.

---

## License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

---

Feel free to reach out if you have any questions or suggestions!
