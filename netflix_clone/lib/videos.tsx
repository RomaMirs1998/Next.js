import videoData from "../data/videos.json";

interface Video {
  title: string;
  url: string;
  id: string;
}
export const getVideos = async (searchQuery:string): Promise<Video[]> => {
  try{
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

  if (!YOUTUBE_API_KEY) {
    throw new Error("Missing YOUTUBE_API_KEY environment variable.");
  }

  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}%20Trailer&key=${YOUTUBE_API_KEY}`)

  const videoData = await response.json();

  console.log(searchQuery,videoData)

  if (!videoData || !Array.isArray(videoData.items)) {
    throw new Error('No video items found in the response.');
  }
  
  return videoData?.items.map((video: any) => {
    return {
      title: video.snippet.title,
      imgUrl: video.snippet.thumbnails.high.url,
      id: video?.id?.videoId,
    };
  });
}catch(error){
  console.error("Failed to fetch videos:", error);
  //console.log("VIDEODATA IN ERROR:",videoData)
  return []
};
}
