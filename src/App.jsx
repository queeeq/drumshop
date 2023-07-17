import './App.scss'

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tfrtnrdhfaseykpxujlx.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmcnRucmRoZmFzZXlrcHh1amx4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkzMzk1NjUsImV4cCI6MjAwNDkxNTU2NX0.PUkSp9-m15JcLR2DvtA0e11k74KzzYY0ytV8ZoEhlLM"
const supabase = createClient(supabaseUrl, supabaseKey)
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const { data } = await supabase.from("products").select();
    setProducts(data);
  }

  return (
      <ul>
        {products.map((product) => (
            <li key={product.name}>{product.name}</li>
        ))}
      </ul>
  );
}

export default App;
