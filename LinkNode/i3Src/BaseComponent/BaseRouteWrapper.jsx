import BaseConsumer from './BaseConsumer';

export default class BaseRouteWrapper extends BaseConsumer {
    constructor(props) {
        super(props);
      
        this._key = "routeData";
        this._firstRender = true;
    }
    setData(data, callback) {
        return this.setRouteData(this._key, data, callback);
    }
    getData() {
        return this.getCloneStateByKey(this._key);
    }
    wrapperContent(){
        throw new Error("not implemented exception!");
    }
    consumerContent(){
        if (this._firstRender){
            this._firstRender = false;
            return (
                null
            );
        }
        return this.wrapperContent()
    }
}