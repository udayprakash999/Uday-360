function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}



let videoName = getQueryParam("name");
let videoUrl = getQueryParam("url");
document.title = `Uday360 || ${videoName}`; 
console.log(videoName, videoUrl);
let video = `${videoUrl}`;
document.addEventListener("DOMContentLoaded", () => {
  var  panorama, viewer;


  panorama = new PANOLENS.VideoPanorama(video, {
    loop: true,
    muted: false,
    autoplay: false,
    playsinline: true,
    crossOrigin: "anonymous",
  });

  viewer = new PANOLENS.Viewer({
    autoRotate: false,
    controlBar: true,
    autoplay: true,
    cameraFov: 75,
    controlButtons: ["video"],
  });

  viewer.add(panorama);
  viewer.mode = 1;

  const canvas = document.querySelector(".panolens-canvas");
  console.log(canvas);

  const gl =
    canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

  if (gl) {
    const maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
    console.log("Maximum texture size:", maxTextureSize);

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    console.log("Canvas size:", canvasWidth, "x", canvasHeight);
  } else {
    console.error("WebGL not supported on this browser/device.");
  }

  infospot = new PANOLENS.Infospot();
  infospot.position.set(0, 1000, -5000);
  infospot.visible = false;

  const hoverText = document.getElementById("hover");
  infospot.addHoverElement(hoverText);
  infospot.addEventListener("click", () => {
    changeMode();
    console.log("first");
  });

  panorama.add(infospot);
  viewer.add(panorama);

  const volumeButton = document.getElementById("volumeButton");

  function switchVolumeBtn() {
    if (panorama.isVideoMuted()) {
      panorama.unmuteVideo();
      volumeButton.classList.add("muted");
    } else {
      panorama.muteVideo();
      volumeButton.classList.remove("muted");
    }
  }
  volumeButton.addEventListener("click", switchVolumeBtn);
  const btnContainer = document.querySelector(".btn-container");
  const globe = document.getElementById("globe");

  function changeMode() {
    if (viewer.mode === 1) {
      panorama.playVideo();
      panorama.unmuteVideo();
      volumeButton.classList.add("muted");
      infospot.visible = true;
      viewer.hideVideoWidget();
      viewer.enableReticleControl();
      toggleFullscreenAndOrientation();
      viewer.enableEffect(2);
      globe.style.display = "none";
      volumeButton.style.display = "none";
      btnContainer.style.bottom = "0px";
    } else if (viewer.mode === 2) {
      btnContainer.style.bottom = "44px";
      volumeButton.style.display = "block";
      infospot.visible = false;
      globe.style.display = "block";
      viewer.showVideoWidget();
      toggleFullscreenAndOrientation();
      viewer.enableEffect(1);
      if (viewer.getControlId() == "device-orientation") {
        checkPermissionAndEnable();
      }
    }
  }

  let vrBtn = document.getElementById("vrBtn");
  vrBtn.addEventListener("click", () => {
    if (viewer.getControlId() == "orbit") {
      checkPermissionAndEnable();
    }
    changeMode();
  });

  globe.addEventListener("click", () => {
    checkPermissionAndEnable();
  });

  function toggleFullscreenAndOrientation() {
    if (viewer.mode === 1) {
      if (
        !document.fullscreenElement &&
        !document.mozFullScreenElement &&
        !document.webkitFullscreenElement &&
        !document.msFullscreenElement
      ) {
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
          document.documentElement.msRequestFullscreen();
        }
      }

      if (screen.orientation && screen.orientation.lock) {
        screen.orientation
          .lock("landscape")
          .catch((error) => console.log("Orientation lock failed: ", error));
      }
    } else if (viewer.mode === 2) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }

      if (screen.orientation && screen.orientation.lock) {
        screen.orientation
          .lock("portrait")
          .catch((error) => console.log("Orientation lock failed: ", error));
      }
    }
  }

  function checkPermissionAndEnable() {
    if (typeof DeviceMotionEvent.requestPermission === "function") {
      if (DeviceMotionEvent.permission === "granted") {
        enableSensor();
      } else {
        DeviceMotionEvent.requestPermission()
          .then((response) => {
            if (response === "granted") {
              enableSensor();
            } else {
              alert("Permission denied. Unable to access device orientation.");
            }
          })
          .catch((error) => {
            alert("Error requesting permission: " + error.message);
          });
      }
    } else {
      enableSensor();
    }
  }

  function enableSensor() {
    if (viewer.getControlId() == "orbit") {
      viewer.enableControl(1);
      console.log(viewer.getControlId());
    } else {
      viewer.enableControl(0);
    }
  }
});
