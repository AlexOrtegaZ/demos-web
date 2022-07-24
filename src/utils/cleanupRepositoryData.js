const MS_PER_MONTH = 2629743830;

const getUTC = date => Date.UTC(
  date.getFullYear(), 
  date.getMonth(),
  date.getDate()
);

const getMonthsAgo = updatedAt => {
  const updatedAtDate = new Date(updatedAt);
  const updatedAtUTC = getUTC(updatedAtDate);

  const currentDate = new Date();
  const currentUTC = getUTC(currentDate);

  const diff = Math.abs(currentUTC - updatedAtUTC);

  const monthsAgo = Math.round(diff / MS_PER_MONTH);

  return monthsAgo;
};

const cleanupRepositoryData = (data = {}) => {
  if (data === null) return {};

  if (Object.entries(data).length === 0) {
    return {};
  }

  const { message } = data;
  if (message) return { message };

  const { owner, updated_at: updatedAt, html_url: htmlURL } = data;
  const { avatar_url, login } = owner;

  const monthsAgo = getMonthsAgo(updatedAt);

  return { 
    ownerAvatar: avatar_url, 
    ownerUser: login, 
    lastUpdate: monthsAgo,
    htmlURL: htmlURL
  };
};

export default cleanupRepositoryData;