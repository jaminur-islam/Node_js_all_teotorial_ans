const add = () => {
  return 2 + 2;
};

const student = () => {
  return { name: "sagor", age: 20 };
};

// sorasori ekhane thekeo export kore deya zay;
exports.addNumber = (num1, num2) => {
  return num1 - num2;
};

// ekta export korte caile
// exports.addNumber = addNumber;

// eksathe onek gulu ke export korte caile [module.exports]
// module.exports = { add, addNumber, student };
