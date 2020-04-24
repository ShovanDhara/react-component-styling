import React from 'react';
import styles from './style.module.css'
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html {
    --color-text: black;
    --color-background: red;
    --color-primary: rebeccapurple;
    --min-tap-target-height: 48px;
    --font-size-small: 16px;
    --font-size-medium: 22px;
    @media (min-width: 1024px) {
        --font-size-small: 21px;
        --font-size-medium: 24px;
      }
  }
`
const Button = styled.button`
  background: var(--color-primary);
  padding: 1rem;
  font-size: var(--font-size-medium);
  height: ${props => props.theme.mobileTapHeight}px; /*This is used if prop has such property*/
  @media (min-width: ${props => props.theme.mobileTapHeight}) { /*This is used if prop has such property*/
    height: ${props => props.theme.mobileTapHeight}px;
  }
`;

export const CssVariableComponent = ({ props }) => {
    return (
        <>
            <GlobalStyles />
            <div className={styles.title}>This is css variable component</div>
            <p>Demo content</p>
            <Button>Sample Button</Button>
        </>
    )
};
