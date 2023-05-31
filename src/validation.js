export function userCoinValidationCheck(input){
    // Use a regular expression to check if the
    // input consists of positive digits only
    const integerRegex = /^(?!0)\d+$/;
    // Check if the input matches the integer regex
    return integerRegex.test(input);
}


