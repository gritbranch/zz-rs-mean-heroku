//mongodb://localhost/meanjs
//mongodb://ryansalvador:xxxPA50@ds059692.mongolab.com:59692/ryansalvadordb
//mongodb://heroku_bh9fmwhd:rd41467ar43onk3u4dhh8ql7hv@ds027295.mongolab.com:27295/heroku_bh9fmwhd

module.exports = {
  db: 'mongodb://heroku_bh9fmwhd:rd41467ar43onk3u4dhh8ql7hv@ds027295.mongolab.com:27295/heroku_bh9fmwhd',
  sessionSecret: 'developmentSessionSecret',
  facebook: {
    clientID: '1061065367261191',
    clientSecret: '27831c304b199565a67a38659dae4958',
    callbackURL: 'https://ryansalvador.herokuapp.com/oauth/facebook/callback'
  },
  twitter: {
    clientID: '57k6XmQsmXIN4BcXgv5qOmX5Y',
    clientSecret: 'UDMZywySzHDs9FcAJE73zut1PqS47rfI5u2km3oDQxFNsPxNAk',
    callbackURL: 'https://ryansalvador.herokuapp.com/oauth/twitter/callback'
  },
  google: {
    clientID: '232318554867-u9klo7c5s79ta3hb2q2fd5m69lomt8gs.apps.googleusercontent.com',
    clientSecret: 'JUQa4L4-stYCcoad-fnd48DF',
    callbackURL: 'https://ryansalvador.herokuapp.com/oauth/google/callback'
  }
};