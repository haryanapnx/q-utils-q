
export const convertToRp = (angka: number, currency: string = 'IDR') => {
   const value = angka.toString().split(".")[0];
   const space = " ";
   let rupiah = "";
   const angkarev = value.toString().split("").reverse().join("");
   for (let i = 0; i < angkarev.length; i++)
      if (i % 3 === 0) rupiah += angkarev.substr(i, 3) + ".";
   return (
      currency + space +
      rupiah
         .split("", rupiah.length - 1)
         .reverse()
         .join("")
   );
};

export const titleCase = (str: string, char: string) => {
   const strReplace = str.toLowerCase().split(char);
   return strReplace
      .map((item: string) => item.charAt(0).toUpperCase() + item.slice(1))
      .join(" ");
};

export const isEmpty = (val: any) => {
   if (val === undefined) return true;

   if (
      typeof val === "function" ||
      typeof val === "number" ||
      typeof val === "boolean" ||
      Object.prototype.toString.call(val) === "[object Date]"
   )
      return false;

   if (val === null || val.length === 0)
      // null or 0 length array
      return true;

   if (typeof val === "object") {
      // empty object
      let r = true;

      // eslint-disable-next-line no-unused-vars
      for (const _f in val) r = false;
      return r;
   }
   return false;
};

// export const sorting = (value) => {
//    const { sortColumn, sortType, data = [] } = value;

//    if (data.length && sortColumn && sortType) {
//       data.sort((a, b) => {
//          let x = a[sortColumn];
//          let y = b[sortColumn];
//          if (typeof x === "string") {
//             x = x.charCodeAt();
//          }
//          if (typeof y === "string") {
//             y = y.charCodeAt();
//          }
//          if (sortType === "asc") {
//             return x - y;
//          } else {
//             return y - x;
//          }
//       });
//    }
//    return data;
// };
