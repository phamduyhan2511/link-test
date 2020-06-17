import $ from '../../i3NodeModules/jquery';
import objectPath from "../../i3NodeModules/object-path";
const immutable = require('../../i3NodeModules/object-path-immutable');
import React from '../../i3NodeModules/react';
import AlertifyManager from './AlertifyManager.jsx';
import ModalManager from './ModalManager.jsx';
import ConfirmComponent from './ConfirmComponent';
import SweetAlertManager from './SweetAlertManager.jsx';

const Context = React.createContext();
const _findPath = (node, root) => {
    // console.log(node, root);
    if (node === root) {
        return true;
    }
    var path = [];
    _findNode(node, root, path);
    if (path.length === 0) {
        return false;
    }
    return path.reverse().join(".");
}
const _findNode = (node, root, path) => {
    // console.log(node,root, path);
    if (typeof root === "object") {
        for (var n in root) {
            if (root[n] === node) {
                path.push(n);
                return true;
            } else {
                var right = _findNode(node, root[n], path);
                if (right) {
                    path.push(n);
                    return true;
                }
            }
        }
    }
    // return path.reverse().join(".");
}

class BasePage extends React.Component {
    constructor(props) {
        super(props);
        // Static 

        $('head').append('<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons" />');
        let _self = this;
        _self.hasSignalR = false;
        this._confirmRef = React.createRef();
        this._alertifyManager = React.createRef();
        this._modalManager = React.createRef();
        this._sweetAlertManager = React.createRef();
        this._signalRHub = null;
        this._setState = (newState, callback) => {
            this.setState(() => newState, callback);
        }
        window.blockUI = function () {
            $('#base-page-block-ui').removeClass("disable-block-ui");
        }
        window.unblockUI = function () {
            $('#base-page-block-ui').addClass("disable-block-ui");
        }

        // Object.getOwnPropertyNames(C.prototype)
        let privateFunctions = {};

        var reactProtos = [
            "constructor",
            "render",
            "componentDidMount",
            "componentDidUpdate",
            "componentWillUnmount",
            "shouldComponentUpdate",
        ];
        Object.getOwnPropertyNames(BasePage.prototype).forEach(func => {
            if (!func.startsWith("_") && typeof this[func] === 'function' && !reactProtos.includes(func)) {
                privateFunctions[func] = this[func].bind(this);
            }
        });
        window.back = this.back.bind(this);

        let _readDataPath = (dataPath) => {
            if (!dataPath) {
                return {};
            }
            var dataProps = {};
            Object.keys(dataPath).map(key => {
                var data = objectPath.get(_self.state, dataPath[key]);
                dataProps[key] = data;
            });
            return dataProps;
        }

        _self.render = function () {

            return (
                <Context.Provider value={privateFunctions}>
                    {_self.childrenRender()}
                    <AlertifyManager innerRef={this._alertifyManager} />
                    <ModalManager innerRef={this._modalManager} readDataPath={_readDataPath} />
                    <SweetAlertManager innerRef={this._sweetAlertManager} />
                    <ConfirmComponent innerRef={this._confirmRef}></ConfirmComponent>
                </Context.Provider>
            )
        }
    }
    getLastModal() {
        return this._modalManager.current.getLastModal();
    }
    testing() {
        alert(999);
    }
    registerNeed(hubKeys, component) {
        // console.log(hubKeys, component);
        if (!this._signalRHub) {
            this._signalRHub = this.getSignalRHub();
        }

        let _signalRHub = this._signalRHub;
        if (_signalRHub == null) {
            throw ("SignalR is not set");
        }
        else {
            _signalRHub.registerNeed(hubKeys, component, null)
        }
    }

    unregisterNeed(component) {
        let _signalRHub = this._signalRHub;
        if (_signalRHub == null) {
            throw ("SignalR is not set");
        }
        else {
            _signalRHub.unregisterNeed(component);
        }
    }

    executeFunction(listFunc, callback) {
        listFunc.map(func => {
            func();
        });
        this._setState(undefined, callback);
    }

