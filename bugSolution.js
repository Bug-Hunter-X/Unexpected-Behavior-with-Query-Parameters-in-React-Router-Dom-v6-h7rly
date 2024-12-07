```javascript
import { useSearchParams } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ...other routes */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('param');
  
  return (
    <div>
      <h1>Home</h1>
      <p>Query Parameter: {queryParam}</p>
    </div>
  );
}

function About() {
  return <div>About</div>;
}
export default App; 
```