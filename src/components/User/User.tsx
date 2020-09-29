import React from 'react';
import styled from 'styled-components';
import CardHeader from '../Card/CardHeader';
import CardItem from '../Card/CardItem';


type Userdata = {
  ingressData: {
    userImageUrl: string,
    titleAndName: string;
    age?: number;
    location: string;
    phone: string;
    cell: string;
    email: string;
  };
  login: {
    username: string;
    uuid: string;
    registred?: Date | string;
  };
  personalData: {
    gender: string,
    dateOfBirth?: Date;
    address: string;
    nationality: string;
  };
  rawData: {}
}


const User = (props: Userdata) => {
  const { ingressData, login, personalData, rawData } = props;

  /* Preparing data for Card items */
  const personalDataInput = [
    { 'label': 'Gender', 'text': personalData.gender },
    { 'label': 'Date of birth', 'text': personalData.dateOfBirth },
    { 'label': 'Address', 'text': personalData.address },
    { 'label': 'Nationality', 'text': personalData.nationality }
  ];
  const loginData = [
    { 'label': 'Registered', 'text': login.registred },
    { 'label': 'Username', 'text': login.username },
    { 'label': 'UUID', 'text': login.uuid }
  ];

  return (
    <div>
      <CardHeader
        userImageUrl={ingressData.userImageUrl}
        titleAndName={ingressData.titleAndName}
        age={ingressData.age}
        location={ingressData.location}
        phone={ingressData.phone}
        cell={ingressData.cell}
        email={ingressData.email}
      />

      {/* Displaying personal data */}
      <CardItem title="Personal data" data={personalDataInput} />

      {/* Displaying login data */}
      <CardItem title="Login data" data={loginData} />
    </div>
  )
};

export default User