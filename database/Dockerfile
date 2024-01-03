# Dockerfile

FROM mongo:latest

# カスタムの初期化スクリプトをコンテナにコピー
COPY init.js /docker-entrypoint-initdb.d/
