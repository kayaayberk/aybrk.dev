'use client';

import Image from 'next/image';
import { Button } from './ui/button';
import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';
import { Pause, Play, SkipForward, Volume2 } from 'lucide-react';

function AudioPlayer({ audioUrl, imageUrl, playlist }) {
  const { theme } = useTheme();
  const playerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [play, setPlay] = useState(false);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    const audio = playerRef.current;
    const setAudioData = () => {
      setProgress(audio.currentTime / audio.duration);
    };

    const resetAudio = () => {
      setProgress(0);
      setPlay(false);
    };

    audio.addEventListener('timeupdate', setAudioData);
    audio.addEventListener('ended', resetAudio);

    return () => {
      audio.removeEventListener('timeupdate', setAudioData);
      audio.removeEventListener('ended', resetAudio);
    };
  }, []);

  const handlePlay = () => {
    if (play) {
      playerRef?.current?.pause();
      setPlay((prev) => !prev);
    } else {
      playerRef?.current?.play();
      setPlay((prev) => !prev);
    }
  };

  const handleVolume = (e) => {
    setVolume(e.target.value);
    playerRef.current.volume = e.target.value;
  };

  const handleScrub = (e) => {
    const scrubTime = e.target.value * playerRef.current.duration;
    playerRef.current.currentTime = scrubTime;
  };

  return (
    <div className={`mb-5 flex $${playlist ? 'w-full' : 'w-1/2'} items-center gap-2`}>
      {imageUrl && (
        <div>
          <Image src={imageUrl && imageUrl} alt={title} />
        </div>
      )}

      <div className='flex w-full items-center justify-center gap-2 rounded-lg '>
        <div
          className={`flex w-full ${playlist ? 'flex-col' : ''} items-center gap-4`}
        >
          <div
            className={`${!playlist ? 'flex' : 'flex-col'} w-full items-center`}
          >
            {playlist ? (
              <div className='flex items-center justify-center'>
                <Button
                  onClick={handlePlay}
                  className='p-0 px-2'
                  variant='ghost'
                >
                  <SkipForward size={18} className='rotate-180' />
                </Button>
                <Button
                  onClick={handlePlay}
                  className='p-0 px-2'
                  variant='ghost'
                >
                  {play ? <Pause size={18} /> : <Play size={18} />}
                </Button>
                <Button
                  onClick={handlePlay}
                  className='p-0 px-2'
                  variant='ghost'
                >
                  <SkipForward size={18} />
                </Button>
              </div>
            ) : (
              <Button onClick={handlePlay} className='p-0 px-2' variant='ghost'>
                {play ? <Pause size={18} /> : <Play size={18} />}
              </Button>
            )}

            <input
              type='range'
              min='0'
              max='1'
              step='any'
              value={progress}
              onChange={handleScrub}
              style={{
                borderRadius: '50px',
                backgroundImage: `linear-gradient(to right, ${theme === 'light' ? 'black' : 'white'} ${progress * 97}%, ${theme === 'light' ? 'white' : 'black'} 0)`,
              }}
              className={`w-full appearance-none rounded-none border-none bg-transparent [&::-webkit-slider-runnable-track]:cursor-pointer [&::-webkit-slider-runnable-track]:rounded-sm [&::-webkit-slider-runnable-track]:bg-black/10 dark:[&::-webkit-slider-runnable-track]:bg-white/30 [&::-webkit-slider-thumb]:size-[5px] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-sm`}
            />
          </div>
          <div className='flex items-center justify-center gap-2 pr-2'>
            <Volume2 size={22} />
            <input
              type='range'
              min='0'
              max='1'
              step='any'
              value={volume}
              onChange={handleVolume}
              style={{
                borderRadius: '50px',
                backgroundImage: `linear-gradient(to right, ${theme === 'light' ? 'black' : 'white'} ${volume * 97}%, ${theme === 'light' ? 'white' : 'black'} 0)`,
              }}
              className={`w-20 appearance-none rounded-none border-none bg-transparent [&::-webkit-slider-runnable-track]:cursor-pointer [&::-webkit-slider-runnable-track]:rounded-sm [&::-webkit-slider-runnable-track]:bg-black/10 dark:[&::-webkit-slider-runnable-track]:bg-white/30 [&::-webkit-slider-thumb]:size-[5px] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-sm`}
            />
          </div>
        </div>
        <audio ref={playerRef} src={audioUrl} />
      </div>
    </div>
  );
}

export default AudioPlayer;
