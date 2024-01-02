# ベースイメージの選択
FROM node:latest

# 作業ディレクトリの指定
WORKDIR /app/backend

# パッケージファイルをコピーして依存関係をインストール
COPY package.json package-lock.json /app/backend/
COPY nodemon.json package-lock.json /app/backend/

# 依存関係のインストール
RUN npm install

# ソースコードをコピー
COPY . /app/backend

# コードのビルド（Typescriptのコンパイルなど）
RUN npm run build

# 使用するポートのエクスポート（Express.jsなどの場合）
EXPOSE 3000

# アプリケーションを起動
# CMD ["npm", "run", "dev"]
CMD ["npm", "run", "test"]

