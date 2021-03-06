import React, { Component } from 'react';
import User from './components/User/User';
import { Fade, CircularProgress, IconButton } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import CloseIcon from '@material-ui/icons/Close';
import { orange } from './components/colors';
import { AppHolder, AppHeader, Body, ProgressHolder, ProgressModal, LeftPadding } from "./components/styles";


class App extends Component {


  state = {
    showAlert: false,
    ingressData: {
      userImageUrl: '',
      titleAndName: '',
      registred: '',
      location: '',
      phone: '',
      cell: '',
      email: ''
    },
    login: {
      username: '',
      registred: '',
      uuid: '',
    },
    personalData: {
      gender: '',
      address: '',
      nationality: ''
    },
    rawData: {},
    fetchingData: false,
    userLoadedOnce: false
  }


  fetchDataFromAPI = () => {
    fetch(`${process.env.REACT_APP_URL_RANDOM_USER}`)
      .then(res => res.json())
      .then((data) => {

        const rawData = data.results[0];
        const dateOfBirth = rawData.dob.date.split('T')[0];
        const registeredDate = rawData.registered.date.split('T')[0];
        const ingressData = {
          userImageUrl: rawData.picture.large,
          titleAndName: rawData.name.title + ' ' + rawData.name.first + ' ' + rawData.name.last,
          age: rawData.dob.age,
          location: rawData.location.city + ' ' + rawData.location.country,
          phone: rawData.phone,
          cell: rawData.cell,
          email: rawData.email
        };
        const personalData = {
          gender: rawData.gender,
          dateOfBirth: dateOfBirth,
          address: rawData.location.street.name + ' ' + rawData.location.street.number + ', ' + rawData.location.city,
          nationality: rawData.nat
        };
        const login = {
          registred: registeredDate,
          uuid: rawData.login.uuid,
          username: rawData.login.username
        };

        this.setState({
          fetchingData: false,
          ingressData: ingressData,
          personalData: personalData,
          login: login,
          raw: rawData
        })
      })
      .catch(this.handleError)
  }


  handleClick = () => {
    this.setState({ fetchingData: true, userLoadedOnce: true });
    setTimeout(this.fetchDataFromAPI, 800);
  }


  handleError = () => {
    /*
      For test purpose 
      const raw = { "results": [{ "gender": "male", "name": { "title": "Monsieur", "first": "Nenad", "last": "Moulin" }, "location": { "street": { "number": 2684, "name": "Rue de la Fontaine" }, "city": "Gland", "state": "Fribourg", "country": "Switzerland", "postcode": 8902, "coordinates": { "latitude": "-47.8166", "longitude": "-90.8129" }, "timezone": { "offset": "+9:30", "description": "Adelaide, Darwin" } }, "email": "nenad.moulin@example.com", "login": { "uuid": "bbe4a545-5c30-4e3c-a535-9b72e860361d", "username": "bluegoose606", "password": "edge", "salt": "uVma4mXB", "md5": "1b567e3a80b21eb2effdfd802c1d760c", "sha1": "e55594748bc10a656341fd55f67f0a52da86a0c0", "sha256": "7bfc9fad90a4543627d4312a4e9bd98c5411eff629f554b469c31264009a19b5" }, "dob": { "date": "1984-03-30T18:00:58.105Z", "age": 36 }, "registered": { "date": "2010-10-13T01:55:58.193Z", "age": 10 }, "phone": "077 402 30 81", "cell": "079 332 59 92", "id": { "name": "AVS", "value": "756.9630.6030.02" }, "picture": { "large": "https://randomuser.me/api/portraits/men/12.jpg", "medium": "https://randomuser.me/api/portraits/med/men/12.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/men/12.jpg" }, "nat": "CH" }], "info": { "seed": "8d012325b87aaab5", "results": 1, "page": 1, "version": "1.3" } };
      const data = raw.results;
      const ingressData = {"userImageUrl": "https://content.api.news/v3/images/bin/a6923adbc7bece73803221613f410782", "titleAndName": "Monsieur Nenad Moulin", "age" : 35, "location" : "Gland, Switzerland", "registred": "2010-10-13","phone": "077 402 30 81","cell": "079 332 59 92", "email": "nenad.moulin@example.com"};
      const personalData = {"gender": "male", "dateOfBirth": "1981-02-03", "address" : "2684 Rue de la Fontaine 8902 Gland Fribourg", "nationality" : "CH"};
      const loginData = {"registred": "2020-12-24", "uuid": "bbe4a545-5c30-4e3c-a535-9b72e860361d", "username": "bluegoose60606"};
    */
    const ingressData = {
      userImageUrl: '',
      titleAndName: '',
      registred: '',
      location: '',
      phone: '',
      cell: '',
      email: ''
    };
    const loginData = {
      username: '',
      registred: '',
      uuid: '',
    };
    const personalData = {
      gender: '',
      address: '',
      nationality: ''
    };
    this.setState({ showAlert: true, fetchingData: false, ingressData: ingressData, personalData: personalData, login: loginData, raw: {} })
  }


  render() {
    const checked = true;
    const time = 1000;
    return (
      <AppHolder>
        <AppHeader>Load and display user from <LeftPadding>{process.env.REACT_APP_URL_RANDOM_USER}</LeftPadding></AppHeader>
        <Body>
          <div>
            {this.state.showAlert &&
              <Fade timeout={time} in={checked}>
                <Alert
                  variant="filled"
                  severity="error"
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        this.setState({ showAlert: false });
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                >
                  Something went wrong when fetching user data
              </Alert>
              </Fade>
            }
            <User ingressData={this.state.ingressData} personalData={this.state.personalData} login={this.state.login} rawData={this.state.rawData} />
          </div>

          {this.state.fetchingData &&
            <ProgressModal>
              <ProgressHolder>
                <CircularProgress style={{ color: `${orange}` }} />
              </ProgressHolder>
            </ProgressModal>
          }

          <Button variant="outlined" color="primary" style={{ borderColor: `${orange}`, color: `${orange}` }} onClick={this.handleClick}><AutorenewIcon /> {!this.state.userLoadedOnce ? 'Load user' : 'Reload user'}</Button>
        </Body>
      </AppHolder>
    );
  }
}

export default App;