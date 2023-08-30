import transactionService from "../services/transactionService.js";

async function create(req, res) {
  const body = req.body;
  const { _id: id } = res.locals.user;

  try {
    const result = await transactionService.create(body, id);

    return res.status(201).send(result); 
  } catch (error) {
    return res.status(409).send(error.message);
  }
}

async function findAllByUser(req, res) {
  const { _id: id } = res.locals.user;

  try {
    const result = await transactionService.findAllByUser(id);

    return res.status(200).send(result); 
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

export default { 
  create,
  findAllByUser
};