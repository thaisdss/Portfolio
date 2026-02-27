import { useEffect, useState } from "react"
import { github } from "../services/github-api"
import type { UserRepo } from "../types/UseRepo"

export const useGithub = (user: string, repoNames: string[]) => {
  const [avatarUrl, setAvatarUrl] = useState<string>("")
  const [repos, setRepos] = useState<UserRepo[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userData, userRepos] = await Promise.all([
          github.get(user),
          github.get(`${user}/repos`)
        ])

        setAvatarUrl(userData.data.avatar_url)

        const filteredRepos = userRepos.data
        .filter((repo: UserRepo) =>repoNames.includes(repo.name))
        .sort((a: UserRepo, b: UserRepo) => repoNames.indexOf(a.name) - repoNames.indexOf(b.name))

        setRepos(filteredRepos)
      } 
      catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [user, repoNames])

  return { avatarUrl, repos }
}