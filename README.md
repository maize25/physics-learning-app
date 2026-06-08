Physics & Math Learning App

A Next.js web application for physics and mathematics learning with a focus on astronomy and astrophysics.

Features:
- Interactive lessons on astronomy, black holes, and modern physics concepts.
- Quizzes to test understanding of science and math topics.
- Educational videos for core astrophysics subjects.
- NASA and ISRO news section for recent discoveries and mission updates.
- Books and scientist stories with downloadable PDF support.
- Daily quotes from famous scientists.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000` in your browser to preview the app.

## Preview

Use the local development server to preview changes instantly. The app will reload automatically when files are updated.

## Project structure

- `app/page.tsx` — homepage
- `app/lessons/page.tsx` — lessons overview
- `app/quizzes/page.tsx` — quiz UI
- `app/videos/page.tsx` — embedded video content
- `app/news/page.tsx` — news summaries
- `app/books/page.tsx` — book and PDF reader placeholder
- `app/quotes/page.tsx` — daily quotes and scientist quotes list

## Notes

- The books page currently shows a reading list placeholder. Add PDF files to the `public/` folder and update `components/BooksReader.tsx` to load them for embedded reading.
- News content is placeholder data and can be updated manually or integrated with a news API later.
- This environment cannot push directly to GitHub because the project is not currently initialized as a git repository here.

## GitHub deployment

To add the app to your GitHub repository, initialize git in the project folder, commit the files, and push to your GitHub repo:

```bash
git init
git add .
git commit -m "Initial physics learning app"
git remote add origin <YOUR_GITHUB_REPO_URL>
git branch -M main
git push -u origin main
```

After that, you can connect the repository to a hosting service like Vercel or GitHub Pages.
