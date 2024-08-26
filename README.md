# Allegro Flex

**Allegro Flex** is a Chrome extension that enhances your experience on the Allegro website by modifying certain elements for easier access and better usability.

## Features

- **Link Seller's Name**: Option to link the seller's name directly for quick access to their profile.
- **Custom Link Color**: Allows you to choose a custom color for the links on the Allegro site.
- **Open Links in a New Tab**: Automatically open all links in a new tab.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/allegro-flex.git
    ```
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (toggle switch in the top right corner).
4. Click on **Load unpacked** and select the cloned `allegro-flex` directory.

## Usage

1. After installation, go to the Allegro website.
2. The extension will automatically apply your custom settings.
3. Click the extension icon to access options, where you can customize the settings:
    - Enable or disable linking the seller's name.
    - Choose your preferred link color.
    - Decide whether to open links in a new tab.

## Options

The extension includes a settings page where you can customize its behavior:
- **Link Seller's Name**: Toggle whether the seller's name should be clickable.
- **Link Color**: Select your preferred color for links.
- **Open Links in a New Tab**: Choose whether to open links in a new tab by default.

## Permissions

This extension requires the following permissions:

- **activeTab**: To interact with the current tab and modify Allegro's content.
- **storage**: To save and retrieve user preferences.
- **scripting**: To inject scripts that customize the webpage.
- **Host Permissions**: Specifically for `https://allegro.pl/*` to modify its content.

## Development

To contribute or modify the extension:

1. Clone the repository and make your changes.
2. Test the extension locally by loading it in Chrome via `chrome://extensions/`.
3. Ensure all changes work as expected before submitting a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please fork the repository, create a new branch, and submit a pull request with your changes.

## Contact

For any questions or suggestions, feel free to open an issue or reach out at [dawidjez@gmail.com](mailto:dawidjez@gmail.com).
