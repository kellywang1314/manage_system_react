
//判断数组或对象是否为空
export const isEmpty = obj => {
    return obj instanceof Array ? obj.length === 0 : Object.keys(obj).length === 0
}

//实现数组中元素的交换
export const swapArray = (arr, index1, index2) =>{
    arr[index1] = arr.splice(index2, 1, arr[index1])[0]
    return arr
}

//含id的对象数组去重
export const uniqueArray = (arr) =>{
    let hash = {}
    arr = arr.reduce((preVal, curVal) => {
        hash[curVal.Id] ? '' : hash[curVal.Id] = true && preVal.push(curVal)
            return preVal 
        }, [])
    return arr
}

//深度遍历 => obj={a:[1,2,{'q':'wa'}],b:{c:[1,2,3]},c:'wa'}
export const deepClone = obj => {
    let res = obj instanceof Array ? [] : {}
    for(let i in obj){
        if(typeof obj[i] != 'object'){
            res[i] = obj[i]
        }else{
            res[i] = deepClone(obj[i])
        }
    }
    return res
}

//生成唯一key
export const hash = (text) =>{
    let hash = 5381,index = text.length
    while (index) {
        hash = (hash * 33) ^ text.charCodeAt(--index)
    }
    return hash >>> 0
}
return hash
