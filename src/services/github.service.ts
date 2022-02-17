import axios from 'axios'

interface GitHubDataResponse {
  [key: string]: any // eslint-disable-line
}

const getGitHubData = async (username: string): Promise<GitHubDataResponse> => {
  try {
    const { data } = await axios.get(`https://api.github.com/users/${username}`)

    return data
  } catch (error) {
    return {}
  }
}

export {
  getGitHubData
}
