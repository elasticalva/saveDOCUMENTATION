import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";
import styles from "./styles.module.css";
const TITLE = "About";
const DESCRIPTION = "Awesome people working";

function Team() {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <main className="container margin-vert--lg">
        <div className="text--center margin-bottom--xl">
          <h1>{TITLE}</h1>
          <p>{DESCRIPTION}</p>
<p>
          There's a Game for Everyone#
Games are a form of entertainment and pleasure to many of us.

According to a market study, the global video game industry is valued at USD 151.06 billion in 2019 and is expected to grow at a Compound Annual Growth Rate (CAGR) of 12.9% from 2020 to 2027. This means that there will be more selection of games for us. For gamers and for people who are not familiar with video games, it can be daunting to find and choose a game that they will enjoy.

Gameo aims to become the number 1 game recommendation engine for anyone to use. At Gameo, we believe that there is a game for anyone. Whether or not you have played video games before, Gameo will have a game for you.

Start using Gameo at https://gameo-app.herokuapp.com

Main Features#
See trending games based on how popular it is on Twitch
View a personalized recommendation list of games based on games rated
Add games to your library and wish list
Games that are rated will have a rating of 1-10, which will be used to train the model
Modify the number of recommendations given in the settings page
Resources#
Gameo uses the following resources:

Twitch API, which allows Gameo to fetch the newest and trending games. Official documentation can be found here.

RAWG API, which allows Gameo to access detailed information for each game. Official documentation can be found here.

Metacritic Game Dataset and Metacritic User Comments Dataset, which are used for training the model can be found here.

Tech Stack#
Languages: Python, JavaScript, HTML, CSS
Frameworks: ReactJS, Python Flask
Database: MongoDB
APIs/Other: Twitch API, RAWG API, Firebase Authentication
How it Works#
To read how Gameo is built in a detailed tutorial, start here.

Quick Access to tutorial sections:

Introduction
PyTorch Integration
Endpoints for User Data
Building the React Website
Usage#
To learn how to use Gameo as a user, read Usage.
</p>

        </div>
      </main>
    </Layout>
  );
}
export default Team;