    cloneObjectToState(stateName, stateData, callback) {
        if (this.state[stateName] !== undefined) {
            throw "this state has already been used. Please change state name.";
        } else {
            var tempData = {};
            if (Array.isArray(stateData)) {
                tempData = $.extend(true, [], stateData);

            } else {
                tempData = $.extend(true, {}, stateData);
            }
            var addedState = immutable.set(this.state, stateName, tempData);
            this._setState(addedState, callback);
        }
        return stateName;
    }
    deleteCloneObject(key) {
        delete this.state[key];
    }
    getCloneStateByKey(key) {
        if (this.state[key] !== undefined) {
            return this.state[key];
        } else {
            return null;
            //throw "this state has not been defined";
        }
    }
    setRouteData(stateName, stateData, callback) {
        var tempData = {};
        if (Array.isArray(stateData)) {
            tempData = $.extend(true, [], stateData);

        } else {
            tempData = $.extend(true, {}, stateData);
        }
        var addedState = immutable.set(this.state, stateName, tempData);
        this._setState(addedState, callback);
    }
    updateObject(old, newx, callback, willSetState = true) {
        var path = _findPath(old, this.state);
        // console.log(path);
        var newState = immutable.merge(this.state, path, newx);
        // console.log("huhu", JSON.stringify(this.state.routeData.userInfo));
        if (willSetState === true) {
            this._setState(newState, callback);
        } else {
            this.state = newState;
            // typeof callback === "function" && callback();
        }
    }
    overwriteObject(old, newx, callback, willSetState = true) {
        var path = _findPath(old, this.state);
        var newState = immutable.set(this.state, path, newx);
        if (willSetState === true) {
            this._setState(newState, callback);
        } else {
            this.state = newState;
            // typeof callback === "function" && callback();
        }
    }
    updateElementInValueList(newValue, index, list, callback, willSetState = true) {
        if (index >= list.length) {
            throw "index is out of range";
        }
        var path = _findPath(list, this.state) + "." + index;
        var newState = immutable.set(this.state, path, newValue);
        if (willSetState === true) {
            this._setState(newState, callback);
        } else {
            this.state = newState;
            // typeof callback === "function" && callback();
        }
    }
    removeElement(listObj, object, callback, willSetState = true) {
        let index = listObj.indexOf(object);
        if (index < 0) {
            throw "object is not found";
        }
        var path = _findPath(listObj, this.state) + "." + index;
        var newState = immutable.del(this.state, path);
        if (willSetState === true) {
            this._setState(newState, callback);
        } else {
            this.state = newState;
            // typeof callback === "function" && callback();
        }
    }
    addElement(listObj, newObj, index, callback, willSetState = true) {
        // console.log('index', index);
        var path = _findPath(listObj, this.state);
        var newState = {};
        if (index != null || index != undefined) {
            newState = immutable.insert(this.state, path, newObj, index);
        }
        else {
            newState = immutable.push(this.state, path, newObj);
        }
        if (willSetState === true) {
            this._setState(newState, callback);
        } else {
            this.state = newState;
            // typeof callback === "function" && callback();
        }
    }
    sortList(listObj, comparer, callback, willSetState = true) {
        if (!Array.isArray(listObj)) {
            throw "list Object should be an array";
        }
        if (typeof (comparer) !== "function")
            throw "comparer is not a function";
        else {
            var path = _findPath(listObj, this.state);
            var newState = immutable.update(this.state, path, l => l.sort(comparer).map(i => { return i; }));
            if (willSetState === true) {
                this._setState(newState, callback);
            } else {
                this.state = newState;
                // typeof callback === "function" && callback();
            }
        }
    }
    mergeList(listObj, newListObj, comparer, callback, willSetState = true) {
        if (typeof comparer !== "function") {
            throw "comparer is not a function";
        } else {
            var path = _findPath(listObj, this.state);
            var newState = immutable.update(this.state, path, (l) => {
                newListObj.map(newObj => {
                    var index = l.findIndex(oldObj => comparer(oldObj, newObj) === true);
                    if (index >= 0) {
                        var temp = immutable.merge(l, index, newObj);
                        l = temp;
                    } else {
                        l = immutable.push(l, '', newObj);
                    }
                })
                return l;
            });

            if (willSetState === true) {
                this._setState(newState, callback);
            } else {
                this.state = newState;
                // typeof callback === "function" && callback();
            }
        }
    }
    swapItemInList(listObj, index1, index2, callback, willSetState = true) {
        let listLength = listObj.length;
        if (index1 < 0 || index1 >= listLength || index2 < 0 || index2 >= listLength) {
            throw "index is out of array";
        }
        var path = _findPath(listObj, this.state);
        var obj1 = listObj[index1];
        var obj2 = listObj[index2];

        var newState = immutable.update(this.state, path, (l) => {
            l[index1] = immutable.set(l[index1], '', obj2);
            l[index2] = immutable.set(l[index2], '', obj1);
            return l;
        })
        if (willSetState === true) {
            this._setState(newState, callback);
        } else {
            this.state = newState;
            // typeof callback === "function" && callback();
        }
    }
    moveItemInList(listObj, oldIndex, newIndex, callback, willSetState = true) {
        if (oldIndex == newIndex) {
            return;
        }
        if (oldIndex >= listObj.length || newIndex >= listObj.length) {
            throw ("index out of range");
        }
        var path = _findPath(listObj, this.state);
        var newState = immutable.update(this.state, path, (l) => {
            var temp = [];
            if (oldIndex < newIndex) {
                temp = immutable.update(l, '', (t) => {
                    var x = t.filter((item, index) => { return (index <= newIndex && index != oldIndex); });
                    return x;

                });
                temp = immutable.push(temp, '', l[oldIndex]);
                temp = immutable.update(temp, '', (t) => {
                    t.push(...l.filter((item, index) => { return (index > newIndex); }));
                    return t;
                });
            } else if (oldIndex > newIndex) {
                temp = immutable.update(l, '', (t) => {
                    var x = t.filter((item, index) => { return (index < newIndex); });
                    return x;

                });
                temp = immutable.push(temp, '', l[oldIndex]);
                temp = immutable.update(temp, '', (t) => {
                    t.push(...l.filter((item, index) => { return (index >= newIndex && index != oldIndex); }));
                    return t;
                });
            }
            return temp;
        })

        if (willSetState === true) {
            this._setState(newState, callback);
        } else {
            this.state = newState;
            // typeof callback === "function" && callback();
        }
    }
    clearListAndPushNewItems(oldList, newList, callback, willSetState = true) {
        var path = _findPath(oldList, this.state);
        var newState = immutable.set(this.state, path, newList);
        if (willSetState === true) {
            this._setState(newState, callback);
        } else {
            this.state = newState;
            // typeof callback === "function" && callback();
        }
    }
    updateListObject(oldList, newList, callback, willSetState = true) {
        // console.log("old", oldList, "new", newList)
        if (oldList.length != newList.length) {
            throw "Amount of items should be same";
        }
        var paths = oldList.map(oldItem => {
            return _findPath(oldItem, this.state);
        });
        var newState = this.state;
        for (var i = 0; i < newList.length; i++) {
            newState = immutable.merge(newState, paths[i], newList[i]);
        }
        if (willSetState === true) {
            this._setState(newState, callback);
        } else {
            this.state = newState;
            // typeof callback === "function" && callback();
        }
    }
    findPathFromStateByObject(obj) {
        var path = _findPath(obj, this.state);
        return path;
    }
    getObjectByPathFromState(path) {
        return objectPath.get(this.state, path);
    }
    openModal(modalFunction, modalStyles) {
        let modalStyle = !modalStyles ? {} : $.extend(true, modalStyles, this.getModalDefaultStyles());

        var modalProps = modalFunction().body.props;
        var dataPath = {};
        Object.keys(modalProps).map(key => {
            var path = _findPath(modalProps[key], this.state);
            if (path) {
                dataPath[key] = path;
            } else {

            }
        })
        return this._modalManager.current.openModal(modalFunction, 'modal', dataPath, modalStyle);
    }
    closeModal(modalIndex) {
        this._modalManager.current.closeModal(modalIndex);
    }
    scrollModalToBottom(index, callback) {
        this._modalManager.current.scrollModalToBottom(index, callback);
    }
    scrollModalToTop(index, callback) {
        this._modalManager.current.scrollModalToTop(index, callback);
    }
    scrollModalTo(index, scrollTop, callback) {
        this._modalManager.current.scrollModalTo(index, scrollTop, callback);
    }
    alertifyConfirm(body, footer) {
        this._confirmRef.current.alertifyConfirm(body, footer);
    }
    testHehe(str) {
        alert(str);
    }
    warning(content, timeout, placement) {
        return this._alertifyManager.current.addNewAlertify.warning(content, timeout, placement);
    }
    success(content, timeout, placement) {
        return this._alertifyManager.current.addNewAlertify.success(content, timeout, placement);
    }
    closeAllAlert() {
        return this._alertifyManager.current.closeAllAlert();
    }
    error(content, timeout, placement) {
        return this._alertifyManager.current.addNewAlertify.error(content, timeout, placement);
    }
    confirm(body, footer) {
        return this._confirmRef.current.alertifyConfirm(body, footer);
    }
    clearAllModal(callback) {
        this._modalManager.current.clearAllModal(callback);
    }
    sweetAlertSuccess(subtitle, callback) {
        return this._sweetAlertManager.current.sweetAlert("", subtitle, "success", callback);
    }
    sweetAlertError(subtitle, callback) {
        return this._sweetAlertManager.current.sweetAlert("", subtitle, "error", callback);
    }
    getModalDefaultStyles() {
        return {
            dialogStyles: {},
            dialogActionStyles: {},
            dialogContentStyles: {},
            dialogContentTextStyles: {},
            dialogTitleStyles: {},
            slideStyles: {}
        };
    }
    // Signal R
    getSignalRHub() {
        throw ("Pls return null if layout does not require signalR");
    }
    childrenRender() {
        // console.log('aaaa');
        throw ("childrenRender is not overwritten");
    };

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    goTo(url) {
        window.location.href = url;
    }

