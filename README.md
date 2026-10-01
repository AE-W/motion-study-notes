# Motion Studies

A small GitHub Pages site for presenting observed motion and new interactions. The public page contains no unpublished results or private data until they are deliberately added.

To add a video, put the web-ready MP4 in `assets/videos/`, then set the relevant `video` field in `site.js` to `assets/videos/<filename>.mp4`. Edit the title, label, and description in the same entry. H.264 MP4 is the safest browser format. Keep large source videos outside Git; GitHub rejects files over 100 MB.

GitHub Pages serves `main` from the repository root. The site needs no build step.
