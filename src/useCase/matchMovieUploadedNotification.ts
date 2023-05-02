
import { zMatchMovieRepository } from '../infra/matchMovieUploadedNotification';

const notifier = require("node-notifier");

// 設定情報
const apiKey = "YOUR_API_KEY";
const channelId = "YOUR_CHANNEL_ID";
const interval = 5 * 60 * 1000; // 5分ごとにチェック

// YouTube API クライアントを作成
const youtube = google.youtube({
  version: "v3",
  auth: apiKey,
});

// アップロード状態をチェックする関数
async function checkUploadStatus() {
  try {
    const response = await youtube.search.list({
      channelId,
      part: "snippet",
      type: "video",
      order: "date",
      maxResults: 1,
    });

    const video = response.data.items[0];
    const videoId = video.id.videoId;
    const title = video.snippet.title;

    // ここで動画のアップロード状態をチェックし、通知を表示する処理を行います。
    // ...（通知を表示するコード）
  } catch (error) {
    console.error("Error checking upload status:", error);
  }
}

// 5分ごとにアップロード状態をチェック
setInterval(checkUploadStatus, interval);

// スクリプト開始時にもアップロード状態をチェック
checkUploadStatus();

export class MatchMovieUploadedNotification {
    notify() {
      return 'Notification sent!';
    }
  }