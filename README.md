# AndrewData — Andrew C. Tutor (Local + LAN preview)

This repository contains a static portfolio site (HTML/CSS/JS). To preview it locally and make it available to other devices on the same network, run the small Express server included here.

Quick start

1. Install Node.js (if not installed): https://nodejs.org/
2. Open PowerShell and change to the project folder:

```powershell
cd "C:\Users\Mia\OneDrive\Desktop\Andrew Job"
```

3. Install dependencies and start the server:

```powershell
npm install
npm start
```

4. From your laptop/PC, determine your local IPv4 address (example):

```powershell
ipconfig
# Look for IPv4 Address under your active adapter (e.g. 192.168.1.4)
```

5. On another device on the same network (phone/laptop), open:

```
http://<your-local-ip>:3000
```

Notes
- The server listens on all interfaces by default (`0.0.0.0`) so other devices on the LAN can connect.
- If Windows Firewall blocks access, run PowerShell as Administrator and allow port 3000:

```powershell
New-NetFirewallRule -DisplayName "AndrewData Node Server" -Direction Inbound -Action Allow -Protocol TCP -LocalPort 3000
```

Customize
- To change the port: set the `PORT` environment variable before starting, e.g. `powershell: $env:PORT=8080; npm start`.
