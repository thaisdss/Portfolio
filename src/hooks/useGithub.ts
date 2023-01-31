import axios from "axios";
import { useState } from "react";
import { Repos } from "../types/Repos";

export function useGithub(user: string) {
    const [avatarUrl, setAvatarUrl] = useState<string>("");
    const [repos, setRepos] = useState<Repos[]>([]);

    const data = async () => {
        try{
            const userData = await axios.get(user);
            const userRepos = await axios.get(`${user}/repos`);
    
            setAvatarUrl(userData.data.avatar_url)
    
            const filteredRepos = userRepos.data
            .filter((repo: any) => {
            return ["WaiterApp", "Costs", "Mini-Projects-React", "Mini-Projects-JS"].includes(repo.name);
            })
            .map((repo: any) => ({
            name: repo.name,
            description: repo.description,
            stargazers_count: repo.stargazers_count,
            forks_count: repo.forks_count,
            language: repo.language,
            page_url: repo.html_url,
            }));
    
            setRepos(filteredRepos);
        }
        catch(error) { console.log(error) }
    }

    data();

    return {avatarUrl, repos};
}