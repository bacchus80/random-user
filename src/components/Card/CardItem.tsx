import React from 'react';
import {CardBody, CardTitle, CardLabel, CardText, Column, Container} from "./styles";

type Values = {
  label: string,
  text: any
}

type CardData =  {
  title: string
  data: Values[]
}

const CardItem = (props: CardData) => {
  const {title, data} = props;

  return(
    <CardBody>
      <CardTitle>{title}</CardTitle>
      <Container>
        {data && data.map((value, index) => (
          <Column key={`col-${index}`}>
            <CardLabel key={`data-${index}`}>{value.label}</CardLabel><CardText>{value.text}</CardText>
          </Column>
          ))
        }
      </Container>
    </CardBody>
  );
};

export default CardItem