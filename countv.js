var Count_Vowels= (S) => 
{
  let vowel_list = 'aeiouAEIOU';
  let count = 0;
  
  for(let i = 0; i < S.length ; i++)
  {
    if (vowel_list.indexOf(S[i]) !== -1)
    {
      count ++;
    }
  
  }
  return count;
};