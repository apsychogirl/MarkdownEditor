import React from 'react';
import Badge from 'react-bootstrap/Badge';
let marked = require ('marked');

export default class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      markdown: '',
    };
  }

  updateMarkdown (markdown) {
    this.setState ({markdown});
  }

  render () {
    var outputStyle = {
      width: '100%',
      height: '50vh',
      backgroundColor: '#DCDCDC',
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: '10px',
    };

    return (
      <div className="App">
        <div className="container">
          <div className="row mt-4">
            <div className="col text-center">
              <h1>
                <Badge className="text-align-center" variant="light">
                  Markdown Editor
                </Badge>
              </h1>
              <br />
              <hr />

              <Badge className="text-align-center" variant="secondary">
                Markdown Preview
              </Badge>
              <div
                style={outputStyle}
                dangerouslySetInnerHTML={{__html: marked (this.state.markdown)}}
              />
              <Badge className="text-align-center" variant="secondary">
                Markdown Input
              </Badge>

              <div className="mark-input">
                {/* <textarea className="input"> </textarea> */}
                <input
                  className="input"
                  style={{width: '100%'}}
                  value={this.state.markdown}
                  onChange={e => {
                    this.updateMarkdown (e.target.value);
                  }}
                />

                {console.log (this.state.markdown)}

              </div>

            </div>
          </div>
        </div>

      </div>
    );
  }
}
