// src/utils/buildImageUrl.js
const MEDIA_URL = process.env.NEXT_PUBLIC_MEDIA_URL || "http://127.0.0.1:8000";

export default function buildImageUrl(path) {
  if (!path) return null;
  return path.startsWith("http") ? path : `${MEDIA_URL}${path}`;
}
