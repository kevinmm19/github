import { getGitHubData } from '@/services/github.service'

describe('GitHub service', () => {
  describe('when username exists', () => {
    it('should get the GitHub data of the username', async () => {
      const gitHubData = await getGitHubData('test')
      const entries = Object.keys(gitHubData)

      expect(entries.length).toBeGreaterThan(0)
    })

    it('should contain the login property that matches the username', async () => {
      const gitHubData = await getGitHubData('test')

      expect(gitHubData).toHaveProperty('login')
      expect(gitHubData.login).toBe('test')
    })
  })

  describe('when username does not exist', () => {
    it('should return empty object', async () => {
      const gitHubData = await getGitHubData('nonexistentuser-test')
      const entries = Object.keys(gitHubData)

      expect(entries.length).toBe(0)
    })
  })
})
