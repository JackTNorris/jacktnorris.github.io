const TOPIC_EMOJI_MAP: Record<string, string> = {
  math: "🧮 math",
  life: "🌱 life",
  travel: "🧳 travel",
  "computer-science": "💻 computer science",
  books: "📚 books",
  "peace-corps": "🕊️ peace corps",
};

const EMOJI_TO_TOPIC_MAP: Record<string, string> = Object.fromEntries(
  Object.entries(TOPIC_EMOJI_MAP).map(([plain, emoji]) => [emoji, plain])
);

// emoji label -> URL-encodable slug (e.g. "peace%20corps")
export const emojiTopicToUrl = (emojiTopic: string): string => {
  const plain = EMOJI_TO_TOPIC_MAP[emojiTopic] ?? emojiTopic;
  return encodeURIComponent(plain);
}

export const urlToEmojiTopic = (urlTopic: string): string => {
  const decoded = decodeURIComponent(urlTopic);
  return TOPIC_EMOJI_MAP[decoded] ?? decoded;
}

export default {
  emojiTopicToUrl,
  urlToEmojiTopic,
};
