if (!window.MathJax) {
  const MathJax = window.MathJax = {
    Hub: {
      elementScripts: () => [],
      Queue: (callback) => {
        setTimeout(callback, 0);
      },
      getJaxFor: (script) => {
        return {
          Text: () => {},
          Remove: () => {},
        };
      },
      Process: (something, callback) => {
        setTimeout(callback, 0);
      },
    },
  };
}
