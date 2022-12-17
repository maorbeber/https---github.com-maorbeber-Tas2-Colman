const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    orderlist: [
      {
        title: { type: String, required: true },
        price: { type: Number, required: true },
      },
    ],
    user: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
      address: { type: String, required: true },
    },
    totalprice: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", orderSchema);