    getCurrentPath() {
        return window.location.href;
    }

    back() {
        //Tat modal cuoi cung, neu khong con modal thi thuc hien back
        var lastModal = this.getLastModal();
        var canBack = false;
        if (lastModal.canBack) {
            //canBack: Co modal de tat
            this.closeModal(lastModal.index);
            return true;
        } else {
            var rootPages = this.getRootPages();
            var currentPath = this.getCurrentPath();
            // console.log(currentPath, rootPages);
            canBack = !rootPages.some(i => { return i.toLowerCase() == currentPath.toLowerCase() });
        }
        if (canBack) {
            this.doBack();
            return true;
        } else {
            return false;
        }
    }
    doBack() {
        window.history.back();
    }

    getRootPages() {
        return [];
    }

    componentDidMount() {
    }

    componentWillUnmount() {
        if (this.hasSignalR == true) {
            this.signalRHub.unregisterNeed(this);
        }

    }

    mergeState(obj) {
        this.state = obj;
    }
}

export { Context, BasePage };

/*************************************************************
*
*                       _oo0oo_
*                      o8888888o
*                      88" . "88
*                      (| -_- |)
*                      0\  =  /0
*                    ___/`---'\___
*                  .' \|     |// '.
*                 / \|||  :  |||// \
*                / _||||| -:- |||||- \
*               |   | \\  -  /// |   |
*               | \_|  ''\---/''  |_/ |
*               \  .-\__  '-'  ___/-. /
*             ___'. .'  /--.--\  `. .'___
*          ."" '<  `.___\_<|>_/___.' >' "".
*         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
*         \  \ `_.   \_ __\ /__ _/   .-` /  /
*     =====`-.____`.___ \_____/___.-`___.-'=====
*                       `=---='
*
*     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*
*               Buddha Bless:  "No Bugs"
*
* ========================================================= */
