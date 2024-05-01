const isboletoPago = false
const boletoPago = {}
boletoPago[true]='O boleto está pago'
boletoPago[false]='O boleto não está pago'

alert(boletoPago[isboletoPago])

// if(boletoPago){
//     alert('O boleto está pago!')
// }else{
//     alert('O boleto não está pago"')
// }