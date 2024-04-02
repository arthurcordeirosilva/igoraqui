export function criarFila(tamanhoFila = 4){
    return[...Array(tamanhoFila)]

}
export function inserirItem(fila, item){
    const spacePosition = fila.indexOf(undefined)
    if(spacePosition === -1){
        console.log('nao tem espaço')
        return;
    }
    fila[spacePosition] = item
}

export function retirarItem(fila){
    const primeiro = fila.indexOf(undefined)
        if(fila[0] === undefined){
        console.log('jaj')
        return
     }
        for (let i = 1; i < fila.length; i++) {
            fila[i] = fila[i - 1]
            return
        }
        console.error('fila vazia')
        }   

