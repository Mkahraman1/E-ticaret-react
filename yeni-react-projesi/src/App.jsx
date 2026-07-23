import { useDispatch, useSelector } from 'react-redux'
import { addProduct, removeProduct, resetCart } from './redux/cartSlice'

function App() {
  const dispatch = useDispatch()
  const productCount = useSelector((state) => state.cart.count)

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <section className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-lg">
        <h1 className="mb-6 text-2xl font-bold text-slate-800">Sepet Sayacı</h1>

        <p className="mb-8 text-lg text-slate-600">
          Sepetteki ürün sayısı: <strong className="text-3xl text-slate-900">{productCount}</strong>
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => dispatch(addProduct())}
            className="rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white transition hover:bg-emerald-700"
          >
            Ürün Ekle
          </button>
          <button
            type="button"
            onClick={() => dispatch(removeProduct())}
            className="rounded-lg bg-amber-500 px-4 py-2 font-medium text-white transition hover:bg-amber-600"
          >
            Ürün Çıkar
          </button>
          <button
            type="button"
            onClick={() => dispatch(resetCart())}
            className="rounded-lg bg-slate-700 px-4 py-2 font-medium text-white transition hover:bg-slate-800"
          >
            Sıfırla
          </button>
        </div>
      </section>
    </main>
  )
}

export default App
