var Palin_Check = (str) =>
{
  let N = str.length;
  for(let i = 0;i<N/2;i++)
  {
    if(str[i] !== str[N-1-i])
    {
      return ("False");
    }
  }
  return("True");
};