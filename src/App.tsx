import './App.css';
import { useGetTreeRowsQuery } from './services/stringsApi';

function App() {
  const { data } = useGetTreeRowsQuery();

  console.log(data);

  return (
    <>
      <div>Тестовое</div>
    </>
  );
}

export default App;
