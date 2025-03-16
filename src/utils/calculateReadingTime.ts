
export function calculateReadingTime(content: string): number {
  // Average reading speed: 200 words per minute
  const words = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(words / 200);
  
  // Return at least 1 minute
  return Math.max(1, readingTime);
}
