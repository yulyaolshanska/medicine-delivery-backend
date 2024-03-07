import { Request, Response } from "express";
import Order from "../models/Order";
import { IProduct } from "../types/IProduct";

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { address, email, name, phone, products } = req.body;

    const totalPrice: number = products.reduce(
      (curr: number, item: IProduct) => (curr += item.price * item.quantity),
      0
    );

    const orderProducts = products.map(
      ({ _id, quantity }: { _id: string; quantity: number }) => ({
        shopProduct: _id,
        quantity,
      })
    );
    const newProduct = await Order.create({
      address,
      email,
      name,
      phone,
      products: orderProducts,
      totalPrice,
    });

    res.json(newProduct);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
