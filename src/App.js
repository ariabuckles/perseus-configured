import React, { Component } from 'react';
import './App.css';

import QuestionRenderer from './QuestionRenderer';

const itemData = {
    "question": {
        "content": "This is a *sample question* ^_^\n\n[[☃ grapher 1]]",
        "images": {},
        "widgets": {
            "grapher 1": {
                "type": "grapher",
                "alignment": "default",
                "static": false,
                "graded": true,
                "options": {
                    "correct": {
                        "type": "linear",
                        "coords": null
                    },
                    "availableTypes": [
                        "linear"
                    ],
                    "graph": {
                        "labels": [
                            "x",
                            "y"
                        ],
                        "range": [
                            [
                                -10,
                                10
                            ],
                            [
                                -10,
                                10
                            ]
                        ],
                        "step": [
                            1,
                            1
                        ],
                        "backgroundImage": {
                            "url": null
                        },
                        "markings": "graph",
                        "rulerLabel": "",
                        "rulerTicks": 10,
                        "valid": true,
                        "showTooltips": false
                    }
                },
                "version": {
                    "major": 0,
                    "minor": 0
                }
            }
        }
    },
    "answerArea": {
        "calculator": false,
        "chi2Table": false,
        "periodicTable": false,
        "tTable": false,
        "zTable": false
    },
    "itemDataVersion": {
        "major": 0,
        "minor": 1
    },
    "hints": []
};

const styles = {
  container: {
    width: 600,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={styles.container}>
          <QuestionRenderer
            question={itemData}
          />
        </div>
      </div>
    );
  }
}

export default App;
