import { g, auth, config } from '@grafbase/sdk'
import { group } from 'console'

// Welcome to Grafbase!
// Define your data models, integrate auth, permission rules, custom resolvers, search, and more with Grafbase.
// Integrate Auth
// https://grafbase.com/docs/auth
//
// const authProvider = auth.OpenIDConnect({
//   issuer: process.env.ISSUER_URL ?? ''
// })
//
// Define Data Models
// https://grafbase.com/docs/database


const User = g.model('User', {
  name: g.string(),
  email: g.email().optional(),
  avatarUrl: g.url().optional(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  projects: g.relation(()=> Project).list().optional(),

})
const Project = g.model('Project',{
  title : g.string(),
  description: g.string(),
  image : g.url(),
  liveSiteUrl: g.url().optional(),
  githubUrl : g.url(),
  category: g.string().search(),
  author: g.relation(()=>User)


})
export default config({
  schema: g
  // Integrate Auth
  // https://grafbase.com/docs/auth
  // auth: {
  //   providers: [authProvider],
  //   rules: (rules) => {
  //     rules.private()
  //   }
  // }
})
