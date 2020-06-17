import $ from 'jquery';
var _getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};

var _coloursChart = {
    primary: [`rgb(255, 0, 0)`, `rgb(0, 0, 255)`, `rgb(0, 255, 0)`],
    secondary: [`rgb(255, 0, 0)`, `rgb(255,255,0)`, `rgb(0, 255, 0)`, `rgb(0,255,255)`, `rgb(0, 0, 255)`, `rgb(255,0,255)`],
    improvedSecondary: [`rgb(255, 0, 0)`, `rgb(255,255,0)`, `rgb(136, 136, 136)`, `rgb(0,255,255)`, `rgb(0, 0, 255)`, `rgb(255,127,0)`],
    primaryRGBA: (value) => {
        return [`rgba(255, 0, 0, ${value})`, `rgba(0, 0, 255, ${value})`, `rgba(0, 255, 0, ${value})`];
    },
    secondaryRGBA: (value) => {
        return [`rgba(255, 0, 0,${value})`, `rgba(255,255,0,${value})`, `rgba(0, 255, 0,${value})`, `rgba(0,255,255,${value})`, `rgba(0, 0, 255,${value})`, `rgba(255,0,255,${value})`];
    },
    improvedSecondaryRGBA: (value) => {
        return [`rgba(255, 0, 0,${value})`, `rgba(255,255,0,${value})`, `rgba(136, 136, 136,${value})`, `rgba(0,255,255,${value})`, `rgba(0, 0, 255,${value})`, `rgba(255,127,0,${value})`];
    },
};

