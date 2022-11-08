import { FC, FormEvent, SyntheticEvent } from 'react';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TbMusic, TbMusicOff } from "react-icons/tb";
import { MdOutlineSettingsBackupRestore } from "react-icons/md";

import { StyledStartButton } from './Splash.styled';
import { StyledGameContainer } from './CommonStyle';
import { StyledSettingButton, SyledSettingsRow, StyledSettingsTitle, StyledDefaultSettings } from './Settings.style';

import { gameSelectorSettingsLanguge, gameSelectorSettingsMusic, gameSelectorSettingsTimer } from '../redux/game/game.selector';
import { setMusic, setTimer, setLanguage, setDefaultSettings } from '../redux/game/game.slice';
import { useAppDispatch } from '../redux/store';
import { INTERVALS_TIMER_OPTIONS, LANGUAGE_OPTIONS } from '../consts/general';
import Dropdown from '../components/Dropdown/Dropdown';

const Settings: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  
  const music = useSelector(gameSelectorSettingsMusic);
  const timer = useSelector(gameSelectorSettingsTimer);
  const language = useSelector(gameSelectorSettingsLanguge);
  
  const handleSetMusic = (e: SyntheticEvent, musicStatus: boolean) => {
    dispatch(setMusic(musicStatus));
  }

  const handleSetTimer = (e: FormEvent<HTMLSelectElement>) => {
    dispatch(setTimer(e.currentTarget.value));
  };
  
  const handleSetLanguage = (e: FormEvent<HTMLSelectElement>) => {
    dispatch(setLanguage(e.currentTarget.value));
  };

  const handleDefaultSettings = () => {
    dispatch(setDefaultSettings());
  };

  console.log(music)
  return (
    <StyledGameContainer>
      <StyledSettingsTitle>Settings</StyledSettingsTitle>
      <SyledSettingsRow>
        <span>Music</span> 
        <StyledSettingButton>
          {music 
            ? <TbMusic onClick={(e) => handleSetMusic(e, false)} />
            : <TbMusicOff onClick={(e) => handleSetMusic(e, true)} />
          }
        </StyledSettingButton>
      </SyledSettingsRow>
      <SyledSettingsRow>
        <Dropdown
          label="Timer"
          options={INTERVALS_TIMER_OPTIONS}
          value={String(timer)}
          onChange={(e: FormEvent<HTMLSelectElement>) => handleSetTimer(e)}
          size='small'
        />
      </SyledSettingsRow>
      <SyledSettingsRow>
        <Dropdown
          label="Languages"
          options={LANGUAGE_OPTIONS}
          value={language}
          onChange={(e: FormEvent<HTMLSelectElement>) => handleSetLanguage(e)}
          size='small'
        />
      </SyledSettingsRow>
      <SyledSettingsRow>
        <StyledDefaultSettings>
          <span>Default Settings</span>
          <StyledSettingButton onClick={handleDefaultSettings}><MdOutlineSettingsBackupRestore /></StyledSettingButton>
        </StyledDefaultSettings>
      </SyledSettingsRow>
      <StyledStartButton 
        type='button'
        id='start-buttonn'
        onClick={() => navigate(-1)}
        aria-label='start-button'
      >
        BACK
      </StyledStartButton>
    </StyledGameContainer>
  )
}

export default Settings;
