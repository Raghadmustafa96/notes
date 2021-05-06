import React from 'react'
import { If, Then , Else } from 'react-if';
import ReactJson from 'react-json-view';

class History2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            storage: JSON.parse(localStorage.getItem('h1')) || [],
            body: [],
            isVisible: false
        }
    }

    UrlValue = (data) => {
        this.setState({ body: data.body, isVisible: true })
    };


    render() {
        console.log(this.state.body);
        return (
            <>
                <If condition={this.state.storage.length}>
                    <Then>
                        {this.state.storage.map((data, index) => {
                            return (
                                <div onClick={() => { this.UrlValue(data) }} key={index}>
                                    {data.method} {data.url}
                                </div>
                            );
                        })}
                    </Then>
                    <Else>
                       <div> there are no data</div>
                    </Else>
                </If>

                <If condition={this.state.isVisible}>
                    <Then>
                        <div>
                            <div id="content" className="content">
                                <h2> Results API:</h2>
                                {console.log('on', this.state.body)}

                                <br />
                                <ul>
                                    <li>results:</li>
                                    <li><ReactJson id="pretty" src={this.state.body} /></li>
                                </ul>
                            </div>
                        </div>
                    </Then>
                </If>


            </>
        );
    }
}
export default History2;