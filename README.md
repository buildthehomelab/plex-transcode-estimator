# Plex Transcode Estimator

A simple web app to estimate how many simultaneous transcodes your Plex Media Server can handle based on your CPU's PassMark score.

## Features

- Calculate transcode capacity for different video profiles:
  - 4K HDR (50Mbps, 10-bit HEVC → 10Mbps 1080p): 17,000 PassMark
  - 4K SDR (40Mbps, 8-bit HEVC → 10Mbps 1080p): 12,000 PassMark
  - 1080p (10Mbps, H.264): 2,000 PassMark
  - 720p (4Mbps, H.264): 1,500 PassMark
- Option to include subtitle burn-in (+1000 PassMark per transcode)
- Real-time calculations as you adjust your PassMark score

## Getting Started

### Prerequisites

- Node.js 14.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/buildthehomelab/plex-transcode-estimator.git
cd plex-transcode-estimator
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How It Works

The calculator divides your CPU's PassMark score by the required PassMark score for each video profile to determine how many simultaneous transcodes your Plex server can handle. Note that these estimates are per video category and your server cannot simultaneously handle the maximum number of transcodes across all categories.


## License

This project is open source and available under the [MIT License](LICENSE).
