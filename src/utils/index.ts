import { compareDesc, parseISO } from "date-fns";

export const cx = (...classNames) => classNames.filter(Boolean).join(" ");

export const sortBlogs = (blogs) => {
  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};

// Convert hex string to emoji
export const hexToEmoji = (hex: string) => {
  try {
    // Convert hex string to bytes
    const bytes = [];
    for (let i = 0; i < hex.length; i += 2) {
      bytes.push(parseInt(hex.substring(i, i + 2), 16));
    }
    
    // Convert bytes to UTF-8 string
    const decoder = new TextDecoder('utf-8');
    const utf8String = decoder.decode(new Uint8Array(bytes));
    
    return utf8String;
  } catch (e) {
    console.error("Error converting hex to emoji:", e, hex);
    return "";
  }
}

// Group emojis by category
export const groupEmojisByCategory = (tags: Record<string, any>, tagOrder: string[]) => {
  const groupedEmojis: Record<string, any[]> = {}

  // Initialize groups based on tag order
  tagOrder.forEach((tag) => {
    groupedEmojis[tag] = []
  })

  // Populate groups
  Object.entries(tags).forEach(([key, data]) => {
    const motherTags = data.motherTags || []

    if (motherTags.length === 0) {
      // If no mother tags, add to its own category
      if (!groupedEmojis[data.title]) {
        groupedEmojis[data.title] = []
      }
      groupedEmojis[data.title].push({ key, data })
    } else {
      // Add to each mother tag category
      motherTags.forEach((tag) => {
        if (groupedEmojis[tag]) {
          groupedEmojis[tag].push({ key, data })
        }
      })
    }
  })

  return groupedEmojis
}
