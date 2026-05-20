# 🎵 Astra - Music Player

> **Modern responsive music player built using HTML, CSS, and JavaScript with smooth animations, interactive controls, and dynamic playlist handling**

[![HTML5](https://img.shields.io/badge/Markup-HTML5-%23E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/Styling-CSS3-%231572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/Language-JavaScript-%23F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Responsive](https://img.shields.io/badge/Design-Responsive-success)](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

🔗 **[Live Demo](https://astra-musics.netlify.app/)** • 📚 **[Documentation](#documentation)** • 🐛 **[Report Bug](https://github.com/jatinagrahari/Astra-Music_Player/issues)** • ⭐ **[GitHub](https://github.com/jatinagrahari/Astra-Music_Player)**

---

## ✨ Features

- 🎵 **Interactive Music Player** - Smooth and modern music playback interface
- ⏯️ **Playback Controls** - Play, pause, next, and previous track support
- 📃 **Dynamic Playlist** - Easily switch between songs
- 🎚️ **Progress Tracking** - Real-time song progress updates
- 🖼️ **Album Artwork** - Dynamic music cover rendering
- 📱 **Responsive Design** - Optimized for desktop and mobile devices
- ⚡ **Fast Performance** - Lightweight frontend architecture
- 🎨 **Modern UI** - Glassmorphism-inspired design system
- 🔊 **Smooth Audio Playback** - Integrated HTML Audio API support

---

## 🏗️ Architecture

### Frontend Stack
- **Markup:** HTML5
- **Styling:** CSS3
- **Logic:** Vanilla JavaScript
- **Audio System:** HTML Audio API

---

## 🚀 Quick Start

### Prerequisites
- Modern web browser
- VS Code (recommended)

### Installation

#### Project Setup

```bash
# Clone the repository
git clone <your-repository-url>

# Navigate to project directory
cd Astra-Music_Player-main

# Open project
open index.html
```

---

## 📁 Project Structure

```bash
Astra-Music_Player-main/
├── assets/
│   ├── demo/               # Screenshots and previews
│   ├── images/             # Album artwork
│   └── songs/              # Music files
│
├── index.html              # Main application UI
├── style.css               # Styling and animations
├── script.js               # Core player functionality
├── musiclist.js            # Playlist data
└── README.md
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Structure** | HTML5 |
| **Styling** | CSS3 |
| **Logic** | JavaScript |
| **Audio System** | HTML Audio API |
| **Deployment** | Netlify |

---

## 🎵 Music Player Features

### Playback System
- Play and pause controls
- Song navigation system
- Dynamic progress updates
- Interactive player controls

### Playlist Management
- Dynamic song rendering
- Active track synchronization
- Smooth playlist interactions

### User Experience
- Responsive mobile layout
- Interactive animations
- Optimized spacing and controls

---

## 🎨 Customization

### Add New Songs

Edit `musiclist.js`:

```javascript
const allMusic = [
  {
    name: "Song Name",
    artist: "Artist Name",
    img: "image-file",
    src: "song-file"
  }
]
```

### Modify Styling

Customize the UI inside:

```bash
style.css
```

---

## 🎯 Learning Outcomes

This project demonstrates:

- ✅ JavaScript DOM manipulation
- ✅ Audio API integration
- ✅ Event handling
- ✅ Responsive web design
- ✅ Dynamic UI rendering
- ✅ Frontend project organization
- ✅ Interactive component development
- ✅ Playlist data management

---

## 📸 Screenshots

<details>
<summary><b>Click to expand screenshots</b></summary>

### Music Player Interface
![Screenshot](./assets/demo/ss-1.png)

### Playlist View
![Screenshot](./assets/demo/ss-2.png)

### Responsive Layout
![Screenshot](./assets/demo/ss-3.png)

</details>

---

## 🚀 Deployment

### Frontend Deployment (Netlify)

```bash
# Deploy static project
netlify deploy --prod
```

### Alternative Hosting
- GitHub Pages
- Vercel
- Firebase Hosting

---

## 🐛 Known Issues

- Volume controls not implemented yet
- Playlist persistence unavailable
- Shuffle and repeat mode pending

---

## 🔥 Technical Challenges Solved

- Managing audio playback state
- Synchronizing active track with UI
- Responsive layout optimization
- Dynamic playlist rendering
- Smooth user interaction flow

---

## 🚧 Current Status

Actively improving:

- Better UI animations
- Additional playback controls
- Enhanced mobile responsiveness
- Improved playlist experience

---

## 📝 Future Improvements

- 🔊 Volume controls
- 🔁 Repeat mode
- 🔀 Shuffle functionality
- 🌙 Dark/Light mode support
- ❤️ Favorite songs system
- 🔎 Search functionality

---

## 📝 License

This project is licensed under the MIT License.

---

## 📚 Resources & Documentation

- [HTML Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [HTML Audio API](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement)

---

## 🙏 Acknowledgments

- Built with ❤️ using Vanilla JavaScript
- Inspired by modern music streaming interfaces
- Thanks to the open-source web development community

---

## ⭐ Show your support

Give a ⭐️ if this project helped you build a better music experience!

**Enjoy music with Astra 🎵**
