# luhn-validator
Credit card and IMEI number validation using luhn algorithm

## Installation
      npm install luhn-validator
  
## Usage
    const luhn = reqiure("luhn-validator");
      
    luhn.validateCard("12345678901234");
    luhn.validateImei("1234567890123459);

## validateCard() return type
      {
        isValid: true,
        type: "Visa"
      }
  or

      { isValid: false }

  

## validateImei() return type
     { isValid: true }
 or

     { isValid: false }
     
