export default function(array, object) {
    if(!Array.isArray(array)) {
        throw new TypeError("mapToProperties: expects argument 0 to be an array");
    }

    if(!(typeof(object) === "object")) {
        throw new TypeError("mapToProperties: expects argument 1 to be an object");
    }

    return [for (prop of array) return object[prop]];
};
