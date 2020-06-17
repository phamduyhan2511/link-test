import "../../i3NodeModules/block-ui/jquery.blockUI";
import $ from '../../i3NodeModules/jquery';
import moment from '../../i3NodeModules/moment';

var ehealth = {};

function _isMobile() {
    var check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|ipad|ipad-pro|ipadpro|ipad_pro|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    //Chỉ dùng cho SGC.Event.
    // check = true;
    return check;
};

ehealth.isMobile = _isMobile()
ehealth.likeSomeThing = (like, callback) => {
    ehealth.ajax.post({
        url: `/api/Event/LikeSomeThing`,
        data: JSON.stringify(like),
        successCallback: (ack) => {
            typeof callback === 'function' && callback();
        },
        unsuccessFunction: () => {
        },
        isNotBlockUI: true
    })
}
ehealth.color = {
    pink: "#ed0678",
    red: "#b81220",
    lightRed: '#f4dcde',
    HMBlue: "#008644",
    fontColorCoop: '#464646',
    blueCoop: '#133c8b',
    green: '#268c0f',

}
// ehealth blockUI
ehealth.numberOfBlock = 0;
// ehealth.blockUI = function (message) {
//     var myMessage = '<div class="preloader-light"><div class="preload-spinner"></div>';
//     if (message && message.length > 0) {
//         myMessage += '<div class="color-green-light center-text" style="' +
//             '    /* background: none; */' +
//             '    position: absolute;' +
//             '    top: 30px;' +
//             '    width: 250px;' +
//             '    left: calc(50vw - 125px)' +
//             '">' + message + '</div>';
//     }
//     myMessage += '</div>';
//     if (ehealth.numberOfBlock === 0) {
//         $.blockUI({
//             message: myMessage,
//             css: {
//                 border: 'none',
//                 backgroundColor: 'transparent',
//                 textAlign: 'unset',
//                 left: 'unset',
//                 width: '100%'
//             },
//             baseZ: 2000
//         });
//     }
//     ehealth.numberOfBlock++;
// };
ehealth.blockUI = function (message) {
    if (ehealth.numberOfBlock === 0) {
        window.blockUI();
    }
    ehealth.numberOfBlock++;
};
ehealth.unblockUI = function () {
    ehealth.numberOfBlock--;
    if (ehealth.numberOfBlock <= 0) {
        window.unblockUI();
    }
    if (ehealth.numberOfBlock < 0) ehealth.numberOfBlock = 0;
};
// ehealth.unblockUI = function () {
//     ehealth.numberOfBlock--;
//     if (ehealth.numberOfBlock <= 0) {
//         $.unblockUI();
//     }
//     if (ehealth.numberOfBlock < 0) ehealth.numberOfBlock = 0;
// };

// ehealth guid
ehealth.guid = {
    get: function () {
        return ehealth.guid._get8() + ehealth.guid._get8(true) + ehealth.guid._get8(true) + ehealth.guid._get8();
    },
    _get8: function (s) {
        var p = (Math.random().toString(16) + "000000000").substr(2, 8);
        return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
    }
};

ehealth.name = {
    toShort: function (name) {
        var result = "";
        result = name.trim();
        var items = result.split(" ");
        items = items.filter(function (i) { return i.length > 0; });
        for (var i = 0; i < items.length - 1; i++) {
            items[i] = (items[i].substring(0, 1) + ".").toUpperCase(); // cat het phan ho, ten lot den cuoi.
        }
        return items.join(" ");
    }
}

ehealth.ajax = {
    send: function (_method, params) {
        if (!params.url) {
            throw (`ehealth ajax parameters must have "url" property`);
        }
        // if (params.url.indexOf("/api") != 0) {
        //     throw ("url must start with '/api'");
        // }
        let fullUrl = params.url.indexOf("http") == 0 ? params.url : (window.applicationBaseUrl + params.url);
        //params.headers = params.headers ? params.headers : {};
        $.ajax({
            url: fullUrl,
            data: params.data,
            method: _method,
            dataType: 'json',
            //headers: params.headers,
            contentType: 'application/json; charset=utf-8',
            beforeSend: function (xhr) {
                if (!params.isNotBlockUI) {
                    ehealth.blockUI();
                }
            },
            success: function (result, status, xhr) {
                var xhrParse = JSON.parse(xhr.getResponseHeader("X-Responded-JSON"));
                if (xhrParse && xhrParse.status == 401)
                    window.location.replace(window.applicationBaseUrl + "/Account/Login?ReturnUrl=" + window.location.href);
                if (typeof (params.successCallback) === "function") {
                    if (result.isSuccess === true) {
                        params.successCallback(result, status, xhr);
                    } else if (result.isSuccess === false) {
                        //result.errorMessage.map(message => alertify.error(message)); //TODO
                        if (typeof params.unsuccessFunction === 'function') {
                            params.unsuccessFunction(result, status, xhr);
                        }
                    }
                } else {

                }
            },
            error: function (xhr, status, err) {
                if (typeof (params.errorCallback) === "function") {
                    params.errorCallback(xhr, status, err);
                } else {
                    //alertify.error("Lỗi API: " + params._url); //TODO
                }
            },
            complete: function () {
                if (!params.isNotBlockUI) {
                    ehealth.unblockUI();
                }
                else {
                    ehealth.unblockUI();
                }
            }
        });
    },
    // params shapes
    // url: string, 
    // data: model, 
    // successCallback: func, 
    // errorCallback: func, 
    // isNotBlockUI: true thì KHÔNG hiện blockUI, 
    // unsuccessFunction: func, 
    // headers
    get: function (params, url, data, successCallback, errorCallback, isNotBlockUI, unsuccessFunction, headers) {
        ehealth.ajax.send('GET', params);
    },
    post: function (params, url, data, successCallback, errorCallback, isNotBlockUI, unsuccessFunction, headers) {
        ehealth.ajax.send('POST', params);
    }
};

