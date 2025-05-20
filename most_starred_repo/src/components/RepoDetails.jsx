import React from 'react';

const RepoDetails = ({ repo }) => (
  <div className="repo-item">
    <img src={repo.owner.avatar_url} alt={repo.owner.login} width="50" />
    <div>
      <h3>{repo.name}</h3>
      <p>{repo.description}</p>
      <p>⭐ {repo.stargazers_count} | {repo.owner.login}</p>
    </div>
  </div>
);

export default RepoDetails;
