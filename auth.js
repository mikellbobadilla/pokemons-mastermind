import passport from 'passport'
import { ExtractJwt, Strategy } from 'passport-jwt'

passport.use(new Strategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT'),
  secretOrKey: 'secretPassword'
}, (decoded, done) => {
console.log('Decode jwt ', decoded)
return done(null, false)
}))

export default passport