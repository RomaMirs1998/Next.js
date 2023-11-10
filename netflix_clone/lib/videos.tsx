import videoData from "../data/videos.json";

export const getVideos = ():Array<object> => {
  return videoData.items;
}