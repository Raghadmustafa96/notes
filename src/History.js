import { If, Then } from 'react-if';

export default function History(props) {
  function UrlValue(e) {
    let [method, url] = e.target.innerText.split(' ');
    console.log((e.target.innerText.split(' ')));
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
