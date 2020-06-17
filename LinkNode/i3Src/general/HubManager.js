import ehealth from "./i3app";


class HubManager {
    constructor(jwtRequired) {
        this._signalRConnection = this.getSignalRConnection();
        this._jwtRequired = jwtRequired;
        this._isHubInit = false;
        this._isConnected = false;
        this._needList = new Map();
        this.populateNeed(this._needList);
        this._needToFunctionMap = new Map();
        this._componentNeedMap = new Map(); // key Component, Value [need]
        this.populateNeedToFunction(this._needToFunctionMap);
        let needListKey = Array.from(this._needList.keys()).sort();
        let needToFunctionMap = Array.from(this._needToFunctionMap.keys()).sort();

        window.needList = this._needList;
        window.componentNeedMap = this._componentNeedMap;

        /// VERIFY IF DIFFERENT -> CHUI

        this._needDic = new Map();
        this._listPendingRegisterNeed = [];
        this._registerClientFunction();
        this._isInProcess = false;
        this._listFunctions = [];
    };

    _doFunctions = () => {
        if (this._isInProcess == false) {
            this._isInProcess = true;
            if (this._listFunctions.length > 0) {
                this._listFunctions[0](this._callbackFunction);
            }
            else {
                this._isInProcess = false;
            }
        }
    }

    _callbackFunction = () => {
        this._listFunctions.splice(0, 1);
        this._isInProcess = false;
        this._doFunctions();
    }


    populateNeed(needListMap) {
        throw ("Need to overwrite this method");
    }

    populateNeedToFunction(needMap) {
        throw ("Need to overwrite this method");
    }


    getLocalJwt() {
        return null;
    }

    connectHub() {
        if (this._signalRConnection) {
            let jwt = this.getLocalJwt();
            if (this._jwtRequired) {

                if (!jwt) {
                    throw ("Unauthorized");
                }
            }

            this._isHubInit = true;
            if (jwt) {
                this._signalRConnection.hub.qs = { 'jwt': jwt };
            }
            this._signalRConnection.hub
                .start()
                .done(() => {

                    this.updateConnected();
                    this._listPendingRegisterNeed.forEach(o => {
                        this.registerNeed(o.needs, o.component, o.callback);
                    });
                })
                .fail((a, b, c) => { console.log("error", a, b, c) });
        }
    }
    updateConnected() {
        this._isConnected = true;
    }

    getSignalRConnection() {
        throw ("SDADS");
        return this._signalRConnection;

    }

    generateDataToUpdateNeed(needs) {
        throw ("")
        let data = {
            connectionId: this._signalRConnection.hub.id,
            signalRNeeds: needs
        };
        return data;
    }


    needKey(need) {
        throw ("");
        return need.need;
    }

    getUpdateNeedUrl() {
        throw ("");
    }

    getUnregisterNeedUrl() {
        throw ("");
    }

    getApplicationHubName() {
        throw ("");
    }



    registerNeed(needs, component, callback) {
        var signalRConnection = this.getSignalRConnection();
        if (signalRConnection) {
            if (this._isConnected === false) {
                this._listPendingRegisterNeed.push({ needs, component, callback });
                if (this._isHubInit === false) {
                    this.connectHub();
                }
                return;
            }
            let needDic = this._needDic;


            if (!this._componentNeedMap.get(component)) {
                this._componentNeedMap.set(component, []);
            }

            this._componentNeedMap.get(component).push(...needs);


            let newNeeds = [];

            needs.forEach(need => {

                let needKey = this.needKey(need);
                let components = needDic.get(needKey);

                if (!components) {

                    newNeeds.push(need);
                    needDic.set(needKey, [component]);
                }
                else {
                    components.push(component);
                }
            });

            if (newNeeds.length > 0) {
                //can tin tuong ajax thanh cong de tranh dang ki nhieu lan cho 1 need (Tran)

                $.ajax({
                    method: "POST",
                    url: this.getUpdateNeedUrl(),
                    data: this.generateDataToUpdateNeed(newNeeds),
                    dataType: 'json',
                    success: function (data, status, xhr) {
                        if (typeof callback === 'function') {
                            callback();
                        }
                    },
                    error: function (xhr) {
                        window.xhr = xhr;
                        console.log("error");
                    }
                })
            }
            else {

                if (typeof callback === 'function') {
                    callback();
                }
            }
        }
    };

    unregisterNeed(component) {
        let needDic = this._needDic;
        let needs = this._componentNeedMap.get(component);
        if (!needs)
            return;

        let needToDelete = [];
        needs.forEach(need => {
            let needKey = this.needKey(need);
            if (needDic.get(needKey) && needDic.get(needKey).length == 1) {
                needToDelete.push(need);
            } // Ngoai no ra , con thang khac
            let components = needDic.get(needKey);
            if (components && components.length > 0) {
                let componentIndex = components.indexOf(component);
                componentIndex >= 0 && components.splice(componentIndex, 1);
            }
        });

        if (needToDelete.length > 0) {
            needToDelete.forEach(need => {
                needDic.delete(need);
            });
            let data = this.generateDataToUpdateNeed(needToDelete)
            $.ajax({
                method: "POST",
                url: this.getUnregisterNeedUrl(),
                data: data,
                dataType: 'json',
                success: function (data, status, xhr) {

                },
                error: function (xhr) {
                    window.xhr = xhr;
                    console.log("error");
                }
            })
        }
    };

    _getListComponents(needName) {
        let need = this._needList.get(needName);
        let components = this._needDic.get(need);
        return components ? components : [];
    };

    _registerClientFunction() {
        let applicationHub = this._signalRConnection[this.getApplicationHubName()];
        if (this._signalRConnection && applicationHub) {
            let client = applicationHub.client;
            let methodNames = Array.from(this._needList.keys());
            methodNames.forEach(i => {
                let camelMethod = ehealth.toCamelString(this._needToFunctionMap.get(i));
                client[camelMethod] = (...prams) => { //Test
                    // data = ehealth.toCamel(data);
                    //  const args = arguments;
                    //  console.log(...args);
                    let components = this._getListComponents(i);
                    components.forEach(c => {
                        let f = (callback) => {
                            c[camelMethod](...prams, callback);
                        }
                        this._listFunctions.push(f);
                    });
                    this._doFunctions();
                };
            })


        }
        else {
            console.error("Không có signalR");
        }
    }
}


export default HubManager;