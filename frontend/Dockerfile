# ベースイメージの選択
FROM node:latest

# 作業ディレクトリの指定
WORKDIR /

# ローカルのPreactアプリをコンテナにコピー
COPY ./my-app /app/frontend

# my-appディレクトリに移動
WORKDIR /app/frontend/my-app

# パッケージのインストール
RUN npm install

# ポートのエクスポート
EXPOSE 8080

# アプリケーションを起動
CMD ["npm", "run", "dev"]
