window.unBmCount = 0;
const MAX_BOOKMARKS = 500; // Max bookmarks to remove per run
const SCROLL_DELAY = 1500; // Time between scrolls
const UNBOOKMARK_DELAY = 1000; // Time between unbookmarks

async function removeBookmarksAsYouScroll() {
    console.log("Starting auto-unbookmarking...");

    while (window.unBmCount < MAX_BOOKMARKS) {
        let bookmarkButtons = document.querySelectorAll("button[data-testid='removeBookmark']");

        if (!bookmarkButtons.length) {
            console.log("No bookmarks found. Scrolling...");
            window.scrollTo(0, document.body.scrollHeight);
            await new Promise((resolve) => setTimeout(resolve, SCROLL_DELAY));
            continue;
        }

        for (let i = 0; i < bookmarkButtons.length && window.unBmCount < MAX_BOOKMARKS; i++) {
            bookmarkButtons[i].click(); // Click the "Remove Bookmark" button
            window.unBmCount++;
            console.log(`Unbookmarked ${window.unBmCount}/${MAX_BOOKMARKS}`);

            await new Promise((resolve) => setTimeout(resolve, UNBOOKMARK_DELAY)); // Prevent rate limits
        }

        // Scroll to load more bookmarks after removing the current batch
        window.scrollTo(0, document.body.scrollHeight);
        await new Promise((resolve) => setTimeout(resolve, SCROLL_DELAY));
    }

    console.log("✅ Bookmark removal complete!");
}

removeBookmarksAsYouScroll();
