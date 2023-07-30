//1.loop that prints number from 1 to 5.
var a=1;
for(var i=0;i<=4;i++)
{
    document.write(a);
    document.write("  ");
    a++;
}
document.write("<br>");

//2.loop that prints even numbers from 2 to 10.
var a=2;
for(var i=0;i<=4;i++)
{
    document.write(a);
    document.write("  ");
    a+=2;
}
document.write("<br>");

//3.loop that calculates the sum of numbers from 1 to 10.
var a=0;
for(var i=1;i<=10;i++)
{
    a=a+i;
}
document.write(a);

document.write("<br>");

//4.loop that prints the first five multiples of three.
var a=3;
for(var i=0;i<=4;i++)
{
    document.write(a);
    document.write("  ");
    a+=3;
}

document.write("<br>");

//5.loop that prints each character of a string variable called "message".
var c= "message";
var x= c.length;
for(var i=0;i<x;i++)
{
    document.write(c[i]);
    document.write("  ");
} 
document.write("<br>");

//6.loop that iterates through a array of numbers and prints each number.
var num=[0,1,2,3,4,5];
var l=num.length;
for(var i=0;i<l;i++)
{
    document.write(num[i]);
    document.write("  ");
}

document.write("<br>");

//7.loop that iterates through a array of strings and prints each string.
var str=["apple","orange","banana","mango"];
var l=str.length;
for(var i=0;i<l;i++)
{
    document.write(str[i]+ "-");
    var j=str[i].length;
    document.write(j+"  ");
}

document.write("<br>");

//8.loop that iterates through a array of numbers and appends the squared value of each number to a new array.
var num=[1,2,3,4,5];
var a;
var q=[];
var l=num.length;
for(var i=0;i<l;i++)
{
    a=num[i]*num[i];
    q.push(a);
}
document.write(q);


