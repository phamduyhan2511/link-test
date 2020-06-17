import React from 'react';
import ReactDOM from 'react-dom';
import { BasePage } from 'BaseComponent/BasePage';
import Product from '../components/Product';

export default class DemoPage extends BasePage {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: 1,
                    name: "Mì Khoai Tây Omachi Xốt Bò Hầm Ly 68G",
                    quantity: 5,
                    imageUrl: "https://cdn.tgdd.vn/Products/Images/2565/158942/bhx/mi-ly-omachi-xot-bo-ham-co-thit-113gr-2-org.jpg"
                },
                {
                    id: 2,
                    name: "Mì Hảo Hảo",
                    quantity: 3,
                    imageUrl: "https://salt.tikicdn.com/cache/550x550/media/catalog/product/8/9/8934563034832.u2409.d20160823.t103628.803113.jpg"
                }
            ]
        }
        this._randomString = "randomString"; //ehealth.guid.get();
    }

    getSignalRHub() {
        return null;
    }

    childrenRender() {
        let { products } = this.state;
        return (
            <React.Fragment>
                <div style={{ padding: '50px' }}>
                    {products.map(p => {
                        return (
                            <Product key={this._randomString + p.id} product={p} />
                        );
                    })}
                </div>
            </React.Fragment>
        );
    }
}

window.renderPage = (dom) => {
    ReactDOM.render(React.createElement(DemoPage), dom);
}