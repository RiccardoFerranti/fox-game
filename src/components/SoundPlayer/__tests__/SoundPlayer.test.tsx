import { fireEvent, screen } from '@testing-library/react';
import renderWithProvider, { generateMockedState, mockedRecordContext, routerConfig } from '../../../../testUtils';
import { IGameState } from '../../../redux/game/game.slice';

import SoundPlayer, { ISoundPlayerProps } from '../SoundPlayer';

const mockedPause = jest
  .spyOn(window.HTMLMediaElement.prototype, 'pause')
  .mockImplementation(() => {});

const playPromise = new Promise<void>((resolve) => { resolve() });
const mockedPlay = jest
  .spyOn(window.HTMLMediaElement.prototype, 'play')
  .mockImplementation(() => playPromise);

describe('SoundPlayer', () => {
  let mockedStore: IGameState;
  const mockedProps: ISoundPlayerProps = {
    start: true,
    timerStatus: 'running',
  };

  const renderView = (props: ISoundPlayerProps = mockedProps, store: IGameState = mockedStore) => 
    renderWithProvider(
      <SoundPlayer {...props} />,
      routerConfig,
      mockedRecordContext,
      {
        preloadedState: {
          game: store,
        },
      }
    );

  beforeEach(() => {
    mockedStore = generateMockedState();
  });


  it('should render properly the speaker-off icon when the music is off', () => {
    renderView();
    expect(screen.getByTestId('speaker-off')).toBeInTheDocument();
  });
 
  it('should render properly the speaker-on icon when the music is on', () => {
    mockedStore.music = true;
    renderView();

    expect(screen.getByTestId('speaker-on')).toBeInTheDocument();
  });

  it('should change the music icon from off to on properly after the click', () => {
    renderView();

    const speakerOff = screen.getByTestId('speaker-off');
    expect(speakerOff).toBeInTheDocument();
    fireEvent.click(speakerOff);

    expect(screen.getByTestId('speaker-on')).toBeInTheDocument();

    // after set the music to on, the play function is called
    expect(mockedPlay).toHaveBeenCalledTimes(1);
  });

  it('should change the music icon from on to off properly after the click', () => {
    mockedStore.music = true;
    renderView();

    const speakerOn = screen.getByTestId('speaker-on');
    expect(speakerOn).toBeInTheDocument();
    fireEvent.click(speakerOn);

    expect(screen.getByTestId('speaker-off')).toBeInTheDocument();

    // after set the music to off, the pause function is called
    expect(mockedPause).toHaveBeenCalledTimes(1);
  });

  it('should stop the music when the timer is over and if the music was on', () => {
    mockedStore.music = true;
    mockedProps.timerStatus = 'end';
    renderView();

    expect(mockedPause).toHaveBeenCalledTimes(1);
  });
});
