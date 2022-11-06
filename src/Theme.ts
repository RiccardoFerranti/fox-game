const Theme = {
  buttons: {
    play: {
      active: '#efd23e',
      inactive: 'white',
      textActive: 'white',
      textInactive: '#383736',
    }
  },
  colors: {
    body: '#28AADF',
    gameBackground: 'white',
    text: '#383736',
    error: '#F24141'
  }
}

export type TTheme = typeof Theme;

export default Theme;
