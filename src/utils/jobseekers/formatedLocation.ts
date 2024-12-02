const formatLocation = (location: LocationValue | null): string =>
    `${location?.city || ''}, ${location?.state || ''}, ${location?.country || ''}`
      .replace(/(^, )|(, ,)/g, '')
      .trim();



export default formatLocation