function con()
{
    let a , op , n , temp="";
    a= Number(document.getElementById("get").value)

    op = document.getElementById("opt").value

    if(op =="f")
    {
        temp="Fahrenheit"
        n=ctof(a)
    }
    else
        {
        temp="Celsius"
        n=ftoc(a)
    }
    document.getElementById("show").innerHTML = temp+" "+n
}


function ftoc(a)
{
    return (a-32)*5/9;
}

function ctof(a)
{
    return (a*1.8)+32; 
}