ehealth.uploadFile = function (e, callback, url) {
    if (typeof (FileReader) != "undefined") {
        var img = e.target.files[0];
        var formData = new FormData();
        formData.append('file', img);
        if (img) {
            ehealth.blockUI();
            $.ajax({
                url: window.applicationBaseUrl + (url ? url : '/api/Event/UploadFile'),
                type: 'POST',
                data: formData,
                contentType: false,
                processData: false,
                success: function (ack) {
                    if (typeof callback === 'function') {
                        callback(ack);
                    }
                },
                error: function (xhr, status, err) {
                },
                complete: () => {
                    ehealth.unblockUI();
                }
            });
        }
    };
}

ehealth.printer = {
    message: "Please wait while we create your document",

    active: function (url) {
        console.log(url);
        this.loadPrintDocument(url);
    },

    /**
        * Load & show message box, call iframe
        * @param {jQuery} el - The button calling the plugin
        * @param {Object} pluginOptions - options for this print button
        */
    loadPrintDocument(url) {
        var self = this;
        $("body").append(self.components.messageBox(self.message));
        $("#printMessageBox").css("opacity", 0);
        $("#printMessageBox").animate({ opacity: 1 }, 100, function () {
            self.addIframeToPage(url);
        });
    },
    /**
        * Inject iframe into document and attempt to hide, it, can't use display:none
        * You can't print if the element is not dsplayed
        * @param {jQuery} el - The button calling the plugin
        * @param {Object} pluginOptions - options for this print button
        */
    addIframeToPage: function (url) {
        var self = this;
        if (!$('#printPage')[0]) {
            $("body").append(self.components.iframe(url));
            $.blockUI({ message: '' });
            $('#printPage').on("load", function () { self.printit(); $.unblockUI(); });
        }
        else {
            $('#printPage').attr("src", url);
        }
    },
    /*
        * Call the print browser functionnality, focus is needed for IE
        */
    printit: function () {
        var self = this;
        frames["printPage"].focus();
        frames["printPage"].print();
        self.unloadMessage();
    },
    /*
        * Hide & Delete the message box with a small delay
        */
    unloadMessage: function () {
        $("#printMessageBox").delay(0).animate({ opacity: 0 }, 700, function () {
            $(this).remove();
        });
    },
    /*
        * Build html compononents for thois plugin
        */
    components: {
        iframe: function (url) {
            return '<iframe id="printPage" name="printPage" src=' + url + ' style="position:absolute;top:0px; left:0px;width:0px; height:0px;border:0px;overfow:none; z-index:-1"></iframe>';
        },
        messageBox: function (message) {
            return "<div id='printMessageBox' style='\
        position:fixed;\
        top:50%; left:50%;\
        text-align:center;\
        margin: -60px 0 0 -155px;\
        width:310px; height:120px; font-size:16px; padding:10px; color:#222; font-family:helvetica, arial;\
        opacity:0;\
        background:#fff url(data:image/gif;base64,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) center 40px no-repeat;\
        border: 6px solid #555;\
        border-radius:8px; -webkit-border-radius:8px; -moz-border-radius:8px;\
        box-shadow:0px 0px 10px #888; -webkit-box-shadow:0px 0px 10px #888; -moz-box-shadow:0px 0px 10px #888'>\
        "+ message + "</div>";
        }
    }
};


ehealth.cleanAccents = function (str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    // Combining Diacritical Marks
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // huyền, sắc, hỏi, ngã, nặng 
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // mũ â (ê), mũ ă, mũ ơ (ư)
    return str;
}


