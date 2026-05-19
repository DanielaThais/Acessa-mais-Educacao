import { useEffect, useRef } from "react";
import type { ComponentPropsWithoutRef } from "react";
import { useAcessibilidade } from "../hooks/useAcessibilidade";

type CaptionTrack = {
  src: string;
  label: string;
  srcLang: string;
  default?: boolean;
};

type AccessibleVideoProps = ComponentPropsWithoutRef<"video"> & {
  captionTracks?: CaptionTrack[];
};

export default function AccessibleVideo({
  captionTracks = [],
  children,
  ...props
}: AccessibleVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { legendas } = useAcessibilidade();

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    Array.from(video.textTracks).forEach((track) => {
      track.mode = legendas ? "showing" : "disabled";
    });
  }, [legendas, captionTracks]);

  return (
    <video ref={videoRef} controls {...props}>
      {children}
      {captionTracks.map((track) => (
        <track
          key={`${track.srcLang}-${track.src}`}
          kind="captions"
          src={track.src}
          srcLang={track.srcLang}
          label={track.label}
          default={track.default}
        />
      ))}
    </video>
  );
}