var _point = {
    radius: 3,//Bán kính điểm.
    pointStyle: `circle`,//Hình đạng của điểm, có thể là hình ảnh.Tham khảo https://www.chartjs.org/docs/latest/configuration/elements.html#point-styles
    rotation: 0,//Điểm xoay (tính bằng độ).
    backgroundColor: 'rgba(136,136,136,0.4)',//màu background của điểm.
    borderWidth: 1,//Độ dày của viền điểm.
    borderColor: 'rgba(136,136,136,0.8)',//Màu của viền điểm.
    hitRadius: 1,//bán kính thêm vào bán kính điểm để mở vộng vùng truy cập sự kiện cho điểm.
    hoverRadius: 4,//bán kính điểm khi được hover.
    hoverBorderWidth: 1,//viền khi được hover.
}
var _legendDP = {
    display: true,//Hiên = true, không hiện = false. Mặc định true
    position: "left",//Vị trí của legends "top", "right","bottom", or "left"
    fullWidth: true,// sẽ dàn legend ra với width bằng width của Chart? Mặc định true.
    reverse: false,//Đảo ngược thứ tự của các legend. Mặc định false
    labels: {
        fontColor: "rgb(0, 0, 0)",//màu chữ.
        //defaultFontColor: '#666',//Chỉnh màu chữ mặc định.
        //defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",//Chỉnh font chữ mặc định.
        //defaultFontSize: 12,//Chỉnh size chữ mặc định.
        //defaultFontStyle: 'normal',//Chỉnh kiểu chữ mặc định.
        //4 trường defaut trên mặc định khi chưa khai báo là như trên.
        boxWidth: 40,//set width cho box của legend.
        fontSize: 12,//set size của text.
        fontStyle: `normal`,
        fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",//
        //3 trường font này giống với phần font ở default.
        padding: 10,//Khoảng cách giữa 2 dòng legend.
        //generateLabels: () => { },//Tạo label với các thuộc tính tùy chỉnh. Legend Item trong https://www.chartjs.org/docs/latest/configuration/legend.html#legend-item-interface
        //filter: () => { },//Locj legend khoir legend. Đối số là legend iteam và chart data
        usePointStyle: false, //Dungf style có sẵn.
    },//Set các thuộc tính cho dòng text ở Legend.
    //onClick: (e, legendItem) => { },//event khi click vô legend. Nếu setup event này thì event gốc sẽ bị ghi đè lên.https://www.chartjs.org/docs/latest/configuration/legend.html#legend-item-interface
    //onHover: (e, legendItem) => { },//event khi hover vô legend. 
};//Cài đặt một số tính chất về chữ, padding , v,v cho Legend.Khồng hỗ trợ setup màu.
//Tất cả properties đều có giá trị mặc định khi ta chưa khai báo.
var _optionsDP = {
    cutoutPercentage: 30,// Tỷ lệ phần trăm của biểu đồ bị cắt ra ở giữa. Mặc định là 50.Dùng cho Doughnut chart. Nếu là Pie chart thì là 0.
    rotation: -0.5 * Math.PI,//Góc mà chart bắt đầu vẽ doughnut/pie. 
    //Tính theo đơn vị radian.Trục tọa độ y từ trên xuống, trục x từ trái sang.Mặc định là - 0.5 * Math.PI.
    circumference: 2 * Math.PI, // Độ bao phủ của cùa doughnut/pie trên chart.
    //Tính theo Radian. Độ bao phủ bắt đầu từ góc bắt đầu vẽ chart cho đến khi chart quét được 1 góc như đã set ở "circumference".
    //Mặc định là 2* Math.PI
    animation: {
        animateRotate: true,//Tạo hiệu ứng mở rộng theo vòng xoay khi chart được load. Mặc định là true.
        animateScale: true,//Hiệu ứng mở rộng từ trong ra ngoài khi chart được load. Mặc định là false.
        //duration: 1000,//ms animation sẽ chạy.
        //easing: 'easeOutQuart',// Hiệu ứng animation tham khảo thêm https://www.chartjs.org/docs/latest/configuration/animations.html#animation-callbacks
        // onProgress: (animation) => { console.log(animation) },//Chạy khi animation chạy.
        //onComplete: (animation) => { console.log(animation) },//Được gọi khi animation kết thúc.
    },//Cài đặt animation tham khảo https://www.chartjs.org/docs/latest/configuration/animations.html#animation-callbacks
    //events: ["click"],// Định nghĩa các sự kiện mà chart sẽ nhận biết để thực hiện hiện tooltips or hovering.
    //Mặc định: ["mousemove", "mouseout", "click", "touchstart", "touchmove", "touchend"].
    //onHover: () => { },//Được gọi khi sự kiện bị loại bỏ. Được gọi trong chart, hoặc event đã thực thi hoặc chuỗi hoạt động của phần tử.
    //onClick: () => { },//Được gọi khi sự kiện 'mouseup' hoặc 'click' được kích hoạt. Gọi trong trường hợp như onHover.
    tooltips: {
        enabled: true,//Kích hoạt tooltips.
        //custome: _customTooltips,//
        mode: `nearest`,// Điểu chỉnh vị trí xuất hiện của tooltip.
        //Có các chế độ: point, nearest, index, dataset, x (chỉ áp dụng cho cartesian), y (chỉ áp dụng cho cartesian).
        intersect: true,// Nếu là true. Chế độ hover chỉ được áp dụng khi chuột giao nhau với chart.
        position: 'average',//vị trí của tooltips.Có 2 giá trị là 'average'và 'nearest'.
        //callbacks: {},// Tham khảo https://www.chartjs.org/docs/latest/configuration/tooltip.html#tooltip-callbacks
        //itemSort: () => { },//https://www.chartjs.org/docs/latest/configuration/tooltip.html#sort-callback
        //filter: () => { },//https://www.chartjs.org/docs/latest/configuration/tooltip.html#filter-callback
        //backgroundColor: 'rgba(0,0,0,0.8)',//Màu background của tooltips.
        //titleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",//font chữ của tooltips.
        //titleFontSize: 12,//Size chữ.
        //titleFontStyle: 'bold',//Kiểu chữ.
        //titleFontColor: '#fff',//Màu chữ.
        //titleSpacing: 2,//khoảng trắng giữa top và bot của dòng.
        //titleMarginBottom: 6,//Margin giữa top và bot với chữ.
        //title sẽ chỉnh style chữ cho phần title trong Tooltips.
        //ta còn có các properties khác là "body" or "footer" tương ứng hiệu chỉnh kiểu chữ cho từng phần đó. 
        //Các properties đó có tên như phần title trên và thay title = body or footer.
        //Giá trị mặc định của các trường này như phần title.
        //xPadding: 6,//padding trái và phải của tootltips.
        //yPadding: 6,//padding trên và dưới của tooltips.
        //caretPadding: 2,//khoảng các để thay đổi vị trí kết thúc của mũi tên tooltips khi di chuyển khỏi vị trí tooltips.
        //caretSize: 5,//size của mũi tên tooltips.
        //cornerRadius: 6,//Độ cong của góc của tooltips.
        //multiKeyBackground: '#fff',//màu để vẽ phía sau các box màu khi có nhiều màu trong tooltips.
        //displayColors: true,//Color boxes sẽ được hiện ra ở tooltips.
        //borderColor: 'rgba(0,0,0,0)',//Màu của viền tooltips.
        //borderWidth: 0,//Độ dày của viền.
        //axis: `xy`,//Set trục tọa độ sẽ được dùng để xem xét khi thực hiện tính khoảng cách. 
        //Mặc định là 'x' nếu "mode = index", 'xy' nếu "mode = dataset or nearest".
        //animationDuration: 400,//thời gian (ms) khi có animation của hover style thay đổi.
    },//Tùy chỉnh cho tooltips. Giá trị tất cả các properties trong dây là defaut value của chúng khi không được khai báo.(ngoại trừ các hàm).
    //TooltipsModel https://www.chartjs.org/docs/latest/configuration/tooltip.html#tooltip-model
    //color: _color,
    layout: {
        padding: {
            left: 0,
            right: 0,
            top: 20,
            bottom: 0,
        },//Chỉnh padding cho Chart.
    },//Mặc định là 0. Khi không khai báo sẽ được lấy giá trị mặc định.
    title: {
        display: true,//Show title chart?
        position: 'top',//Vị trí.
        fontSize: 20,//Size chữ.
        fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",//font chữ.
        fontColor: '#666',
        fontStyle: `normal`,
        padding: 10,//số khoảng cách ở trên và dưới title.
        lineHeight: 1.2,//Height of an individual line of text
        text: "DOUGHNUT CHART",//Nội dung Title.
    },//Hiệu chỉnh title. khi không khai báo, mặc định của title là không hiện lên. nội dung title là trống.
    legendCallback: (chart) => {
        // Return the HTML string here.
    },//Khi cần legend phúc tạp ta có thể chỉnh sửa bằng properties này.
    //lưu ý. Hàm này sẽ không tự gọi và ta phải gọi generateLegend trong code khi tạo legend.
    //elements: {
    //point: _point,//Tùy chỉnh của Point Chart.
    //line: _line,//Tùy chỉnh của Line Chart.
    //rectangle: _rectangle,//Tùy chỉnh của rectangle.
    //arc: _arc;//tùy chỉnh của arc trong Pie và doughnut chart.                
    //},//tùy chỉnh cho các phần tử trong chart.
};//Tùy chỉnh cho chart

