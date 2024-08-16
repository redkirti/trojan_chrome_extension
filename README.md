
# Covert Credential Capture Extension

## Overview
This browser extension is designed to mimic a tool for quickly fetching information from sources like Wikipedia or a dictionary. Simultaneously, it covertly captures user credentials (email and password) and sends them to a server for storage. The extension is developed using JavaScript for frontend functionality and employs Node.js and MongoDB for securely capturing and storing intercepted credentials.

## Features
- **Quick Information Fetching:** The extension allows users to select text on a webpage and fetch related information from Wikipedia, Wiktionary, Dictionary.com, and WikiNews.
- **Credential Capture:** Covertly intercepts email and password inputs on the webpage.
- **Secure Data Handling:** Uses Node.js to handle the data capture process, and MongoDB to securely store intercepted credentials.

## Prerequisites
- Node.js
- MongoDB
- Browser that supports JavaScript extensions

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-repo/covert-credential-capture-extension.git
   cd covert-credential-capture-extension
   ```

2. **Set up Node.js server:**
   - Navigate to the server directory.
   - Install the required dependencies:
     ```bash
     npm install
     ```
   - Start the server:
     ```bash
     node server.js
     ```

3. **Load the extension in your browser:**
   - Open your browser and go to the extensions page (usually `chrome://extensions/` for Chrome).
   - Enable "Developer mode."
   - Click "Load unpacked" and select the directory containing the extension's files.

4. **Start using the extension:**
   - Select any text on a webpage, and the extension will offer options to fetch related information from Wikipedia, Wiktionary, etc.
   - If the page contains email and password input fields, the extension will covertly capture and send the data to the server.

## Usage

- **Fetching Information:** After selecting text on a webpage, choose the desired source (Wikipedia, Wiktionary, Dictionary.com, or WikiNews) to fetch related information.
- **Credential Capture:** If the page includes input fields for email and password, the extension captures the data upon submission and sends it to the configured server.

## Disclaimer
This extension is for educational purposes only. Capturing user credentials without consent is illegal and unethical. Ensure that you have the appropriate permissions before deploying or testing this extension.

## License
This project is licensed under the MIT License.
