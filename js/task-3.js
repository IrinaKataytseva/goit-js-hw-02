// function getElementWidth (content, padding, border) {
//     const boxSizing = parseFloat(content) + 2 * parseFloat(padding) + 2 * parseFloat(border) ;
//           return boxSizing;
//     }
//     console.log(getElementWidth("50px", "8px", "4px")); // 74
//     console.log(getElementWidth("60px", "12px", "8.5px")); // 101
//     console.log(getElementWidth("200px", "0px", "0px")); // 200
    
    


//     function  checkForSpam(message) {

//     }

// const username = 'Jacob Mercer';

// console.log(username.includes('Jacob'));



// const message = "Please buy our stuff!";
// const hasSpam = message.includes("buy");

// if (hasSpam) {
//   console.log("Warning: This message contains forbidden words.");
// } else {
//   console.log("You can safely open this message.");
// }



//     console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

function checkForName(fullName, firstName) {
// const fullName = 'Rfnfqwtdf';
// const firstName = 'BHBYF';
      const lowerFullName = fullName.toLowerCase();
      const lowerFirstName = firstName.toLowerCase();
      // console.log(lowerFullName);
      // console.log(lowerFirstName);
      return lowerFullName + " " + lowerFirstName;
}


console.log(checkForName("Rfsdfwtdf Bhbyf","BHBYF" ));