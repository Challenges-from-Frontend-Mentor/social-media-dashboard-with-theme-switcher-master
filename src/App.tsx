import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { AppContainer, theme } from './App.styles';
import Header from './components/Header/Header';
import Overview from './components/Overview/Overview';
import Social from './components/Social/Social';

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const handleThemeChange = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme[mode]}>
      <AppContainer>
        <Header currentTheme={mode} toggleTheme={handleThemeChange} />
        <main>
          <Social />
          <Overview />
        </main>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
