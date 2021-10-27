import { useEffect, useState } from 'react';
import './App.css';
import fetchImg from './utils/fetchImg';
import fetchData from './utils/fetchData';

const App = () => {
  const [catImgArr, setCatImgArr] = useState([]);
  const [catDataArr, setCatDataArr] = useState([]);

  useEffect(() => {
    (async () => {
      const data = fetchData();
      const imgs = await fetchImg();

      setCatImgArr(imgs);
      setCatDataArr(data);
    })();
  }, []);

  return (
    <>
      <div>
        <h1>Cats4Lyf</h1>
        {catImgArr.map((cat, i) => (
          <div id={cat.id} key={cat.id}>
            <img className="img" alt="" src={cat.url} />
            <span>{catDataArr[i]?.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
