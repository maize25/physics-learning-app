'use client'

import { useMemo, useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface YoutubeEmbedProps {
  videoId: string;
  title: string;
  source: string;
}

function extractYouTubeId(value: string) {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtube\.com\/embed\/|youtu\.be\/)([A-Za-z0-9_-]{11})/,
    /^([A-Za-z0-9_-]{11})$/,
  ];

  for (const pattern of patterns) {
    const match = value.match(pattern);
    if (match) {
      return match[1];
    }
  }

  return null;
}

function getEmbedUrl(value: string) {
  const id = extractYouTubeId(value);
  return id ? `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&enablejsapi=1` : null;
}

export default function YoutubeEmbed({ videoId, title, source }: YoutubeEmbedProps) {
  const [errored, setErrored] = useState(false);
  const embedUrl = useMemo(() => getEmbedUrl(videoId), [videoId]);
  const watchUrl = useMemo(() => {
    const id = extractYouTubeId(videoId);
    return id ? `https://www.youtube.com/watch?v=${id}` : 'https://www.youtube.com';
  }, [videoId]);

  if (!embedUrl || errored) {
    return (
      <div className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-slate-900 p-6 text-slate-100 shadow-sm">
        <p className="mb-4 text-lg font-semibold text-white">Video unavailable</p>
        <p className="mb-4 text-sm text-slate-300 dark:text-slate-400">This lesson video could not be loaded, but you can still watch it on YouTube.</p>
        <a
          href={watchUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
        >
          <ExternalLink className="h-4 w-4" /> Watch on YouTube →
        </a>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="aspect-video overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-sm">
        <iframe
          title={title}
          src={embedUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onError={() => setErrored(true)}
          className="h-full w-full"
        />
      </div>
      <p className="text-sm text-slate-500">Source: {source}</p>
    </div>
  );
}
