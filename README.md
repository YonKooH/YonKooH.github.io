# YonKoo's blog — Jekyll + Chirpy

CTF / HackTheBox writeup blog, hosted free on GitHub Pages.

## Publish it (5 minutes)

1. **Create the repo** on GitHub named exactly `<your-username>.github.io` (public).
2. If your username is NOT `yonkoo`, edit `_config.yml`:
   - `url: "https://<your-username>.github.io"`
   - `github: username: <your-username>`
   - the GitHub link under `social: links:`
3. Push this folder:
   ```bash
   cd yonkoo.github.io
   git init -b main
   git add .
   git commit -m "Initial blog"
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```
4. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
5. Wait ~2 min (Actions tab shows the build) → open `https://<your-username>.github.io`.

## Write a new writeup

Create `_posts/YYYY-MM-DD-machine-name.md`, copy the front matter from the example post,
then commit and push. The site rebuilds automatically.

Images go in `assets/img/posts/`. Replace `assets/img/avatar.svg` with your own photo/logo if you like.

## Run locally (optional)

```bash
bundle install
bundle exec jekyll serve   # http://127.0.0.1:4000
```
