function isAnagram(str1, str2) {
    const alphabetRegex = /^[a-zA-Z]$/;
  
    // Remove non-alphabetic characters and convert to lowercase
    const cleanString = (str) => str.toLowerCase();
  
    str1 = cleanString(str1);
    str2 = cleanString(str2);
  
    // Sort the strings
    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');
    if(str1.length==str2.length)
    {
        for(let i=0;i<str1.length;i++)
        {
            if(str1[i]==str2[i])
            {
                continue;
            }
            else 
            {
                return false;
            }
        }
    }
    else 
    {
        return false;
    }
    return true;
  }
 
  module.exports = isAnagram;
  