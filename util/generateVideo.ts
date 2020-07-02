import path from 'path';
import { data } from '@dottjt/datareade';
import { media, upload } from '@dottjt/mediareade';

const main = async () => {
  // const TWD_CHANNEL_ID = 'UCHnPAVZax7_QMufnSF8Pc9w';
  const credentialsFile = path.join(__dirname, '..', 'client_secrets.json');
  const fakeYouTubeAPIFile = path.join(__dirname, '..', 'fake-youtube-api.txt');

  const rootFolder = path.join(__dirname, '..');
  const audioFolder = path.join(__dirname, '..', '..', 'theneverfapdeluxedaily_podcast', 'final-audio');
  const videoFolder = path.join(__dirname, '..', '..', 'theneverfapdeluxedaily_podcast', 'final-video');
  const backgroundImageFolder = path.join(__dirname, '..', 'background-image');
  const podcastLogoFile = path.join(__dirname, '..', 'assets', 'logo_400_correct.png');
  const videoFont = '/System/Library/Fonts/Avenir.ttc';

  await media.generateVideo({
    rootFolder,
    audioFolder,
    videoFolder,
    backgroundImageFolder,
    videoFont,
    podcastLogoFile,
    episodes: data.episodesTNDD,
  });

  upload.uploadYouTube({
    showTitle: The Writer's Daily,
    videoFolder,
    credentialsFile,
    fakeYouTubeAPIFile,
    episodes: data.episodesTNDD
  });
};

main();

