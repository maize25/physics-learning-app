'use client';

import { useEffect, useState } from "react";
import PageTransition from "@/src/components/effects/PageTransition";

interface NewsItem {
  title: string;
  description: string;
  link: string;
  source: string;
  date?: string;
  imageUrl?: string;
}

export default function News() {
  const [nasaNews, setNasaNews] = useState<NewsItem[]>([]);
  const [apodImage, setApodImage] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch NASA APOD (Astronomy Picture of the Day)
    const fetchAPOD = async () => {
      try {
        const res = await fetch(
          "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=1"
        );
        const data = await res.json();
        if (Array.isArray(data)) {
          setApodImage(data[0]);
        }
      } catch (error) {
        console.log("APOD loading - using DEMO_KEY limits");
      }
    };

    fetchAPOD();
    setLoading(false);
  }, []);

  const nasaAndIsroNews: NewsItem[] = [
    {
      title: "NASA's James Webb Space Telescope Discoveries",
      description: "The James Webb Space Telescope continues to discover distant galaxies, nebulae, and exoplanets. Recent discoveries include the most distant galaxies ever observed and detailed images of star-forming regions.",
      link: "https://www.nasa.gov/jwst/",
      source: "NASA",
      imageUrl: "🔭"
    },
    {
      title: "NASA's Artemis Program - Moon Landing Initiative",
      description: "Artemis aims to land humans on the Moon and establish a sustainable presence. The program includes missions to test lunar landers, rovers, and habitats for long-term exploration.",
      link: "https://www.nasa.gov/artemis/",
      source: "NASA",
      imageUrl: "🌙"
    },
    {
      title: "Perseverance Rover Exploring Mars",
      description: "NASA's Perseverance rover continues exploring Jezero Crater on Mars, searching for signs of ancient microbial life and collecting rock samples for future return to Earth.",
      link: "https://www.nasa.gov/perseverance/",
      source: "NASA",
      imageUrl: "🔴"
    },
    {
      title: "Parker Solar Probe - Touching the Sun",
      description: "NASA's Parker Solar Probe is the fastest spacecraft ever built and is studying the Sun's corona. Recent flybys have brought us closer to understanding solar physics and space weather.",
      link: "https://www.nasa.gov/parker/",
      source: "NASA",
      imageUrl: "☀️"
    },
    {
      title: "ISRO's Chandrayaan-3 Moon Mission",
      description: "India's Chandrayaan-3 successfully landed on the lunar south pole, demonstrating India's capability in space exploration. Future missions will focus on orbital mapping and sample collection.",
      link: "https://www.isro.gov.in/Chandrayaan-3.html",
      source: "ISRO",
      imageUrl: "🇮🇳"
    },
    {
      title: "ISRO's Gaganyaan - Human Spaceflight Program",
      description: "India's Gaganyaan program aims to send Indian astronauts to space. The first uncrewed test flight is planned, with crewed missions to follow in subsequent years.",
      link: "https://www.isro.gov.in/Gaganyaan.html",
      source: "ISRO",
      imageUrl: "🚀"
    },
    {
      title: "Gravitational Wave Detection - LIGO Updates",
      description: "LIGO continues detecting gravitational waves from merging black holes and neutron stars. Each detection provides new insights into the most extreme objects in the universe.",
      link: "https://www.ligo.caltech.edu/",
      source: "NASA/Caltech",
      imageUrl: "🌊"
    },
    {
      title: "Exoplanet Discoveries - Thousands of Worlds",
      description: "Astronomers have discovered over 5,500 exoplanets orbiting distant stars. Some may have conditions suitable for life. This number grows daily with new discoveries.",
      link: "https://exoplanetarchive.ipac.caltech.edu/",
      source: "NASA",
      imageUrl: "🌍"
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">NASA & ISRO News</h1>
      <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-3xl">
        Latest space discoveries, missions, and updates from NASA and ISRO. Includes NASA's Astronomy Picture of the Day (APOD).
      </p>

      {/* NASA APOD Section */}
      {apodImage && (
        <div className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-6 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🔭 NASA APOD - Astronomy Picture of the Day</h2>
          <div className="rounded-lg overflow-hidden mb-4">
            <img
              src={apodImage.url || apodImage.hdurl}
              alt={apodImage.title}
              className="w-full h-auto object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{apodImage.title}</h3>
          <p className="text-slate-700 dark:text-slate-300 mb-4">{apodImage.explanation}</p>
          {apodImage.copyright && (
            <p className="text-sm text-slate-600 dark:text-slate-300">Credit: {apodImage.copyright}</p>
          )}
          {apodImage.hdurl && (
            <a
              href={apodImage.hdurl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 font-semibold transition mt-3"
            >
              View High Resolution
            </a>
          )}
        </div>
      )}

      {/* NASA & ISRO News Grid */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">📰 Latest Mission Updates & Discoveries</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {nasaAndIsroNews.map((newsItem, index) => (
            <div
              key={index}
              className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="text-3xl">{newsItem.imageUrl}</div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-blue-600">{newsItem.source}</p>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{newsItem.title}</h3>
                </div>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-4">{newsItem.description}</p>
              <a
                href={newsItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 font-semibold transition text-sm"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Resources Section */}
      <div className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-950 p-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🔗 Official Space Agency Links</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <a
            href="https://www.nasa.gov/news/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 font-semibold transition text-center"
          >
            🚀 NASA News
          </a>
          <a
            href="https://www.isro.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-orange-600 hover:bg-orange-700 text-white px-6 py-4 font-semibold transition text-center"
          >
            🇮🇳 ISRO Official
          </a>
          <a
            href="https://www.esa.int/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-purple-600 hover:bg-purple-700 text-white px-6 py-4 font-semibold transition text-center"
          >
            🇪🇺 ESA Official
          </a>
        </div>
        <p className="text-slate-700 mt-6">
          <strong>💡 Updates:</strong> NASA's APOD updates daily. For the latest news, visit the official NASA and ISRO websites.
          The links above go directly to their news sections where you can find the most current discoveries and mission updates.
        </p>
      </div>
    </div>
  );
}
