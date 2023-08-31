import './styles.css';

export const MediaFiles = () => {
  return (
    <div>
      <video width="250" controls className="video">
        <source
          src="https://images.all-free-download.com/footage_preview/mp4/cute_wild_deer_grazing_in_nature_6892279.mp4"
          type="video/mp4"
        ></source>
      </video>
      <audio
        className="audio"
        controls
        src="https://cdn.pixabay.com/download/audio/2022/12/22/audio_fb4198257e.mp3"
      ></audio>
      <iframe
        className="iframe"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=LgKlFaioZ9sGcTAe"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};
