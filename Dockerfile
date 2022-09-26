#dockerHubから持ってくるImageの指定
FROM node:16.13.0-alpine3.12
#docker内に入った時の初期パスの指定
WORKDIR /app
#コンテナの使用ポート指定
EXPOSE 3000