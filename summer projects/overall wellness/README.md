# Overall Wellness App Framework

Starter framework for an overall wellness website using:
- Node.js + Express
- Handlebars (`.hbs`) templates
- Docker

## Local run

```bash
npm install
npm start
```

Open `http://localhost:3000`

## Docker run

```bash
docker build -t overall-wellness .
docker run --rm -p 3000:3000 overall-wellness
```

Open `http://localhost:3000`

## Save a desktop copy

To copy the app into `Desktop/summer projects/overall wellness`, run:

> Note: In a hosted or container workspace, `$HOME/Desktop` is the workspace user's desktop (for example `/root/Desktop`), not your personal computer's Desktop. A repo-visible copy is also provided at `summer projects/overall wellness` so you can find it in the project file tree.


```bash
./scripts/save-to-desktop.sh
```

You can override the destination with `TARGET_DIR` if needed:

```bash
TARGET_DIR="$HOME/Desktop/summer projects/overall wellness" ./scripts/save-to-desktop.sh
```

