const Colors = {
    blue: '#133c8b',
    green: 'green',
    border: '#aeaeae40',
    primary: '#008dc8',
    p1: '#7653E8',
    p2: '#53B4E8',
    p3: '#00A09D',
    red: '#DA393D'
}
export const buttonColors = {
    primary: Colors.primary
}
export function getColorByStatus(status){
    if(status){
        return Colors.blue
    }
}

export default Colors;