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
