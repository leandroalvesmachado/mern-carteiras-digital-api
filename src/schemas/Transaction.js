import { Schema, model } from "mongoose";

const TransactionSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "users"
  },
  value: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

export default model("transactions", TransactionSchema);