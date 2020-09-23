import React from 'react';
import styled from 'styled-components';
import {semiGrey, darkGrey} from '../colors';

export const ProgressHolder = styled.div`
  margin: auto;
`

export const ProgressModal = styled.div`
  width: 100%;
  z-index: 1000;
  height: 100%;
  position: fixed;
  overflow: show;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${semiGrey};
  opacity: 0.6;
  display: inline-flex;
`

export const AppHolder = styled.div`
  text-align: center;
`

export const AppHeader = styled.div`
  background-color: ${darkGrey};
  padding: 10px;
  min-height: 50px;
  /*min-height: 20vh;*/
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  /*font-size: calc(10px + 2vmin);*/
  color: white;
  margin-bottom: 20px;
`

export const Body = styled.div`
  margin: 0px;
  padding: 20px 80px;
`
