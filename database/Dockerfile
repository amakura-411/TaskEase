# べースイメージの指定
FROM mongo:7.0.3
# ポートのエクスポート
EXPOSE 27017
# 起動時に実行するスクリプトを追加
COPY init-mongo.js /docker-entrypoint-initdb.d/