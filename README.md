<!-- Template by https://github.com/othneildrew/ -->

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT INFO -->
<br />
<p align="center">
  <h3 align="center">Crypto Watcher</h3>

  <p align="center">
    Small piece of code that fetches crypto price from CryptoCompare's API, multiplies by your wallet balance and saves the result in a text file.
    <br />
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
  </ol>
</details>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Installation

1. Get a free API Key at [Crypto Compare](https://min-api.cryptocompare.com/pricing)
2. Clone the repo
   ```sh
   git clone https://github.com/gustavotassi/node-crypto-watcher.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create a file called `.env` in the root folder and set it up following the tips
   ```JS
    SERVER_PORT=server_port

    BALANCE=your_current_amount_of_crypto

    API_CRYPTO=crypto_code
    API_CURRENCY=type_of_currency
    API_INTERVAL=fetch_inverval_milliseconds
    API_KEY=crypto_compare_api_key
   ```



<!-- USAGE EXAMPLES -->
## Usage

1. Start the server
   ```sh
   npm start
   ```

2. That's all! The results will be stored in a text file called "values.txt" inside "results" folder. Enjoy!

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
6. Wait for a review