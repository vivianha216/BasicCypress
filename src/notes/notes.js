// 1. Module exports
    //1.1 Module exports and Exports
        // Gồm 2 file math.js và notes.js
    const math = require('./math.js');
    console.log(math.sum(2, 3)); 
    console.log(math.multiply(2, 3));

    //1.2 Export
        // Gồm 3 file math.js, notes.js và notes.html
    // import { x, y } from "./math.js";
    // console.log(x); // outputs 1
    // console.log(y); // outputs 2

    //1.3 So ánh require và import
    // require
    /*
        - là một function trong Node.js
        - Là 1 hoạt động đồng bộ, sẽ chặn việc thực thi tập lệnh cho đến khi module được tải và sẵn sàng để sử dụng
        - chỉ có thể được sử dụng để import module
    */
    // import
    /*
        - là một keyword trong JavaScript
        - Là 1 hoạt động bất đồng bộ, tập lệnh sẽ không bị chặn trong khi module đang tải.
        - có thể được sử dụng để import cả module và các export trong module đó
    */
    
    
    