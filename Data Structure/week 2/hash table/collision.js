class Hashtable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let total = 0
        for(let i = 0 ; i < key.length ; i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key,value){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            const sameKeyItem = bucket.find(item=>item[0]===index)
            if(sameKeyItem){
                sameKeyItem[1] = value
            }else{
                bucket.push([key,value])
            }
        }
    }

    get(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            const sameKeyItem = bucket.find(item => item[0]===index)
            if(sameKeyItem){
                return sameKeyItem[1]
            }
        }
        return undefined
    }

    remove(key){
        const index = this.hash(index)
        const bucket = this.table[index]
        if(bucket){
            const sameKeyItem = bucket.find(item => item[0]===index)
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem),1)
            }
        }
        return undefined
    }

    display(){
        for(let i = 0 ; i < this.table.length ; i++){
            if(this.table[i]){
                console.log(i , this.table[i]);
            }
        }
    }
}

const table = new Hashtable(50)
table.set("name" , "abdf")
table.set("age",43)
table.display()
table.set("mane" , "abdf")
table.display()
