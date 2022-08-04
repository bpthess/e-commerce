import Data from "./data";

function App() {
  return (
    <div className="App">
      <header>
        <a href="/">amazona</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        {Data.products.map((product) => {
          return (
            <div key={product.slug}>
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default App;
