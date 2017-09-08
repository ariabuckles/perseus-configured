// @flow
import React, {Component} from 'react';
import 'katex/dist/katex.css';
import './lib/perseus.css';

const Perseus = require('./perseus-configured.js').default;

type Props = {
  question: {
    data: QuestionDataType,
    attribution?: ?string,
  },
  setRef?: (node: any) => void,
  readOnly?: boolean,
};


export default class QuestionRenderer extends Component {
  props: Props;

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.question !== this.props.question ||
        nextProps.readOnly !== this.props.readOnly;
  }

  render() {
    const {
      question,
      setRef,
      readOnly,
      isMobile,
    } = this.props;
    const questionContents = Perseus !== null
      ? <Perseus.ServerItemRenderer
          controlPeripherals={false}
          item={question}
          apiOptions={{
            isMobile: isMobile,
            staticRender: !!readOnly,
            readOnly: !!readOnly,
            customKeypad: !readOnly,
          }}
          problemNum={0}
          hintsVisible={0}
          ref={n => (setRef ? setRef(n) : null)}
        />
      : <div>Loading...</div>;
    return (
      <div
        className={'framework-perseus' + (isMobile ? ' perseus-mobile' : '')}
      >
        <div>
          {questionContents}
        </div>
      </div>
    );
  }
}
