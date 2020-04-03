const accessToken = process.env.GATSBY_MAPBOX_KEY;

export const mapServices = [
  {
    name: 'OpenStreetMap',
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  },
  {
    name: 'Mapbox',
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    url: `https://api.mapbox.com/styles/v1/roncham/ck8kmbrrh08xt1inyxg6mo8qm?access_token=pk.eyJ1Ijoicm9uY2hhbSIsImEiOiJjanRvbmd2MW0wOXlkNDNtcjMybmdhNWcwIn0.kCMeczfEH5ForJjCSqTRYQ`,
  },
];
