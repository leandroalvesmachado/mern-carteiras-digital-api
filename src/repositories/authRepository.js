import UserSchema from "../schemas/User.js";

async function create(data) {
  return await UserSchema.create(data);
}

async function findByEmail(email) {
  // { email: email } == { email }
  const user = await UserSchema.findOne({ email });

  return user;
}

async function generateToken(id) {
  return await generateToken;
}

export default {
  create,
  findByEmail,
  generateToken
};