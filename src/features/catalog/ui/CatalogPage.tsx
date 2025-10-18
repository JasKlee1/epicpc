"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import type { Product } from "@/entities/product/model/product.types";

//Javier Becerra
export default function CatalogPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const q = category ? `?category=${category}` : "";
    fetch(`/api/products${q}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(() => setProducts([]));
  }, [category]);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-700">
        💻 Catálogo de PCs Gamer - EpicPC
      </h1>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <input
          type="text"
          placeholder="🔍 Buscar PC..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2 rounded w-60"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded w-52"
        >
          <option value="">Todas las categorías</option>
          <option value="starter">Starter</option>
          <option value="mid-range">Intermedio</option>
          <option value="high-end">Alto Rendimiento</option>
          <option value="streaming">Streaming</option>
        </select>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {filtered.length === 0 && (
          <p className="text-gray-600 text-center w-full">
            No se encontraron resultados 😢
          </p>
        )}

        {filtered.map((p) => (
          <div
            key={p.id}
            className="card w-72 border rounded-lg shadow hover:shadow-xl bg-white transition-transform"
          >
            <Image
              src={p.image}
              alt={p.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {p.name}
              </h2>
              <p className="text-gray-600">Categoría: {p.category}</p>
              <p className="text-blue-700 font-bold mt-2">${p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
