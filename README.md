# 🗑️ Twitter Auto Unbookmark Script

This script **automatically removes Twitter bookmarks** by:
- **Scrolling** through your entire bookmarks list
- **Clicking** the correct "Remove Bookmark" button
- **Removing up to 500 bookmarks per run** (adjustable)
- **Preventing rate limits** with safe delays

⚡ **Fully automated—just paste and run!**  

---

## 🚀 How to Use
1. **Open Twitter Bookmarks**:  
   - [🔗 Go to Twitter Bookmarks](https://twitter.com/i/bookmarks)
   
2. **Open Developer Console**:  
   - Windows: `F12` or `Ctrl + Shift + J`  
   - Mac: `Cmd + Option + J`  

3. **Paste & Run the Script**:  
   - Copy the script from [`script.js`](script.js)  
   - Paste it into the console  
   - Press **Enter**  

🔥 The script will **continuously scroll and remove bookmarks** until 500 are removed (or no more are found).  
💡 If you have **more than 500**, just **run the script again**!

---

## ⚙️ Configuration
You can modify these settings in the script:

| Variable | Description | Default |
|----------|------------|---------|
| `MAX_BOOKMARKS` | Maximum bookmarks to remove per run | `500` |
| `SCROLL_DELAY` | Time between scrolls (ms) | `1500` |
| `UNBOOKMARK_DELAY` | Time between unbookmark actions (ms) | `1000` |

---

## ⚠️ Disclaimer  
This script was **generated with assistance from ChatGPT** and is **for educational purposes only**.  
- **Use at your own risk**—Twitter’s interface may change, affecting functionality.  
- **Avoid excessive use** to prevent triggering Twitter’s rate limits.  
- **Not affiliated with Twitter** in any way.  
