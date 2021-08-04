import logo from './logo.svg';
// import './App.css';
// import './App.scss';
import styles from './App.module.css';
import Button from './components/Button';
import StyledButton from './components/StyledButton';
import styled, { createGlobalStyle } from 'styled-components';
import StyledA from './components/StyledA';
import root from 'react-shadow';
import { Calendar } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
const styles_shadow = `.App {
  text-align: center;
}

.App .logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App .header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App .link {
  color: #61dafb;
}
@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

p{
  color:yellow;
}
`;

function App() {
  const PrimaryStyledButton = styled(StyledButton)`
    background: palevioletred;
    color: white;
  `;
  const UppercaseButton = (props) => {
    return <button {...props} children={props.children.toUpperCase()} />;
  };

  const MyButton = (props) => {
    return (
      <button
        {...props}
        className={props.className}
        children={`My Button ${props.children}`}
      />
    );
  };
  const StyleMyButton = styled(MyButton)`
    background: transparent;
    border-radius: 3px;
    border: 2px solid ${(props) => props.color || 'palevioletred'};
    color: ${(props) => props.color || 'palevioletred'};
    margin: 0 1em;
    padding: 0.25em 1em;
    font-size: 20px;

    :hover {
      border: 2px solid red;
    }
    ::before {
      content: '@';
    }
  `;

  const GlobalStyle = createGlobalStyle`
  button:{
    color:yellow;
  }`;

  return (
    <div className={styles['App']}>
      <GlobalStyle />
      <header className={styles['header']}>
        <img src={logo} className={styles['logo']} alt="logo" />

        <Button>Button</Button>
        <p style={{ marginTop: 20 }}>
          <StyledButton>스타일 버튼 </StyledButton>
          <StyledButton primary>스타일 버튼 </StyledButton>
          <PrimaryStyledButton primary>스타일 버튼 </PrimaryStyledButton>
          <StyledButton as="a" href="/">
            스타일 버튼{' '}
          </StyledButton>
          <StyledButton as={UppercaseButton}>style button </StyledButton>
          <StyleMyButton> button </StyleMyButton>
          <StyleMyButton color={'green'}> button </StyleMyButton>

          <StyledA
            href="https://google.com"
            // target="_BLANK"
          >
            태그{' '}
          </StyledA>
        </p>
        <root.div>
          <p>쉐도우 태그 진행</p>
          <style type="text/css">{styles_shadow}</style>
        </root.div>
        <GithubOutlined />
        <Calendar />
      </header>
    </div>
  );
}

export default App;
