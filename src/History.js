import { If, Then, Else } from 'react-if';

export default function History(props) {
  function UrlValue(e) {
    let [method, url] = e.target.innerText.split(' ');
    console.log((e.target.innerText.split(' ')));
    // ["Get", "https://swapi.dev/api/people/"]
    // 0: "Get"
    // 1: "https://swapi.dev/api/people/"
    // length: 2 
    props.callback({ method, url });
  }
  return (
    <>
     <If condition={props.history.length}>
      <Then>
        {props.history.map((data, index) => {
          return (
            <div onClick={UrlValue} key={index}>
              {data.method} {data.url}
            </div>
          );
        })}
      </Then>
    </If>
    </>
  );
}
