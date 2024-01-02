# TaskEase プロジェクト
## 概要
TaskEaseはToDoリストアプリケーションです。

バックエンドにはExpress.js、フロントエンドにはPreact（TypeScript）を使用しています。

バックエンドではAPIを作成し、フロントエンドではタスクの管理を行います。

また、MongoDBをデータベースとして使用しています。

## ディレクトリ構成

``` bash
TaskEase/
|-- backend/
|   |-- js/
|   |-- node_modules/
|   |-- src/
|   |-- nodemon.json
|   |-- package-lock.json
|   |-- package.json
|   |-- Dockerfile
|-- frontend/
|   |-- Dockerfile
|   |-- my-app/
|       |-- node_modules/
|       |-- src/
|       |-- test/
|       |-- package-lock.json
|       |-- package.json
|       |-- tsconfig.json
|-- database/
|   |-- Dockerfile
|   |-- init-mongo.js

```

## 各ディレクトリについて
- backend: Express.jsを使用したバックエンドのディレクトリ。APIの作成やサーバー構築に関連するファイルが含まれます。
- frontend: Preact（TypeScript）を使用したフロントエンドのディレクトリ。my-app内にフロントエンドのソースコードとテストが含まれています。
- database: MongoDBデータベース関連のディレクトリ。init-mongo.jsが含まれ、データベースの初期化に関連するファイルが格納されています。
  
各ディレクトリ内には、それぞれのプロジェクトで必要なファイルや設定が含まれており、Dockerを使用してそれぞれのコンポーネントを構築するためのDockerfileが含まれています。