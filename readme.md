# TaskEase プロジェクト
## 概要
TaskEaseはシンプルなToDoリストアプリケーションです。

Javascriptおよび、TypeScriptの学習のために作成しました。

## ディレクトリ構成

``` bash
TaskEase/
.gitignore
.prettierrc
babel.config.js
backend/
    .eslintrc
    Dockerfile
    js/
    nodemon.json
    package.json
    src/
        __test__/
            addController.test.ts
            ...
        app.ts
        controllers/
        frameworks/
            db/
                connect.ts
        hello.ts
        models/
    tsconfig.json
database/
    data/
    init.js
docker-compose.yml
docker-entrypoint-initdb.d/
    0-init-mongo.sh
    1-init-mongo.sh
    tests.json
frontend/
    Dockerfile
    my-app/
        .eslintrc
        .gitignore
        README.md
        package.json
        src/
        tests/
        tsconfig.json
jest.config.js
readme.md
test.http

```

## 技術スタック(chatGPTが文章を作成)
### フロントエンド
- フレームワーク: React (TypeScript)
- frontend/my-app/ディレクトリにフロントエンドのコードが配置されています。
- Reactはユーザーインターフェースを構築するためのJavaScriptライブラリで、TypeScriptはJavaScriptの静的型チェックと最新のECMAScript機能を提供します。
- コードフォーマッターとしてPrettierを使用しています。
### バックエンド
- 言語とフレームワーク: Node.js (TypeScript)
- backend/ディレクトリにバックエンドのコードが存在します。
- Node.jsはサーバーサイドのJavaScript環境で、TypeScriptもここで使用されています。
### データベース
- データベース: MongoDB
- database/ディレクトリとdocker-compose.ymlファイルから推測すると、MongoDBが使用されています。
- MongoDBはNoSQLデータベースで、JSON-likeドキュメントを使用します。
### コンテナ化
- コンテナ技術: Docker
- Dockerfileとdocker-compose.ymlファイルが存在するため、Dockerが使用されていると推測されます。
- Dockerはアプリケーションとその依存関係をコンテナという独立した環境にパッケージ化するためのツールです。