export class YouTubeApiConnectorMock implements IYouTubeApiConnector {
   isVideoUploaded(videoId: string): boolean {
    return true;
  }
}