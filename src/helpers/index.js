import cookie from 'cookie';

export function stringLimiter(string, maxLength) {
  if (string.length <= maxLength) {
    return string;
  }
  return `${string.substring(0, maxLength)}...`;
}

export function parseCookies(req) {
  return cookie.parse(req ? req.headers.cookie || '' : document.cookie);
}

export function getClassNameFor(name, sortConfig) {
  if (!sortConfig) {
    return 'span-link';
  }
  return sortConfig.key === name
    ? `span-link ${sortConfig.direction}`
    : 'span-link';
}
