---
title: "HTB: Example Machine"
date: 2026-11-07 20:00:00
categories: [HackTheBox]
tags: [htb, linux, web, privesc]
cover: /img/covers/htb.svg
description: Template writeup for a HackTheBox machine. Copy it to start your own.
---

{% note info %}
**Template post.** Copy this file in `source/_posts/`, rename it, change the front matter above and replace this text with your writeup.
{% endnote %}

## Summary

One paragraph: what the box was about and the attack path in a sentence (e.g. *file upload → shell as www-data → sudo misconfiguration → root*).

## Recon

```bash
nmap -p- --min-rate 5000 -sCV -oN nmap/full 10.10.11.xx
```

```text
PORT     STATE SERVICE VERSION
22/tcp   open  ssh     OpenSSH 8.9p1
80/tcp   open  http    nginx 1.18.0
8080/tcp open  http    Apache Tomcat
```

## Foothold

Explain what you found and how you exploited it.

```bash
ffuf -u http://target.htb/FUZZ -w /usr/share/seclists/Discovery/Web-Content/raft-medium-words.txt
```

Put screenshots in `source/img/` and add them like this: `![upload form](/img/example-upload.png)`

## Privilege escalation

```bash
sudo -l
```

Explain the misconfiguration and how you abused it.

## Blue team view

What would this attack look like in the logs, and how would you detect it?

| Stage | What to look for |
| --- | --- |
| Upload | Web server writing an executable file to the upload folder |
| Shell | `www-data` spawning `/bin/sh` |
| Privesc | `sudo` run by a service account |

## Lessons learned

- Enumerate every open port, not just 80.
- Check `sudo -l` early.
