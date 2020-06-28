import { config } from 'dotenv';
config();

import path from 'path';
import { data, media, website } from '@dottjt/datareade';

const main = async () => {
  const { generateHugoMDFilesPodcast } = website;
  const { generateModifiedRSS } = media;
  const { episodesTNDD } = data;

  const PODCAST_WEBSITE = 'https://theneverfapdeluxedaily.juliusreade.com/';
  // const TWD_RSS_URL = "http://rss.castbox.fm/everest/aab82e46f0cd4791b1c8ddc19d5158c3.xml"; // (this is the NFD one.)
  const TNDD_RSS_URL = "http://rss.castbox.fm/everest/09fe90c3ea474fc1acdc12ad7ab0a9d3.xml";
  const NEW_RSS_URL = "https://theneverfapdeluxedaily.juliusreade.com/theneverfapdeluxedaily_podcast.xml";
  const OUTPUT_RSS_FILE = path.join(__dirname, '..', 'themes', 'reade', 'static', 'theneverfapdeluxedaily_podcast.xml');

  const contentDirectory = path.join(__dirname, '../', 'content');

  await generateHugoMDFilesPodcast({
    episodes: episodesTNDD,
    contentDirectory,
    email: 'neverfapdeluxe@gmail.com'
  });

  await generateModifiedRSS({
    inputRSSURL: TNDD_RSS_URL,
    newRSSURL: NEW_RSS_URL,
    outputRSSFile: OUTPUT_RSS_FILE,
    authorRSSField: '<author>neverfapdeluxe@gmail.com (Julius Reade)</author>',
    episodeList: episodesTNDD,
    podcastWebsite: PODCAST_WEBSITE
  });
};

main();



