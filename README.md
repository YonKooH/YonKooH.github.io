# YonKoo's blog — Hexo + Redefine

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
- Wallpaper: replace `source/img/bg.jpg` (or change `home_banner.image` in `_config.redefine.yml`)
- Avatar: replace `source/img/avatar.svg` (or point `defaults.avatar` in `_config.redefine.yml` to a .png/.jpg)
- Menu, banner subtitle lines, sidebar, social links: `_config.redefine.yml`
- Site title, URL: `_config.yml`
- About page: `source/about/index.md`
- Notes inside posts: `{% callout type="info" %} ... {% endcallout %}` (types: info, warning, danger, success, tip)
