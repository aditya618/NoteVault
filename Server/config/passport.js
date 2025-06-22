import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import User from "../model/User.js";

let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({_id: jwt_payload.id}).then((user) => {
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    }).catch(err => {
        if (err) {
            return done(err, false);
        }
    });
}));