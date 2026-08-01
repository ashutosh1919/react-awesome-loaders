import ReactPlayer from "react-player";

interface VideoEmbedProps {
  url: string;
}

export function VideoEmbed({ url }: VideoEmbedProps) {
  return (
    <div className="player-wrapper">
      <ReactPlayer url={url} width="100%" height="100%" controls light />
    </div>
  );
}
