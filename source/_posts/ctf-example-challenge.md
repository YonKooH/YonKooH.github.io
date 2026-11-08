---
title: "Example CTF Challenge"
date: 2026-11-05 21:00:00
categories: [CTF]
tags: [forensics, wireshark]
cover: /img/covers/ctf.svg
description: Template writeup for a CTF forensics challenge.
---

{% callout type="warning" %}
**Template post** for a CTF challenge. Delete it once you have real writeups.
{% endcallout %}

## Challenge

> We captured traffic from a compromised host. Find what was exfiltrated.

## Solution

```bash
tshark -r capture.pcap -Y "dns" -T fields -e dns.qry.name | sort | uniq -c | sort -rn | head
```

Explain each step and why you took it.

## Flag

`FLAG{replace_me}`
