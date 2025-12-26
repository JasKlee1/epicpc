import { NextApiRequest, NextApiResponse } from "next";

//API Creada por Valentina Paez--T2

const products = [
  {
    id: 1,
    name: "PC Gamer Básico",
    category: "starter",
    price: 3000,
    image: "/starter.jpg",
  },
  {
    id: 2,
    name: "PC Gamer Intermedio",
    category: "mid-range",
    price: 4500,
    image: "/mid-range.jpg",
  },
  {
    id: 3,
    name: "PC Gamer Avanzado",
    category: "high-end",
    price: 6500,
    image: "/high-end.jpg",
  },
  {
    id: 4,
    name: "PC Streaming",
    category: "streaming",
    price: 8000,
    image: "/streaming.jpg",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { category } = req.query;
  if (category) {
    const filtered = products.filter((p) => p.category === String(category));
    return res.status(200).json(filtered);
  }
  return res.status(200).json(products);
}
