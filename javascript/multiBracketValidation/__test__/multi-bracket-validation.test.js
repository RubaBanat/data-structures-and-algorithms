'use strict';

const multiBracketValidation = require ('../multi-bracket-validation');

test("“Happy Path” - Expected outcome", () => {
  
    expect(multiBracketValidation('()[[Extra Characters]]') ).toBeTruthy();
  })
  
test("“Happy Path” - Expected outcome", () => {
   
    expect(multiBracketValidation('()[][')).toBeFalsy();
  })
  test("Edge Case (return false if all input open brackets)", () => {
 
    expect(multiBracketValidation('([{')).toBeFalsy();
  })
