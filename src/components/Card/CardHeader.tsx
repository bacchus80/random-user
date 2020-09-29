import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import { CardBody, CardLabel, CardText, IconText, UserNameDiv, UserImage, CardHeaderColumn1, CardHeaderColumn2, CardHeaderColumn3, CardColumn, EmptyUserImage } from "./styles";
import { emtypUser } from '../colors';

type CardData = {
  userImageUrl: string,
  titleAndName: string;
  age?: number;
  location: string;
  phone: string;
  cell: string;
  email: string;
}

const CardHeader = (props: CardData) => {
  const { userImageUrl, titleAndName, age, location, phone, cell, email } = props;
  return (
    <CardBody style={{ display: 'flex' }}>
      <CardHeaderColumn1>
        {userImageUrl && <UserImage src={userImageUrl} alt="User" />}
        {!userImageUrl && <EmptyUserImage><PersonIcon style={{ color: `${emtypUser}`, fontSize: '100px' }} /></EmptyUserImage>}
      </CardHeaderColumn1>
      <CardHeaderColumn2>
        <UserNameDiv>{titleAndName}</UserNameDiv>
        <CardColumn>
          <CardLabel>Age</CardLabel>
          <CardLabel>Location</CardLabel>
        </CardColumn>
        <CardColumn>
          <CardText>{age}</CardText>
          <CardText>{location}</CardText>
        </CardColumn>
      </CardHeaderColumn2>
      <CardHeaderColumn3>
        <CardColumn>
          <CardText><PhoneIcon /><IconText>{phone}</IconText></CardText>
          <CardText><PhoneAndroidIcon /><IconText>{cell}</IconText></CardText>
          <CardText><MailIcon /><IconText>{email}</IconText></CardText>
        </CardColumn>
      </CardHeaderColumn3>
    </CardBody>
  );
};

export default CardHeader