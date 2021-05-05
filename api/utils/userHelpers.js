const extractUniqueUsers = (feed) => {
  const users = feed.map((user) =>
    JSON.stringify({ userId: user.user_id, username: user.username }),
  );
  const uniqueStringifiedSet = [...new Set(users)];
  return uniqueStringifiedSet.map((user) => JSON.parse(user));
};

module.exports = {
  extractUniqueUsers,
};
