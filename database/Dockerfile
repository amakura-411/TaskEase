# べースイメージの指定
FROM mongo:latest
# ポートのエクスポート
EXPOSE 27017
# 起動時に実行するスクリプトを追加
COPY init-mongo.js /docker-entrypoint-initdb.d/