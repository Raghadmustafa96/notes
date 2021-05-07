import { If, Then } from 'react-if';
import './App.scss';

export default function History(props) {
  function UrlValue(e) {
    console.log('click on url');

    let [method, url] = e.target.innerText.split(' ');
    console.log((e.target.innerText.split(' ')));
    console.log('history   ___ ');
    props.callback({ method, url });
    console.log(method,url, '...................');
  }
  return (
    <>
      <If condition={props.history.length}>
        <Then>
          {props.history.map((data, index) => {
            return (
              <div className='route' onClick={UrlValue} key={index}>
                {data.method} {data.url}
              </div>
            );
          })}
        </Then>
      </If>
    </>
  );
}
