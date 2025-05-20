import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import RepoDetails from './RepoDetails';
import fetchMostStarredRepos from '../utilities/api';

const AllRepos = () => {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadRepos = async () => {
    const { items }= await fetchMostStarredRepos(page);
    setRepos(prev => [...prev, ...items]);
    setPage(prev => prev + 1);

    if (items.length < 30) {
      setHasMore(false);
    }
  };

  useEffect(() => {
    loadRepos();
  }, []);

  return (
    <InfiniteScroll
      dataLength={repos.length}
      next={loadRepos}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={<p style={{ textAlign: 'center' }}><b>No more repos to show.</b></p>}
    >
      {repos.map(repo => (
        <RepoDetails key={repo.id} repo={repo} />
      ))}
    </InfiniteScroll>
  );
};

export default AllRepos;
