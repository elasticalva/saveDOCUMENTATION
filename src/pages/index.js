import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'RPG it All',
    imageUrl: 'img/rpg.png',
    description: (
      <>
        SRPGC its first an Role Playing Game, where you can customize your 
        character from a pool of heroes with upgradeable items and habilities, that you earn  in a form of cards while you progress 
      </>
    ),
  },
  {
    title: 'Play your Cards',
    imageUrl: 'img/cards.png',
    description: (
      <>
        Your set of cards will define how your character look, what are his habilities and what level threat is.
        Your collection or deck of cards improve as you fight enemies <code>Documentation</code> directory.
      </>
    ),
  },
  {
    title: 'Fight in PVP',
    imageUrl: 'img/pvp.png',
    description: (
      <>
        Defeat other players to steal his cards in order to improve your deck, items and habilities. If you get defeated you loose part of your cards.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Continue? 3, 2, 1...
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
