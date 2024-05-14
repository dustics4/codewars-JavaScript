class HashMap {
    constructor(){
        this._buckets = [];
    }

    _hash(key){
        let hash = 0;
        for(let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i)) % this._buckets.length;
        }
        return hash;
    }
    //The set method takes a key and a value, calculates the hash for the key, and checks if a bucket exists at that index.
    // If not, it creates a new bucket. It then iterates through the bucket to check if the key is already present. 
    //If found, it updates the value. Otherwise, it adds a new key-value pair to the bucket.
    set(key, value ){
        const index = this._hash(key);
        if(!this._buckets[index]){
            this._buckets[index] = [];
        }

        const bucket = this._buckets[index];
        for(let i = 0; i < bucket.length; i++){
            if(bucket[i][0] === key){
                bucket[i][1] = value;
                return;
            }
        }

        bucket.push([key,value]);
    }

    //The get method takes a key, calculates the hash, and retrieves the corresponding bucket. 
    //It then iterates through the bucket to find the key and returns its value if found.
    get(key){
        const index = this._hash(key);
        const bucket = this._buckets[index];

        if(!bucket){
            return undefined;
        }

        for(let i = 0; i < bucket.length; i++){
            if(bucket[i][0] === key){
                return bucket[i][1];
            }
        }
        return undefined;
    }
    //The remove method takes a key, calculates the hash, and retrieves the corresponding bucket. 
    //It then iterates through the bucket to find the key and removes the key-value pair if found.
    remove(key){
        const index = this._hash(key);
        const bucket = this._buckets[index];
        if(!bucket){
            return;
        }

        for(let i = 0; i < bucket.length; i++){
            if(bucket[i][0] === key){
                bucket.splice(i, 1);
                return;
            }
        }
    }
}

const map = new HashMap();
map.set('name', 'John');
map.set('age', 30);
map.set('city', 'New York');

console.log(map.get('name'));
console.log(map.get('age'));
console.log(map.get('city'));

map.remove('age');
console.log(map.get('age'));