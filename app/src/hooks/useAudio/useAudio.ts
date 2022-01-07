import { useEffect, useState } from "react";

function useAudio(url: string) {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);
  const turnOff = () => setPlaying(false);

  useEffect(() => {
    audio.volume = 0.15
    playing ? audio.play() : audio.pause();
    console.log(playing);
  }, [playing]);

  return { playing, toggle, turnOff };
}

export default useAudio;
