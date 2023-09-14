        //Q1
        //  var firstName = prompt('Enter the first name:');
        //  var lastName = prompt('Enter the last name:');
        //  var fullName = firstName +' '+ lastName;
        //  document.write('Welcome! '+fullName);

        // //Q2
        //  var modelNo = prompt('Enter your favourite mobile phone name and model no:');
        //  document.write('My favourite phone is: ' +modelNo);
        //  document.write('<br>');
        //  document.write('Length of String: ' +modelNo.length);

        // //Q3
        //  var countryName = 'Pakistani';
        //  document.write('Index of "n" is: '+countryName.indexOf('n'));

        // //Q4
        // var letters = 'Hello World';
        // document.write('Last index of "l" is: '+ letters.lastIndexOf('l'));

        // //Q5
        // var nationality = 'Pakistani';
        // document.write('Character at index 3: '+nationality.charAt(3));

        // //Q6
        // var firstName = prompt('Enter the first name:');
        // var lastName = prompt('Enter the last name:');
        // var fullName = firstName.concat(lastName);
        // document.write('Welcome! '+fullName);

        // //Q7
        // var cityName = 'Hyderabad';
        // document.write('City: '+cityName);
        // document.write('<br>');
        // var newCityName = cityName.replace('Hyder' , 'Islam');
        // document.write('After Replacement: '+newCityName);

        // //Q8
        // var message = 'Ali and Sami are best friends. They play cricket and football together.';
        // var afterReplacement = message.replaceAll('and', '&');
        // document.write(afterReplacement);

        // //Q9
        // var value = '472';
        // document.write('Value: '+value);
        // document.write('<br>');
        // document.write('Type: '+typeof(value));
        // document.write('<br>');
        // document.write('Value :'+(value));
        // document.write('<br>');
        // document.write('Type: '+typeof Number(value));

        // //Q10
        // var userInput = prompt('Enter the word to convert into UpperCase: ');
        // document.write('User input: '+userInput)
        // document.write('<br>')
        // var uppercase = userInput.toUpperCase();
        // document.write('Upper case: '+uppercase);

        // //Q11
        // var userInput = prompt('Enter the word to convert into UpperCase: ');
        // document.write('User input: '+userInput)
        // document.write('<br>');
        // var uppercase = userInput.charAt(0).toUpperCase() + userInput.substr(1).toLowerCase();
        // document.write('Upper case: '+uppercase);

        // //Q12
        // var num = 35.36;
        // document.write('<br>');
        // document.write('Number: '+num);
        // document.write('<br>');
        // var str = num.toString().replace('.',''); 
        // document.write('String is: '+str);

        // //Q13
        // var userName = prompt('Enter thr user name to continue: ');
        // var specialSymbols = ['@' , '.' , ',' , '!'];
        // for(var i=0;i<=specialSymbols.length; i++)
        // {
        //     if(userName.includes(specialSymbols[i])){
        //          document.write('Enter a valid name: ');
        //     }
        //     else{
        //          document.write('Thank you for visiting: '+userName);
        //     }
        // }

        // //Q14
        // var items = ['cake','apple pie','cookie', 'chips','patties'];
        // var inputFromUser = prompt('Enter the item to search: ');
        // var lowerCase = inputFromUser.toLowerCase();
        // var index = items.indexOf(lowerCase); 
        // if (index == -1) {
        //     document.write('We are Sorry. ' + lowerCase + ' is not available in our bakery:');
        // }
        // else {
        //     document.write(lowerCase + ' is available at index ' + index + ' in our bakery.');
        // }

        //Q15
        // var enterPassword = prompt('Enter the password: ');
        // if(enterPassword[0] <= 48 || enterPassword[0] >= 56){
        //         document.write('Password cant be start from numbers:');
        //         document.write('<br>');
        //         document.write('Please enter a valid password:');
        // }
        // else if(enterPassword.length <=6)
        // {
        //         document.write('Password must be greater than or equal to 6');
        // }
        // else{
        //         document.write('Your\'s enter password is correct: ');       
        // }

        //Q16
        // var uniName = 'University of Karachi';
        // var newArray = uniName.split('');
        // for (var i = 0; i < newArray.length; i++) {
        //     document.write(newArray[i] + "<br>");
        //   }

        //Q17
        // var user = prompt('Enter the word: ');
        // document.write('User Input: '+user);
        // document.write('<br>');
        // document.write('Last character of Input: '+user[user.length-1]);

        //Q18
        var count = 0;
        var string = 'The quick brown fox jumps over the lazy dog';
        var matchValue = 'the'
        var newString = string.toLowerCase();
        var newArr = newString.split(" ");
        for (let i = 0; i < newArr.length; i++) {
                if (newArr[i] === matchValue) {
                    count += 1;
                }
            }
            document.write('The quick brown fox jumps over the lazy dog')
            document.write('<br>');
            document.write('There are '+count+ ' occurence(s) of word '+matchValue);

      

