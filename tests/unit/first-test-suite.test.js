// test("first-test", () => {
//   console.log("hello, jest");
// });

// Test expecting 1 to be 1
test("one-is-one", () => {
  expect(1).toBe(1);
});

// Test expecting 1+1 to be 2
test("one-plus-one-is-two", () => {
  expect(1 + 1).toBe(2);
});
