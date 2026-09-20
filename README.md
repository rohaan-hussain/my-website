# Syed Rohaan Hussain Portfolio

React and Tailwind portfolio for Syed Rohaan Hussain, inspired by the structure of Brittany Chiang's portfolio site and written with original content and visuals.

## Run locally

```bash
npm run dev
```

## Configure the résumé link

Copy `.env.example` to `.env.local` and replace the placeholder with the public S3 URL for the résumé:

```bash
VITE_RESUME_URL=https://your-bucket.s3.amazonaws.com/RohaanResume.pdf
```

The content is stored in `data/resume.json`. Update that file for text, links, projects, skills, or dates.

## Build for S3

```bash
npm run build
```

Upload the generated static output from `dist/client` to your S3 bucket. Configure the bucket or CloudFront distribution to serve `index.html` for the root document and error document.

The project currently uses abstract CSS project visuals as placeholders. Replace the `ProjectVisual` component in `app/page.tsx` with real screenshots when they are available.
