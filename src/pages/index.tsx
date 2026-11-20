import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

const RELEASES = 'https://github.com/OneKashLabs/KashPass/releases';
const PRIVACY = 'https://github.com/OneKashLabs/KashPass/blob/main/PRIVACY.md';
const CERT = 'd4b7d39c9fad189bc417c64411005ebd5f781af23d7462c1c0991c5edd044fe0';

type Shot = {img: string; alt: string; title: string; caption: string};

const SHOTS: Shot[] = [
  {
    img: '/img/app/search.webp',
    alt: 'Search results for "bank", with the match highlighted in each entry',
    title: 'Find a login',
    caption: 'Search titles, user names, URLs, notes, tags, and custom fields.',
  },
  {
    img: '/img/app/entry_sheet.webp',
    alt: 'An entry with copy buttons beside user name, password, and URL',
    title: 'Copy a field',
    caption: 'The clipboard clears after 30 seconds.',
  },
  {
    img: '/img/app/conflict.webp',
    alt: 'A save stopped because the file changed since it was opened',
    title: 'Save to the same file',
    caption: 'If the file changed since you opened it, KashPass stops and asks.',
  },
];

type Tile = {title: string; body: string};

const TILES: Tile[] = [
  {title: 'Unlock with a fingerprint or face', body: 'Turn it on after you unlock with your password.'},
  {title: 'Use a key file', body: 'With your password, or on its own.'},
  {title: 'A backup at every open and save', body: 'An encrypted copy stays on the phone.'},
  {title: 'Every save checked', body: 'KashPass reads each save back and decrypts it.'},
  {title: 'Locks when you leave', body: 'When the screen turns off, or 1 minute after you switch apps.'},
  {title: 'No screenshots of your passwords', body: 'No screen recording. No overlays from other apps.'},
];

function Hero(): ReactNode {
  return (
    <header className="kp-hero">
      <div className="container kp-hero__inner">
        <div>
          <Heading as="h1" className="kp-hero__title">
            Your KeePass vault,
            <br />
            on your phone.
          </Heading>
          <p className="kp-hero__lead">
            Find a login, copy a password, and edit entries in the file KeePass 2 opens.
          </p>
          <div className="kp-hero__cta">
            <Link className="kp-btn kp-btn--gold" to="/beta/">
              Join the beta
            </Link>
            <Link className="kp-btn kp-btn--line" href={RELEASES}>
              Download the APK
            </Link>
          </div>
          <p className="kp-hero__note">Free and open source. Works on Android 12 and newer.</p>
        </div>
        <div className="kp-hero__art">
          <div className="kp-phone kp-hero__back">
            <img src={useBaseUrl('/img/app/unlock_password.webp')} alt="" width={600} height={1333} />
          </div>
          <div className="kp-phone kp-hero__front">
            <img
              src={useBaseUrl('/img/app/browse_list.webp')}
              alt="KashPass entry list, sorted A to Z with group filters"
              width={600}
              height={1333}
            />
          </div>
          <img className="kp-hero__kash" src={useBaseUrl('/img/kash/kash_happy_dark.webp')} alt="" />
        </div>
      </div>
    </header>
  );
}

function Privacy(): ReactNode {
  return (
    <section className="kp-privacy">
      <div className="container">
        <Heading as="h2">KashPass can’t send your passwords anywhere.</Heading>
        <p>It has no internet permission and collects nothing.</p>
        <Link href={PRIVACY}>Privacy policy</Link>
      </div>
    </section>
  );
}

type Step = {title: string; body: string};

const STEPS: Step[] = [
  {title: 'One vault file', body: 'In a cloud drive or on your phone.'},
  {title: 'Open it in KashPass', body: 'Choose it once. KashPass remembers it.'},
  {title: 'Edit on either device', body: 'Wait for the sync to finish before you switch.'},
];

function HowItWorks(): ReactNode {
  return (
    <section className="kp-section">
      <div className="container">
        <Heading as="h2" className="kp-heading">
          One vault, on your computer and your phone.
        </Heading>
        <ol className="kp-flow">
          {STEPS.map((s) => (
            <li key={s.title}>
              <Heading as="h3">{s.title}</Heading>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Shots(): ReactNode {
  return (
    <section className="kp-section kp-section--mist">
      <div className="container">
        <Heading as="h2" className="kp-heading">
          The login you need, in seconds.
        </Heading>
        <div className="kp-shots">
          {SHOTS.map((s) => (
            <figure className="kp-shot" key={s.img}>
              <div className="kp-phone">
                <img src={useBaseUrl(s.img)} alt={s.alt} width={600} height={1333} loading="lazy" />
              </div>
              <Heading as="h3">{s.title}</Heading>
              <p>{s.caption}</p>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tiles(): ReactNode {
  return (
    <section className="kp-section">
      <div className="container">
        <Heading as="h2" className="kp-heading">
          The little things.
        </Heading>
        <div className="kp-tiles">
          {TILES.map((t) => (
            <div className="kp-tile" key={t.title}>
              <Heading as="h3">{t.title}</Heading>
              <p>{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Get(): ReactNode {
  return (
    <section className="kp-section">
      <div className="container">
        <Heading as="h2" className="kp-heading" id="get">
          Get KashPass
        </Heading>
        <div className="kp-get">
          <div className="kp-get__item">
            <Heading as="h3">Google Play (beta)</Heading>
            <p>Join the test group, then install from Play.</p>
            <Link to="/beta/">Join the beta</Link>
          </div>
          <div className="kp-get__item">
            <Heading as="h3">GitHub</Heading>
            <p>A signed APK and its SHA-256 for each release.</p>
            <Link href={RELEASES}>Download the APK</Link>
          </div>
        </div>
        <p className="kp-cert">
          Signing certificate SHA-256: <code>{CERT}</code>
        </p>
        <p className="kp-requires">
          Requires Android 12 or later and a KDBX 4 vault. KeePass 2.57 and later always save KDBX 4.
        </p>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="KeePass companion for Android"
      description="Open and edit your KeePass vault on Android. Changes save to the same file you open in KeePass 2. No internet permission. Free and open source.">
      <Hero />
      <main>
        <Privacy />
        <HowItWorks />
        <Shots />
        <Tiles />
        <Get />
      </main>
    </Layout>
  );
}
