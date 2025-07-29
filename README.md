# 360 viewer for owncloud web
A 360° image viewer for [Owncloud Web](https://owncloud.com/features/web-app/) using [photo-sphere-viewer.js](https://photo-sphere-viewer.js.org/).
It lets to view panoramic(360°) images.

## ✅ Requirements
- Node.js v18.17.1
- pnpm v8.15.1
- (Optional) Docker and Docker Compose

## 🚀 Getting Started

### 🔧 Option 1: Run Locally

#### 1. Install dependencies

```zsh
pnpm install
```

#### 2. Build the extension

```zsh
pnpm build
```

The build output will be in the dist folder.

For development (auto-rebuild on changes):

```zsh
pnpm build:w
```

Viewer available at:
[http://localhost:8082/js/web-app-360-viewer.js](http://localhost:8082/js/web-app-360-viewer.js)

### 🐳 Option 2: Run with Docker

#### 1. Start all services

```zsh
docker compose up
```

#### 2. Access Owncloud Web
[https://host.docker.internal:9200](https://host.docker.internal:9200)