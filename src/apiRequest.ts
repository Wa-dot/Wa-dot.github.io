import axios from 'axios';

var access_token = 'EAAE8UHbEZBpgBO5KY0wwFj1Io12BlEZBMD4iH39OCb3z5TZCZCf2aOCSZBod6cVy7SzoIMlyhtt5ZCTlYvdM0kmJtSyvYJT0RPjZAnBY9WMZB9VGjjtyKc0WIQn4ZCGsWkCC8s4WkNZA8D4ZAtREYEXICDlOBQC9ybraskJT0ioNtm72KdhKpvw5TnDurz1siBQl8x7ZCI0pBq1k34EN3X996ATPZAW5IOJEZD'

async function getFacebookFeed() {
  try {
    const response = await axios.get('https://graph.facebook.com/{group-id}/feed?access_token='+access_token);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

getFacebookFeed();
