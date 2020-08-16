import path from 'path';
import fse from 'fs-extra';
import { data } from '@dottjt/datareade';
import { media, upload } from '@dottjt/mediareade';

const main = async () => {
  // const TWD_CHANNEL_ID = 'UCHnPAVZax7_QMufnSF8Pc9w';
  const credentialsFile = path.join(__dirname, '..', 'client_secrets.json');
  const fakeYouTubeAPIFile = path.join(__dirname, '..', 'fake-youtube-api.txt');

  const videoFolder = path.join(__dirname, '..', '..', 'theneverfapdeluxedaily_podcast', 'final-video');

  upload.uploadYouTube({
    showTitle: "The NeverFap Deluxe Daily",
    showDescription: (
`Available on Spotify, iTunes, Castbox, Google Podcasts et al.

Website: https://theneverfapdeluxedaily.juliusreade.com\n
YouTube: https://www.youtube.com/channel/UCHnPAVZax7_QMufnSF8Pc9w\n
Twitter: https://twitter.com/neverfapdeluxe\n
Facebook: https://facebook.com/neverfapdeluxe\n
Discord: https://discord.gg/wKh49a6\n
Instagram: https://instagram.com/neverfap_deluxe\n
`
    ),
    videoFolder,
    credentialsFile,
    fakeYouTubeAPIFile,
    episodes: data.episodesTNDD
  });


};

main();
