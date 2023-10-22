/* Mô-đun là các thành phần của chương trình có một hoặc nhiều hàm hoặc giá trị. 
   Những giá trị này cũng có thể được chia sẻ trong toàn bộ chương trình và có thể được sử dụng theo nhiều cách khác nhau. 
*/
/* exports là một Object trong Node.js
Bạn có thể xuất các thành phần của 1 module bằng cách gán giá trị cho các thuộc tính của exports*/
exports.sum = (a, b) => {
    return a + b;
  };
  
exports.multiply = (a, b) => {
    return a * b;
};
/*
module.exports là một Object đặc biệt trong Node.js
Bạn có thể xuất một đối tượng, một hàm hoặc một giá trị của module bằng cách gán giá trị cho module.exports.
*/
// module.exports = {
//     sum: (a, b) => {
//       return a + b;
//     },
//     multiply: (a, b) => {
//       return a * b;
//     }
// };
/*Tóm lại, exports và module.exports đều được sử dụng để xuất các thành phần từ một module trong Node.js. 
Tuy nhiên, exports là một đối tượng con của module.exports. 
Khi bạn gán một giá trị cho exports, nó thực chất là gán giá trị cho thuộc tính của module.exports. 
- Nếu đang sử dụng exports trong một tệp, hãy tiếp tục sử dụng nó trong toàn bộ tệp đó 
- Module.exports chỉ cần tồn tại 1 lần trong tệp. Nếu nó tồn tại 2 lần, khai báo thứ 2 sẽ gán lại module.exports và mô-dun chỉ xuất những gì khai báo thứ hai nêu */


//Export in JavaScript
// export const x = 1;
// export const y = 2;
