import axios from "axios";
import React, { useEffect, useState } from "react";
//COMPONENTS
import Loading from "./Loading";
import RepoCards from "./RepoCards";

const MyRepos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  async function getRepos() {
    try {
      const response = await axios.get(
        "https://api.github.com/users/mertcanbakar/repos", {
        headers: {
          Authorization: `Token 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`
        }
      }
      );
      setRepos(response.data);
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getRepos();
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="repos-container" id="projects">
      <h1>Projects</h1>
      <ul className="repos">
        {repos.map((repo, idx)=>(
            <li className='repo-cards'><RepoCards repo={repo} key={idx}/></li>))}
      </ul>
    </div>
  );
};

export default MyRepos;
