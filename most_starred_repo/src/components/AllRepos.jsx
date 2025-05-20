import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import RepoDetails from './RepoDetails';
import fetchMostStarredRepos  from '../utilities/api';

const AllRepos = () => {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);

  const loadRepos = async () => {
    const newRepos = await fetchMostStarredRepos(page);
    setRepos(prev => [...prev, ...newRepos]);
    setPage(prev => prev + 1);
  };

  useEffect(() => {
    loadRepos();
  }, []);

  return (
    <InfiniteScroll
      dataLength={repos.length}
      next={loadRepos}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      {repos.map(repo => (
        <RepoDetails key={repo.id} repo={repo} />
      ))}
    </InfiniteScroll>
  );
};

export default AllRepos;
