import './App.css';

function AppJSX() {
  const name = '승헌';
  const list = ['딸기','수박','사과','파인애플'];
  return (
    <>
      <h1 className="orange">{`안녕  ${name}`}</h1>
      <h2>hi</h2>
      <p>{name}</p>
      <div style={{width:'200px',height:'200px',background:'#f1f1f1'}}></div>
      <ul>
        {
          list.map((item) =>(
            <li>{item}</li>
          ))
        }
      </ul>
    </>
  );
}

export default AppJSX;