var _lineDataset = {
    data: [65, 59, 80, null, 56, 55, 40,90,100,20,23,12],
    //Gía trị trong data có thể là object {x: number, y:number} là các điểm như được dùng ở Scatter Chart.
    //Các tùy chỉnh khác của Dataset.
    //xAxisID: ``,//ID của trục X để vẽ tập dữ liệu lên. 
    //Nếu không được quy định, mặc định sẽ là ID đầu tiên được tìm thấy trong trục
    //yAxisID:``,
    backgroundColor: `rgba(255,0,0,0.5)`,//Màu của vùng bên dưới line.
    borderColor: `red`,//Màu của Line.
    //2 trường này đồng thời cũng được dùng để setup cho các legend của Chart.
    borderWidth: 2,//Độ dày của Line.
    borderDash: [],//Quy định dạng Line. Là một đường liên tục hay đứt quãng. Tham khảo: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash
    borderDashOffset: 0,//phần bù cho Line. Tham khảo:https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset
    borderCapStyle: `butt`,//kiểu dáng của 2 đầu Line. Có sự khác biệt về độ dài. Chi tiết: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap
    borderJoinStyle: `bevel`,//Kiểu dáng của đoạn giao nhau (gấp khúc) của đoạn thẳng. Lưu ý: có sự khác biệt giữa các kiểu. Chi tiết:https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin
    cubicInterpolationMode: `default`,//Thuật toán được sử dụng để vẽ ra các đường cong từ các điểm rời rạc.
    //Chi tiết tham khảo thêm: https://www.chartjs.org/docs/latest/charts/line.html#cubicinterpolationmode
    fill: false,//Cách để lấp đầy khu vực bên dưới line. Chi tiết: https://www.chartjs.org/docs/latest/charts/area.html#filling-modes
    //Có ích rất nhiều trong việc giúp Chart đẹp và dễ hiểu hơn.
    //Có thể dùng để vẽ biểu đồ miền.
    lineTension: 0.4,//Độ căng của đường cong Bezier. 0 để vẽ đường thẳng. 
    //Trường này sẽ được bỏ qua nếu thuật toán "monotone" được set trong "cubicInterpolationMode".
    //Trường point trong dataset có cùng kiểu với _point trong option. Tuy nhiên có sự đa dạng hơn.
    //Kiểm tra Object _point để có được chi tiết hơn. 
    //Khác nhau là kiểu dữ liệu của mỗi thuộc tính ngoài kiểu đơn còn có thể là Array nhiều giá trị.
    //Point nếu không được setup thì sẽ có các thuộc tính màu giống thuộc tính màu được set ở khâu trên.
    //Các trường còn lại sẽ là mặc định như object _point.
    pointBackgroundColor: _point.backgroundColor,
    pointBorderColor: _point.borderColor,
    pointBorderWidth: _point.borderWidth,
    pointRadius: _point.radius,
    pointStyle: _point.pointStyle,
    pointRotation: _point.rotation,
    pointHitRadius: _point.hitRadius,
    pointHoverBackgroundColor: `rgba(255,0,0,0.5)`,//Màu của điểm khi được hover.
    pointHoverBorderColor: `red`,//Màu của viền điểm khi được hover.
    pointHoverBorderWidth: _point.hoverBorderWidth,
    pointHoverRadius: _point.hoverRadius,
    //Lưu ý: Nếu là mảng thì các mảng mỗi trường lên có số giá trị bằng nhau để tương ứng hiệu ứng cho từng điểm.
    showLine: true,//Vẽ hay không vẽ line trong chart.
    spanGaps: true,//Nếu là true, các line sẽ được vẽ giữa những điểm không có data hoặc data null. 
    //False thì line sẽ có điểm đứt đoạn giữa nếu có điêm NaN data.
    steppedLine: false,//kiểm tra lại.Tham khảo: https://www.chartjs.org/docs/latest/charts/line.html#stepped-line
};//Trường background collor không cần set nếu fill = false.
//Nếu không phải biểu đồ miền hay biểu đồ có tô màu vùng bên dưới line thì ta cần set background cùng màu với border.
var _lineDataset2 = $.extend(true, {}, _lineDataset);
_lineDataset2.data = _lineDataset2.data.map((i) => {
    if (i != null) {
        return (i - 20)
    }
    else {
        return (null);
    }
});
_lineDataset2.backgroundColor = `rgba(0,0,255,0.7)`;
_lineDataset2.borderColor = `blue`;
_lineDataset2.pointHoverBackgroundColor = `rgba(0,0,255,0.7)`;
_lineDataset2.pointHoverBorderColor = `blue`;
_lineDataset2.spanGaps = true;
_lineDataset2.label = `Bad News`;

