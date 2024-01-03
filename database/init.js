


db = db.getSiblingDB("mydatabase");
db.createCollection("tasks");
db.tasks.insertMany([
  {
    title: "task5",
    description: "test",
    status: "todo",
    createdAt: new Date("2020-01-01"),
    deadline: new Date("2020-01-01")
  },
]);
