import { PODCAST_PREFIX } from "./constants";

export function isUrlValid(url: string) {
  if (!url.startsWith(PODCAST_PREFIX)) {
    return false;
  }
  const pid = url.replace(PODCAST_PREFIX, "");
  if (!pid) {
    return false;
  }
  return true;
}

export function getPodcastId(url: string) {
  if (isUrlValid(url)) {
    const pid = url.replace(PODCAST_PREFIX, "");
    return pid;
  }
  return null;
}

export function getPodcastUrl(pid: string) {
  return PODCAST_PREFIX + pid;
}
