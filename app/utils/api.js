import axios from 'axios';

const id = '74117cfb0509ab87b5de';
const sec = "2f8c663f9a1f4efb8680f2477e70e031a54dbd2f";
const params = `?client_id=${id}&client_secret=${sec}`


const getProfile = (username) => {
  return axios.get(`https://api.github.com/users/${username}${params}`)
    .then((user) => {
      return user.data;
    });
}

const getRepos = (username) => {
  return axios.get(`https://api.github.com/users/${username}/repos${params}&per_page=100`)
}

const getStarCount = (repos) => {
  return repos.data.reduce((count, repo) => {
    return count + repo.stargazers_count;
  }, 0)
}

const calculateScore = (profile, repos) => {
  let followers = profile.followers;
  let totalStars = getStarCount(repos);

  return (followers * 3) + totalStars;
}

const handleError = (err) => {
  console.warn(error);
  return null;
}

const getUserData = (player) => {
  return axios.all([
    getProfile(player),
    getRepos(player)
  ]).then((data) => {
    const profile = data[0];
    const repos = data[1];

    return {
      profile,
      score: calculateScore(profile, repos)
    }
  })
}

const sortPlayers = (players) => {
  return players.sort((a,b) => {
    return b.score - a.score;
  });
}

module.exports = {

  battle: (players) => {
    return axios.all(players.map(getUserData))
      .then(sortPlayers).catch(handleError)
  },

  fetchPopularRepos: (language) => {
    let encodedURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)
    
    return axios.get(encodedURI)
      .then(res => res.data.items);
  }
}