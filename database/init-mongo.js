// init-mongo.js

db.auth("admin", "adminpassword"); // 管理者ユーザーで認証

// データベースの作成とユーザーの追加
db = db.getSiblingDB("mydatabase");
db.createUser({
    user: "myuser",
    pwd: "userpassword",
    roles: [{ role: "readWrite", db: "mydatabase" }]
});
