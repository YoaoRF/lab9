'use client';

import { useEffect, useState } from 'react';

const productosData = [
  { id: 1, nombre: 'Laptop', categoria: 'Tecnología' },
  { id: 2, nombre: 'Camisa', categoria: 'Ropa' },
  { id: 3, nombre: 'Smartphone', categoria: 'Tecnología' },
  { id: 4, nombre: 'Zapatillas', categoria: 'Ropa' },
  { id: 5, nombre: 'Libro de React', categoria: 'Libros' },
];

export default function ProductosPage() {
  const [productos, setProductos] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');

  useEffect(() => {
    setProductos(productosData);
  }, []);

  const productosFiltrados =
    categoriaSeleccionada === 'Todos'
      ? productos
      : productos.filter((p) => p.categoria === categoriaSeleccionada);

  const categorias = ['Todos', ...new Set(productosData.map((p) => p.categoria))];

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-indigo-700">Lista de Productos</h1>

        <div className="mb-6 flex gap-2 justify-center flex-wrap">
          {categorias.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full border font-medium ${
                categoriaSeleccionada === cat
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-indigo-600 border-indigo-600'
              }`}
              onClick={() => setCategoriaSeleccionada(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <ul className="space-y-3">
          {productosFiltrados.map((producto) => (
            <li
              key={producto.id}
              className="bg-indigo-50 p-4 rounded shadow-sm border border-indigo-200"
            >
              <p className="font-semibold">{producto.nombre}</p>
              <p className="text-sm text-gray-600">Categoría: {producto.categoria}</p>
            </li>
          ))}
          {productosFiltrados.length === 0 && (
            <p className="text-center text-gray-500">No hay productos para esta categoría.</p>
          )}
        </ul>
      </div>
    </main>
  );
}