var _barDataset = {
    data: [1, 2, 3, 4, 5, 6, 7].map(i => {
        return (_getRandomInt(10, 100));
    }),
    label: `MATH`,
    xAxisID: 0,
    yAxisID: 0,
    backgroundColor: `rgba(255,0,0,0.4)`,
    borderColor: `red`,
    borderWidth: 1,
    borderSkipped: null,
    hoverBackgroundColor: `rgba(255,0,0,8)`,
    hoverBorderColor: `blue`,
    hoverBorderWidth: 3,
};
var _barDataset2 = $.extend(true, {}, _barDataset);
_barDataset2.label = `INTEL`;
_barDataset2.data = [1, 2, 3, 4, 5, 6, 7].map(i => {
    return (_getRandomInt(10, 100));
});
_barDataset2.backgroundColor = `rgba(0,255,0,0.4)`;
_barDataset2.borderColor = `green`;
_barDataset2.hoverBackgroundColor = `rgba(0,255,0,0.8)`;
_barDataset2.hoverBorderColor = `red`;

var _doughnutDataset = {
    data: [1, 2, 3, 4, 5, 6].map(i => { return (_getRandomInt(50, 300)) }),//Giá trị của Data
    backgroundColor: _coloursChart.improvedSecondaryRGBA(0.5),//Màu của từng miếng trong chart.
    //background còn có thể được vẽ với các loại  hoa văn. "pattern.draw('square', '#ff6384')" Tham khảo : https://github.com/ashiguruma/patternomaly
    hoverBackgroundColor: _coloursChart.improvedSecondaryRGBA(0.8),//Màu của từng miếng khi được hover
    borderColor: [],//Màu viền từng miếng
    borderWidth: [],//Độ dày của viền.
    hoverBorderColor: _coloursChart.improvedSecondaryRGBA(1),//màu viền từng miếng khi được hover.
    hoverBorderWidth: [2, 2, 2, 2, 2, 2],//Độ dày của viền từng miếng khi được hover 
    //Khi setup màu cho từng miếng trong chart cũng tương ứng setup màu cho từng cục legend (không áp dụng với trường có chữ hover).
};//Các trường "data" và color kiểu array và số lượng phần tử các phần phải bằng nhau. Nếu ít hơn thì màu của các cục dữ liệu dư ra sẽ set là màu xám.


export { _legendDP, _optionsDP, _lineDataset, _lineDataset2, _barDataset, _barDataset2, _doughnutDataset };