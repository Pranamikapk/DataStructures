const str = "hello world ";

console.log("char At : ", str.charAt(2));

console.log("index of : ", str.indexOf("world"));

console.log("subString : ", str.substring(3));

console.log("split : ", str.split("h"));

console.log("match : ", str.match("ll"));

console.log("length : ", str.length);

console.log("toUpperCase : ", str.toUpperCase());

console.log("toLowerCase : ", str.toLowerCase());

console.log("replace : ", str.replace("world", "there"));

console.log("trim : ", str.trim());

console.log("startsWith : ", str.startsWith("hello"));

console.log("endsWith : ", str.endsWith("world"));

console.log("concat : ", str.concat(" This is a concatenated string."));

console.log("includes : ", str.includes("lo"));

console.log("repeat : ", str.repeat(3));

console.log("charAt (last): ", str.charAt(str.length - 1));

console.log("lastIndexOf : ", str.lastIndexOf("l"));

console.log("slice : ", str.slice(3, 8));

console.log("padStart : ", str.padStart(15, "*"));

console.log("padEnd : ", str.padEnd(15, "*"));

console.log("startsWith (with index) : ", str.startsWith("world", 6));

console.log("endsWith (with index) : ", str.endsWith("hello", 5));

