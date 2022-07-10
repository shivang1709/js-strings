var Game_Winner = (S) => 
{
  let c1 = 0,c2 = 0;
  
  for (let i = 0;i<S.length;i++)
  {
    if(S[i] == "A")
    {
      c1++;
    }
    else
    {
      c2++;
    }
  }
  if(c1>c2)
  {
    return "Aditya";
  }
  else if(c1<c2)
  {
    return "Danish";
  }
  else{
    return "Draw";
  }
}