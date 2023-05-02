import { google } from 'googleapis';
import * as dotenv from 'dotenv';

dotenv.config();

async function getChannelInfo(apiKey: string, channelId: string) {
  const youtube = google.youtube({
    version: 'v3',
    auth: process.env.YOUTUBE_API_KEY,
  });

  
  // Channelsリソースから情報を取得
  const response = await youtube.channels.list({
    part: ['contentDetails'],
    id: ["UCEb5EUbFP3HwShlu3dO4c7Q"],
  });

  // チャンネル情報を表示
  if (response.data.items != null && response.data.items.length > 0) {
    const uploadsPlaylistId = response.data.items![0].contentDetails!.relatedPlaylists!.uploads;

  const playlistItemsResponse = await youtube.playlistItems.list({
    part: ['snippet'],
    playlistId: uploadsPlaylistId,
    maxResults: 1,
  });

  if (playlistItemsResponse.data.items && playlistItemsResponse.data.items.length > 0) {
    const latestVideo = playlistItemsResponse.data.items[0].snippet!;
    console.log('Latest video information:');
    console.log(`Title: ${latestVideo.title}`);
    console.log(`Description: ${latestVideo.description}`);
    console.log(`Published at: ${latestVideo.publishedAt}`);
    console.log(`Video ID: ${latestVideo.resourceId!.videoId}`);
  } else {
    console.log('No videos found.');
  }
    console.log(response.data.items[0]);  
  } else {
    console.log('No channel found.');
  }
}







export class YouTubeApiConnector implements IYouTubeApiConnector {
  constructor(){
  }

  async fetch(){
    await getChannelInfo("aa", "bbb")
  }
  
  isVideoUploaded(videoId: string): boolean {
    return true;
  }
}