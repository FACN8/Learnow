// const app = module.exports = require('express')();
// // const {
// //   omit
// // } = require('lodash');
// // const {
// //   loggedIn,
// //   loggedOut
// // } = require('../actions/auth');

// // const {
// //   login,
// //   logout,
// //   refresh,
// //   forgotPassword,
// //   signup
// // } = require('../actions/auth').auth;

// // app.post('/signup', (req, res) => {
// //   signup(req, res)
// //     .then((user) => res.send({
// //       user: omit(user, 'password')
// //     }))
// //     .catch(err => {
// //       res.status(400).send({
// //         message: 'signup failed',
// //         err
// //       })
// //     })
// // });


// // app.post('/login', loggedOut, (req, res) => {
// //   login(req, body)
// //     .then(({
// //       token,
// //       user,
// //       projects
// //     }) => {
// //       res.send({
// //           token,
// //           user: omit(user, 'password'),
// //           projects,
// //         })
// //         .catch(() => {
// //           res.status(400).send({
// //             message: 'login failed',
// //             err: 'login failed'
// //           });
// //         });
// //     });
// // });

// // app.get('/logout', (req, res) => {
// //   logout(req.authKey).then(() => res.send({
// //     message: 'logged out'
// //   }));
// // });

// app.get('/logout')