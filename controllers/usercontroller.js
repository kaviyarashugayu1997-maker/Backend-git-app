exports.getUsers = (req, res) => {

const users = [
{ id: 1, name: "DevOps Engineer" },
{ id: 2, name: "Cloud Engineer" },
{ id: 3, name: "Backend Developer" }
]

res.json(users)

}