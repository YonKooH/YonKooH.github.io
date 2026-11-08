# YonKoo's blog — Hexo + Butterfly

## Write a new post
```bash
npx hexo new "HTB Machine Name"     # creates source/_posts/HTB-Machine-Name.md
```
Fill in `categories`, `tags`, `cover` (image in `source/img/`) and `description`, write the post, then:
```bash
git add . && git commit -m "New post" && git push
```
GitHub Actions rebuilds the site in ~1 minute.

## Preview on your computer
```bash
npm install
npx hexo server     # http://localhost:4000
```

## Change things
- Wallpaper: replace `source/img/bg.jpg`
- Avatar: replace `source/img/avatar.svg` (or point `avatar.img` in `_config.butterfly.yml` to a .png/.jpg)
- Menu, subtitle lines, sidebar, social links: `_config.butterfly.yml`
- Site title, URL: `_config.yml`
- About page: `source/about/index.md`
