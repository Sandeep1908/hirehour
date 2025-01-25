const formatLocation = (location: LocationValue | null) => {
  if (!location) {
    return null; // Or any custom message
  }

  return `${location?.city || ''}, ${location?.state || ''}, ${location?.country || ''}`
    .replace(/(^, )|(, ,)/g, '')
    .trim();
}

export default formatLocation;
