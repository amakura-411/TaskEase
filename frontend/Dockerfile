# ベースイメージの指定
FROM nginx:latest
# 作業ディレクトリの指定
WORKDIR /
# ビルド済みのアプリケーションをコピー
COPY index.html /usr/share/nginx/html
COPY style /usr/share/nginx/html/style
COPY script /usr/share/nginx/html/script
# 使用するポートのエクスポート
EXPOSE 80
# アプリケーションを起動
CMD ["nginx", "-g", "daemon off;"]
