const onProgress = (event) => {
  const progressBar = document.querySelector(".progress-bar");
  const updatingBar = document.querySelector(".update-bar");

  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;

  console.log(event);

  if (event.detail.totalProgress === 1) {
    progressBar.classList.add("hide");
  } else {
    progressBar.classList.remove("hide");
  }
};

document.querySelector("model-viewer").addEventListener("progress", onProgress);
