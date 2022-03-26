import React, { Component } from "react";
import ReactDOM from "react-dom";

export class Modal extends Component {
  constructor(props) {
    super(props);

    this.popUpContainer = document.createElement("div");
    document.body.appendChild(this.popUpContainer);
  }

  componentWillUnmount() {
    document.body.removeChild(this.popUpContainer);
  }

  render() {
    return ReactDOM.createPortal (
      <div className="modal" onClick={this.props.close}>
        <div>
          <p>
            h *.json 611 bytes asset asset-manifest.json 583 bytes [emitted]
            asset main.0cf08858fe2a663fdc32.hot-update.json 28 bytes [emitted]
            [immutable] [hmr] asset index.html 691 bytes [emitted] Entrypoint
            main 1.48 MiB (1.5 MiB) = static/js/bundle
          </p>
          <button>Fermer</button>
        </div>
      </div>,
      this.popUpContainer
    );
  }
}

export default Modal;
