---
title: "Enumeration From Windows"
date: 2026-11-08 16:09:02
categories: [Active Directory]
tags: [Enumeration, AD, Windows, PowerView]
index_img: /img/enumeration_windows.png
banner_img: /img/bg.jpg
description: "You've landed on a domain-joined Windows box. Here are the tools to load and the exact PowerView and ActiveDirectory-module commands to enumerate the domain, side by side."
---

You find yourself on a **domain-joined Windows machine** during an assessment. Before touching anything loud, the first job is **enumeration** — map the domain, its users, computers, groups and shares.

This post lists the commands two ways for each task: **PowerView** (the offensive toolkit) and the **ActiveDirectory module** (Microsoft's own, quieter and often already present). Pick whichever fits your situation.

<!-- more -->

## Tools you need

Load these before you start. `InviShell` hooks the registry so your PowerShell commands aren't logged by ScriptBlock/Module logging, then you import the AD module and PowerView.

**1. Start InviShell (non-admin)**

```
C:\AD\Tools\InviShell\RunWithRegistryNonAdmin.bat
```

**2. Import the ActiveDirectory module**

```powershell
Import-Module C:\AD\Tools\ADModule-master\Microsoft.ActiveDirectory.Management.dll
Import-Module C:\AD\Tools\ADModule-master\ActiveDirectory\ActiveDirectory.psd1
```

**3. Load PowerView**

```powershell
. .\PowerView.ps1
```

> **Where to get the tools** — download them from their official repos and drop them in `C:\AD\Tools\`:
> - **PowerView** → [PowerShellMafia/PowerSploit](https://github.com/PowerShellMafia/PowerSploit) (`Recon/PowerView.ps1`)
> - **AD Module** → [samratashok/ADModule](https://github.com/samratashok/ADModule)
> - **InviShell** → [OmerYa/Invisi-Shell](https://github.com/OmerYa/Invisi-Shell)
>
> Only use these in a lab or an engagement you're authorized to test.

## Domain info

### Get the current domain

PowerView:

```powershell
Get-Domain
```

ActiveDirectory module:

```powershell
Get-ADDomain
```

### Get another domain

PowerView:

```powershell
Get-Domain -Domain moneycorp.local
```

ActiveDirectory module:

```powershell
Get-ADDomain -Identity moneycorp.local
```

### Get the domain SID

PowerView:

```powershell
Get-DomainSID
```

ActiveDirectory module:

```powershell
(Get-ADDomain).DomainSID
```

### Get the domain policy (current domain)

PowerView:

```powershell
Get-DomainPolicyData
(Get-DomainPolicyData).systemaccess
```

### Get the domain policy (another domain)

PowerView:

```powershell
(Get-DomainPolicyData -domain moneycorp.local).systemaccess
```

## Domain controllers

### Current domain

PowerView:

```powershell
Get-DomainController
```

ActiveDirectory module:

```powershell
Get-ADDomainController
```

### Another domain

PowerView:

```powershell
Get-DomainController -Domain moneycorp.local
```

ActiveDirectory module:

```powershell
Get-ADDomainController -DomainName moneycorp.local -Discover
```

## Users

PowerView:

```powershell
Get-DomainUser
Get-DomainUser -Identity student1
```

ActiveDirectory module:

```powershell
Get-ADUser -Filter * -Properties *
Get-ADUser -Identity student1 -Properties *
```

## Computers

PowerView:

```powershell
Get-DomainComputer | select Name
Get-DomainComputer -OperatingSystem "*Server 2022*"
Get-DomainComputer -Ping
```

ActiveDirectory module:

```powershell
Get-ADComputer -Filter * | select Name
Get-ADComputer -Filter * -Properties *
Get-ADComputer -Filter 'OperatingSystem -like "*Server 2022*"' -Properties OperatingSystem | select Name,OperatingSystem
Get-ADComputer -Filter * -Properties DNSHostName | %{ Test-Connection -Count 1 -ComputerName $_.DNSHostName }
```

## Groups

### All groups

PowerView:

```powershell
Get-DomainGroup | select Name
```

ActiveDirectory module:

```powershell
Get-ADGroup -Filter * | select Name
Get-ADGroup -Filter * -Properties *
```

### Groups containing "admin"

PowerView:

```powershell
Get-DomainGroup *admin*
```

ActiveDirectory module:

```powershell
Get-ADGroup -Filter 'Name -like "*admin*"' | select Name
```

### Members of a group

PowerView:

```powershell
Get-DomainGroupMember -Identity "Group" -Recurse
```

ActiveDirectory module:

```powershell
Get-ADGroupMember -Identity "Group" -Recursive
```

### Groups a user belongs to

PowerView:

```powershell
Get-DomainGroup -UserName "student1"
```

ActiveDirectory module:

```powershell
Get-ADPrincipalGroupMembership -Identity student1
```

## Shares and files

PowerView only:

```powershell
Invoke-ShareFinder -Verbose          # shares on hosts in the current domain
Invoke-FileFinder -Verbose           # sensitive files on domain computers
Get-NetFileServer                    # all file servers in the domain
```
