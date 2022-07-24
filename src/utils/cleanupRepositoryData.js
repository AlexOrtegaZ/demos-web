const cleanupRepositoryData = (data = {}) => {
  if (data === null) return {};

  if (Object.entries(data).length === 0) {
    return {};
  }

  const { message } = data;
  if (message) return { message };

  const { owner, updated_at, html_url } = data;
  const { avatar_url, login} = owner;

  return { 
    ownerAvatar: avatar_url, 
    ownerUser: login, 
    lastUpdate: updated_at,
    htmlURL: html_url
  };
};

export default cleanupRepositoryData;