#!/bin/bash

# MongoDBに接続してスクリプトを実行する
mongosh --port 27017 -u username -p 'password' --authenticationDatabase 'admin' <<EOF
use mydatabase;
db.createCollection("tasks");
db.createUser({
    user: "myuser",
    pwd: "userpassword",
    roles: [
        {
            role: "dbOwner",
            db: "mydatabase"
        }
    ]
});
db.tasks.insertMany([
    {
        title: "task1",
        description: "test",
        status: "todo",
        createdAt: new Date("2020-01-01"),
        deadline: new Date("2020-01-01")
    },
]);
use admin;
db.system.users.find();
EOF
