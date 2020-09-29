import React from 'react';
import styled, { css } from 'styled-components';
import { white, lightGrey, mediumGrey, semiGrey, borderGrey } from '../colors';

export const CardBody = styled.div`
  background-color: ${white};
  border: solid 1px ${borderGrey};
  border-radius: 4px;
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 16px;
`

export const CardTitle = styled.div`
  font-size: 120%;
  border-bottom: solid 1px ${borderGrey};
  font-weight: bold;
  padding-bottom: 10px;
  margin-bottom: 20px;
`

export const CardLabel = styled.div`
  font-weight: bold;
  padding: 4px;
`

export const CardText = styled.div`
  color: ${mediumGrey};
  padding: 4px;
  min-height: 20px;
`

export const IconText = styled.span`
  padding-left: 8px;
  vertical-align: top;
`

export const Column = styled.span`
  flex: 1;
`

export const CardHeaderColumn1 = styled.div`
  display: table-cell;
  vertical-align: top;
  padding: 10px;
`

export const CardHeaderColumn2 = styled(CardHeaderColumn1)`
  padding-left: 40px;
  padding-right: 40px;
  text-align: left;
  flex-grow: 1;
`

export const CardHeaderColumn3 = styled(CardHeaderColumn1)`
  padding-left: 40px;
  padding-right: 40px;
  text-align: left;
  min-width: 340px;
  border-left: solid 1px ${semiGrey};
`

export const UserNameDiv = styled.h3`
  font-weight: bold;
  text-align: left;
  min-width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  `

export const EmptyUserImage = styled.div`  
  border: solid 1px ${borderGrey};
  border-radius: 50%;
  width: 120px;
  height: 120px;
  background-color: ${lightGrey};
  object-fit: cover;
`

export const UserImage = styled.img`  
  display: inline-block;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
`

export const CardColumn = styled.div`
  display: inline-block;
  text-align: left;
  padding: 8px 16px 5px 0px;
`

export const Container = styled.div`
  display: flex;
`