const formatLocation = (location: LocationValue | null): string =>
    `${location?.place || ''}, ${location?.city || ''}, ${location?.state || ''}, ${location?.country || ''}`
      .replace(/(^, )|(, ,)/g, '')
      .trim();



export default formatLocation