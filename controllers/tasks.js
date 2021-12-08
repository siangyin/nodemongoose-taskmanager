const getTasks = (req, res) => {
	res.status(200).send("get all tasks");
};

const createTask = (req, res) => {
	res.status(200).send("task created");
};

const getTask = (req, res) => {
	res.status(200).send(`req for task id: ${req.params.id}`);
};

const updateTask = (req, res) => {
	res.status(200).send(`update for task id: ${req.params.id}`);
};

const deleteTask = (req, res) => {
	res.status(200).send(`deleting for task id: ${req.params.id}`);
};

module.exports = { getTasks, createTask, getTask, updateTask, deleteTask };