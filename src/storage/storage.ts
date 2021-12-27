
class Storage {
    store:any
    constructor(type:string) {
        try{
            window.localStorage;
            window.sessionStorage
        }catch (e){
            alert('浏览器禁用存储，开启后才能存储')
        }
        if(type === 'local'){
            this.store = window.localStorage
        }else if(type==='session'){
            this.store = window.sessionStorage
        }
    }
    set (key:string,value:any){
        const value1 = JSON.stringify(value);
        if(typeof value ==='object'){
            this.store.setItem(encodeURIComponent(key), encodeURIComponent(value1))
        }else {
            this.store.setItem(encodeURIComponent(key), encodeURIComponent(value))
        }
        return this
    }

    get(key:string){
        if (!key) {
            throw new Error('没有找到key。')
        }
        if (typeof key === 'object') {
            throw new Error('key不能是一个对象。')
        }
        const value = this.store.getItem(encodeURIComponent(key));
        try {
            const valueJson = JSON.parse(decodeURIComponent(value))
            if(typeof valueJson ==='object'){
                return valueJson
            } else {
                return value
            }
        }catch (e){
            return {}
        }
    }
    remove (key:string) {
        this.store.removeItem(encodeURIComponent( key))
        return this
    }
    clear(key:string){
        this.store.clear()
    }

}
export const localStorage = new Storage('local')
export const sessionStorage = new Storage('session')
