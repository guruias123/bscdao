export default {
  root: () => '/dashboard',
  proposals: () => '/proposals',
  votes: () => '/votes',
  activeProjects: () => '/active_projects',
  rewards: () => '/rewards',
  auth: {
    root: () => '/auth',
    logIn: () => '/',
    logInWithNumio: () => '/auth/numio',
    signUp: () => '/auth/sign_up',
  },
}