// save file from binary
/*
FILE DATA
    Model from server
TYPE   
 - MSExcel: "application/msexcel"
*/
ehealth.b64toBytes = function (data) {
    let base64 = data;
    var byteCharacters = atob(base64);
    var byteNumbers = new Array(byteCharacters.length);
    for (var i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    var byteArray = new Uint8Array(byteNumbers);
    return byteArray;
}
ehealth.saveFileFromBinary = function (fileData, type) {
    let aTag = document.createElement("a");
    const { name, data } = fileData;

    const blob = new Blob([ehealth.b64toBytes(data)], { type: type });
    const url = window.URL.createObjectURL(blob);
    document.body.appendChild(aTag);
    aTag.href = url;
    aTag.download = name;
    aTag.click();
    aTag.remove();
}

ehealth.getPath = function (p) {
    return window.applicationBaseUrl + p;
}

ehealth.getThumbnailUrl = function (p) {
    return p + "&width=" + $(window).width();
}

ehealth.getUrlWithEventId = function (p) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === p) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
}

ehealth.getEventIdByLocalstorage = function () {
    let event = JSON.parse(localStorage.getItem("event"));
    if (event == null) {
        return null;
    }
    return event.id;
}

ehealth.getDuration = function (time) {
    let now = moment();
    let duration = moment().diff(moment(time), "seconds")
    if (time > now) duration = -duration;
    return duration;
}
// ehealth.downloadFileAttachment = function (url) {
//     if (typeof Native_Download == "function") {
//         try {
//             Native_Download(url);
//         } catch (err) {
//             alert(err);
//         }
//     } else {
//         window.open(url, "_self");
//     }
// }

// ehealth.openGoogleMap = function (position, noNativeMapCallback) {
//     if (typeof Native_OpenMap == "function") {
//         try {
//             var params = position.lng + ',' + position.lat;
//             Native_OpenMap(params);
//         } catch (err) {
//             alert(err);
//         }
//     } else {
//         typeof noNativeMapCallback == "function" && noNativeMapCallback();
//     }
// }

ehealth.postFormData = (url, formData, successCallback, errorCallback) => {
    $.ajax({
        url: url,
        data: formData,
        cache: false,
        type: "POST",
        contentType: false,
        processData: false,
        // dataType: "json",
        beforeSend: function () {
            ehealth.blockUI();
        },
        success: function (data) {
            typeof (successCallback) === "function" && successCallback(data);
        },
        complete: () => {
            ehealth.unblockUI();
        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
            typeof (errorCallback) === "function" && errorCallback();
        }
    });
}

ehealth.getDistance = function (coord1, coord2) {
    var pi = Math.PI
    var R = 6371e3; // metres
    var lat1 = coord1.latitude * (pi / 180);
    var lat2 = coord2.latitude * (pi / 180);
    var dLat = (coord2.latitude - coord1.latitude) * (pi / 180);
    var dLong = (coord2.longitude - coord1.longitude) * (pi / 180);

    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1) * Math.cos(lat2) *
        Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    var d = R * c;

    return d;
}


ehealth.toCamelString = (origKey) => {
    var i = 0;
    while (i < origKey.length && origKey.charAt(i) === origKey.charAt(i).toUpperCase()) {
        i++;
        if (i < origKey.length) {
            if (origKey.charAt(i) === origKey.charAt(i).toLowerCase()) {
                i--;
                break;
            }
        }
    }
    if (i === 0) i = 1;
    let newKey = origKey.slice(0, i).toLowerCase() + origKey.slice(i);
    return newKey;

}

ehealth.toCamel = (o) => {
    var newO, origKey, newKey, value
    if (o instanceof Array) {
        newO = []
        for (origKey in o) {
            value = o[origKey]
            if (typeof value === "object") {
                value = ehealth.toCamel(value)
            }
            newO.push(value)
        }
    } else {
        newO = {}
        for (origKey in o) {
            if (o.hasOwnProperty(origKey)) {

                let newKey = ehealth.toCamelString(origKey);
                value = o[origKey]
                if (value instanceof Array || (value !== null && value.constructor === Object)) {
                    value = ehealth.toCamel(value)
                }
                newO[newKey] = value
            }
        }
    }
    return newO
}
ehealth.categoryType = {
    schedule: 1,
    activityFeed: 2,
    game: 3,
    information: 4,
    news: 5,
    iframe: -99
}

ehealth.getPublicIP = function (callback) {

    $.ajax({
        url: "https://api.ipify.org/?format=json",
        method: "GET",
        beforeSend: function () {

        },
        success: function (data) {
            typeof callback === "function" && callback(data.ip);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            callback("N/A");
        },
        complete: function () {
        }
    });
};

ehealth.shallowEqual = function (objA, objB) {
    if (objA === objB) {
        return true;
    }
    if (typeof objA !== 'object' || objA === null ||
        typeof objB !== 'object' || objB === null) {
        return false;
    }

    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) {
        return false;
    }

    // Test for A's keys different from B.
    var bHasOwnProperty = hasOwnProperty.bind(objB);
    for (var i = 0; i < keysA.length; i++) {
        if (typeof objB[keysA[i]] === "function") {
        } else if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
            return false;
        }
    }
    return true;
}
export default ehealth;

