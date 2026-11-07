---
title: "HTB: Example Machine"
date: 2026-11-07 20:00:00 +0100
categories: [HackTheBox, Linux]
tags: [htb, nmap, web, privesc, easy]
image:
  path: /assets/img/posts/htb-banner.svg
  alt: HackTheBox writeup
---

> This is a **template post**. Copy this file, rename it `YYYY-MM-DD-name.md`, and replace the content with your own writeup.
{: .prompt-tip }

## Overview

| Name | Example |
| :--- | :--- |
| OS | Linux |
| Difficulty | Easy |
| Skills | Enumeration, web exploitation, sudo abuse |

## Recon

Start with a full port scan:

```bash
nmap -p- --min-rate 5000 -sCV -oN nmap/full 10.10.11.xx
```

```text
PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 8.9p1
80/tcp open  http    nginx 1.18.0
```

## Foothold

Describe how you found the vulnerability and got a shell.

```bash
ffuf -u http://example.htb/FUZZ -w /usr/share/seclists/Discovery/Web-Content/raft-medium-words.txt
```

> Put screenshots in `assets/img/posts/` and include them with `![desc](/assets/img/posts/file.png)`.
{: .prompt-info }

## Privilege Escalation

```bash
sudo -l
```

Explain the misconfiguration and how you abused it to get root.

## Flags

- `user.txt` ✔
- `root.txt` ✔

## Lessons learned

- Always enumerate every open port.
- Check `sudo -l` early.
