interface VideoPlayerElements {
  videoPlayer: HTMLVideoElement;
  playButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
  loopButton: HTMLButtonElement;
}

interface VideoPlayerProtocol {
  playToggle(): void;
  stop(): void;
  initEvents(): void;
}

export default class VideoPlayer implements VideoPlayerProtocol {
  private videoPlayer: HTMLVideoElement;
  private playButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;
  private loopButton: HTMLButtonElement;

  constructor(videoPlayerElements: VideoPlayerElements) {
    this.videoPlayer = videoPlayerElements.videoPlayer;
    this.playButton = videoPlayerElements.playButton;
    this.stopButton = videoPlayerElements.stopButton;
    this.loopButton = videoPlayerElements.loopButton;
  }

  initEvents(): void {
    this.playButton.addEventListener('click', () => {
      this.playToggle();
      this.videoPlayer.volume = 0.15;
      this.loopButton.classList.remove('loop');
    });

    this.stopButton.addEventListener('click', () => {
      this.stop();
      this.videoPlayer.loop = false;
      this.loopButton.classList.remove('loop-active');
    });

    this.loopButton.addEventListener('click', () => {
      this.loop();
      this.loopButton.classList.toggle('loop-active');
    });
  }

  playToggle(): void {
    if (this.videoPlayer.paused) {
      this.videoPlayer.play();
      this.playButton.innerText = 'Pause';
    } else {
      this.videoPlayer.pause();
      this.playButton.innerText = 'Play';
    }
  }

  stop(): void {
    this.videoPlayer.pause();
    this.videoPlayer.currentTime = 0;
    this.playButton.innerText = 'Play';
  }

  loop(): void {
    this.videoPlayer.loop = true;
  }
}

const videoPlayer = new VideoPlayer({
  videoPlayer: document.querySelector('.video') as HTMLVideoElement,
  playButton: document.querySelector('.play') as HTMLButtonElement,
  stopButton: document.querySelector('.stop') as HTMLButtonElement,
  loopButton: document.querySelector('.loop') as HTMLButtonElement
});

videoPlayer.initEvents();
