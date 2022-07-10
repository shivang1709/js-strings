const countCharacters = (S) => 
{
  let res = [0,0];
  for(let i = 0;i<S.length;i++)
  {
    if(S[i] == "A")
    {
      res[0]++;
    }
    else if (S[i] == "D")
    {
      res[1]++;
    }
  }
  return res;
};