import React from "react";
import useFetch from "hooks/useFetch";
import useUser from "context/UserContext";

const Feed = () => {
  const { user } = useUser();
  const { data, isLoading: isFetchLoading, error } = useFetch("/users");

  if (isFetchLoading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div>
      <div>ss</div>
    </div>
  );
};

export default Feed;
