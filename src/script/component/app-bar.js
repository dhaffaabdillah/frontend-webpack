class AppBar extends HTMLElement {
 
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
  
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
         }
            :host {
                display: block;
                width: 100%;
                background-color: rgb(17, 53, 121);
                color: white;
                box-shadow: 0 4px 8px 0 rgb(17, 53, 121);
            }
            h2 {
                padding: 16px;
            }
        </style>
        <h2>Find your food</h2>`;
    }
 }
  
 customElements.define("app-bar", AppBar);