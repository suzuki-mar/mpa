import { YouTubeApiConnector } from './youTubeApiConnector'

describe('YouTubeApiConnector', () => {
  // describe('isVideoUploaded', () => {
  //   it('アップロードしていた場合', () => {            
  //     expect(YouTubeApiConnector.isVideoUploaded).toBe(true)
  //   });
  // })
  
  describe('fetch', () => {
    it('アップロードしていた場合', () => {            
      const apiConnector = new YouTubeApiConnector
      apiConnector.fetch();
    });
  })


});


const channelResponse = await youtube.channels.list({
  part: ['contentDetails'],
  id: [channelId],
});

if (channelResponse.data.items && channelResponse.data.items.length > 0) {
  
} else {
  console.log('No channel found.');
}