import { useEffect, useState } from "react";

function useAudio(url: string) {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
    console.log(playing);
  }, [playing]);

  return { playing, toggle };
}

export default useAudio;
