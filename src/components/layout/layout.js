import storage from 'local-storage-fallback';
import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import ThemeData from '../../data/Theme';
import ThemeContext from '../lib/ThemeContext';
import GlobalStyle from '../styles/GlobalStyle';
import Footer from './Footer';
import './Global.css';
import Header from './Header';

function Layout({ children }) {
  const [theme, setTheme] = useState('light');

  function changeTheme() {
    if (theme === 'light') {
      setTheme('dark');
      storage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      storage.setItem('theme', 'light');
    }
  }

  useEffect(() => {
    const localTheme = storage.getItem('theme');
    if (localTheme === 'light') setTheme('light');
    if (localTheme === 'dark') setTheme('dark');
  }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? ThemeData.light : ThemeData.dark}>
      <Wrapper>
        <GlobalStyle />
        <ThemeContext.Provider value={{ changeTheme }}>
          <Header />
        </ThemeContext.Provider>
        <main>{children}</main>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  max-width: 650px;
  margin: 0 auto;
  padding: 42px 50px;

  @media screen and (max-width: 650px) {
    padding: 50px 30px;
  }
  @media screen and (max-width: 450px) {
    padding: 50px 20px;
  }
`;

export default Layout;
