var par = 3, score = 0;
let nickname = '';
if (score <= par - 2 ) {
    nickname = 'Eagle';
}
if (score == par - 1 )
{
    nickname = 'Birdie';
}
if (score == par )
{
    nickname = 'Par';
}
if (score == par + 1 )
{
    nickname = 'Bogey';
}
if (score == par + 2 )
{
    nickname = 'Double Bogey';
}
if (score >= par + 3 )
{
    nickname = 'Not sure';
}

console.log(nickname);