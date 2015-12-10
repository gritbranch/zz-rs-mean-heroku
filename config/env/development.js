module.exports = {
  db: 'mongodb://localhost/meanjs',
  sessionSecret: 'developmentSessionSecret',
  facebook: {
    clientID: '1061065367261191',
    clientSecret: '27831c304b199565a67a38659dae4958',
    callbackURL: 'http://localhost:3000/oauth/facebook/callback'
  },
  twitter: {
    clientID: '57k6XmQsmXIN4BcXgv5qOmX5Y',
    clientSecret: 'UDMZywySzHDs9FcAJE73zut1PqS47rfI5u2km3oDQxFNsPxNAk',
    callbackURL: 'http://localhost:3000/oauth/twitter/callback'
  },
  google: {
    clientID: '232318554867-u9klo7c5s79ta3hb2q2fd5m69lomt8gs.apps.googleusercontent.com',
    clientSecret: 'JUQa4L4-stYCcoad-fnd48DF',
    callbackURL: 'http://localhost:3000/oauth/google/callback'
  }
};