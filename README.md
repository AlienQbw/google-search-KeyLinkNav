# KeyLinkNav Chrome Extension

KeyLinkNav is a Chrome extension that lets you navigate Google search result links using your keyboard's arrow keys. Focused links are underlined and bordered for easy identification.

## Installation

Follow these steps to install KeyLinkNav on your Chrome browser:

1. **Download or Create the Extension Files**

   - Obtain the extension folder containing `manifest.json` and `content.js`. You can:
     - Download it from a provided source, or
     - Create it yourself by copying the code into these two files:
       - `manifest.json`: Defines the extension's properties.
       - `content.js`: Contains the navigation logic.

2. **Open Chrome Extensions Page**

   - Open Google Chrome.
   - Go to `chrome://extensions/` by typing it in the address bar and pressing Enter.

3. **Enable Developer Mode**

   - In the top-right corner, toggle the "Developer mode" switch to ON.

4. **Load the Extension**

   - Click the "Load unpacked" button.
   - Select the folder containing your `manifest.json` and `content.js` files.
   - Click "Open" to load the extension.

5. **Verify Installation**
   - You should see "KeyLinkNav" appear in your extensions list with its version (1.0).

## Usage

Once installed, KeyLinkNav works automatically on Google search result pages across all Google domains (e.g., google.com, google.pl, google.de).

### How to Use

1. **Go to a Google Search Page**

   - Perform a search on any Google domain (e.g., `www.google.com/search?q=test`).

2. **Navigate Links**

   - Press the **Down Arrow** key to move to the next search result link.
   - Press the **Up Arrow** key to move to the previous search result link.
   - The focused link will be underlined and surrounded by a blue border.

3. **Looping**

   - When you reach the bottom, pressing Down Arrow takes you back to the top.
   - When at the top, pressing Up Arrow takes you to the bottom.

4. **Open a Link**
   - Press **Enter** on a focused link to visit it (standard browser behavior).

## Troubleshooting

- **Not Working?**
  - Ensure you're on a Google search results page.
  - Reload the page or restart Chrome.
  - Check `chrome://extensions/` to confirm the extension is enabled.
- **Errors?**
  - In Developer mode, click "Errors" next to KeyLinkNav to diagnose issues.

Enjoy navigating Google search results with your keyboard!
