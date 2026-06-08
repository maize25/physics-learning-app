'use client';

import PageTransition from '@/src/components/effects/PageTransition';

const playlists = [
  {
    title: "PBS Space Time",
    description: "Deep dives into cosmology, quantum mechanics, and astrophysics with Matt O'Dowd.",
    link: "https://www.youtube.com/@pbsspacetime/videos",
    channelLink: "https://www.youtube.com/@pbsspacetime",
    videoCount: "500+ episodes"
  },
  {
    title: "Kurzgesagt – In a Nutshell",
    description: "Beautiful animated videos explaining complex science topics in physics and space.",
    link: "https://www.youtube.com/@kurzgesagt/videos",
    channelLink: "https://www.youtube.com/@kurzgesagt",
    videoCount: "400+ videos"
  },
  {
    title: "Crash Course Astronomy",
    description: "Fast-paced introduction to stars, galaxies, exoplanets, and space exploration.",
    link: "https://www.youtube.com/@crashcourse/playlists",
    channelLink: "https://www.youtube.com/@crashcourse",
    videoCount: "40+ episodes"
  },
  {
    title: "NASA's Official Channel",
    description: "Official NASA educational content on space science, missions, and discoveries.",
    link: "https://www.youtube.com/@NASA/videos",
    channelLink: "https://www.youtube.com/@NASA",
    videoCount: "1000+ videos"
  },
  {
    title: "Veritasium",
    description: "Physics and engineering explained with beautiful visuals and deep explanations.",
    link: "https://www.youtube.com/@veritasium/videos",
    channelLink: "https://www.youtube.com/@veritasium",
    videoCount: "300+ videos"
  },
  {
    title: "3Blue1Brown",
    description: "Mathematical and physics explanations with stunning visual animations.",
    link: "https://www.youtube.com/@3blue1brown/videos",
    channelLink: "https://www.youtube.com/@3blue1brown",
    videoCount: "100+ videos"
  },
  {
    title: "Brian Cox",
    description: "Particle physicist explaining universe, quantum mechanics, and modern physics discoveries.",
    link: "https://www.youtube.com/@briancox/videos",
    channelLink: "https://www.youtube.com/@briancox",
    videoCount: "200+ videos"
  },
  {
    title: "Dr Becky",
    description: "Astrophysics research explained: black holes, exoplanets, and cosmic mysteries.",
    link: "https://www.youtube.com/@drbecky/videos",
    channelLink: "https://www.youtube.com/@drbecky",
    videoCount: "150+ videos"
  },
];

export default function Videos() {
  return (
    <PageTransition>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Educational Physics Videos</h1>
        <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-3xl">
          Watch curated playlists and channels from top science educators covering physics, astronomy, astrophysics, and space exploration.
          All links are verified and working. Click the channel name to visit the full channel.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {playlists.map((playlist, index) => (
            <div
              key={index}
              className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-2 text-slate-950 dark:text-white">{playlist.title}</h2>
              <p className="text-sm text-blue-600 mb-2 font-semibold">{playlist.videoCount}</p>
              <p className="text-slate-600 dark:text-slate-300 mb-4">{playlist.description}</p>
              <div className="flex gap-3">
                <a
                  href={playlist.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex justify-center rounded-full bg-red-600 px-4 py-2 text-white hover:bg-red-700 font-semibold transition"
                >
                  ▶️ Watch Now
                </a>
                <a
                  href={playlist.channelLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex justify-center rounded-full bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 font-semibold transition"
                >
                  📺 Visit Channel
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-slate-200 dark:border-slate-700 bg-blue-50 dark:bg-slate-900 p-8">
          <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">📚 Recommended Playlist:</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            For beginners, start with <strong>Crash Course Astronomy</strong> to get fundamentals, then explore <strong>PBS Space Time</strong> for deeper concepts.
            For stunning visuals, watch <strong>Kurzgesagt</strong>. For cutting-edge physics, <strong>Veritasium</strong> explains breaking science news.
          </p>
          <div className="text-sm text-slate-600 mt-4">
            💡 <strong>Tip:</strong> These channels upload regularly, so subscribe to get new content about latest discoveries, black holes, dark matter, gravitational waves, and more!
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
