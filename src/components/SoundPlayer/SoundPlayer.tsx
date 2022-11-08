
import { FC, useEffect, useMemo } from "react";

import { useSelector } from "react-redux";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";

import { StyledSoundPlayerWrapper } from "./SoundPlayer.styled";

import hopstepchance from "../../music/hopstepchance.mp3";
import { gameSelectorSettingsMusic } from "../../redux/game/game.selector";
import { useAppDispatch } from "../../redux/store";
import { setMusic } from "../../redux/game/game.slice";

export interface ISoundPlayerProps {
  start: boolean,
  timerStatus: string,
}

const SoundPlayer: FC<ISoundPlayerProps> = ({ start, timerStatus }) => {
  const isMusicOn = useSelector(gameSelectorSettingsMusic);
  const dispatch = useAppDispatch();
  
  const audio = useMemo(() => new Audio(hopstepchance), []);

  const handleSetMusicOn = () => { dispatch(setMusic(false)) }
  const handleSetMusicOff = () => { dispatch(setMusic(true)) }

  useEffect(() => {
    if (start && isMusicOn) {
      audio.play();
    }
  }, [start, audio, dispatch, isMusicOn])
  
  useEffect(() => {
    if (!isMusicOn) {
      audio.pause();
    }

    if (timerStatus === 'end' && isMusicOn) {
      // stop song
      audio.pause();
      audio.currentTime = 0;
    }
  }, [timerStatus, audio, isMusicOn])

  useEffect(() => {
    return () => {
      audio.pause();
      audio.currentTime = 0;
    }
}, [audio])

  return (
    <StyledSoundPlayerWrapper>
      {
        isMusicOn 
          ? <HiSpeakerWave onClick={handleSetMusicOn} data-testid='speaker-on' /> 
          : <HiSpeakerXMark onClick={handleSetMusicOff} data-testid='speaker-off'/>
      }
    </StyledSoundPlayerWrapper>
  )
}

export default SoundPlayer;
