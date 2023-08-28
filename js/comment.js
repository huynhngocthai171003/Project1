function showComments(){
    var uwrite = document.getElementById("writecomment").value;
    var uname = document.getElementById("writename").value;
    // alert("aaa" + uwrite)

    // document.getElementById("showcomment1").innerHTML= + uname;

    document.getElementById("showcomment").innerHTML = "<h4 style='font-weight: bold; '>" + uname+ "</h4>"+ "\n" + "<p style='color: white;' id='showcomment'>" + uwrite +"</p>";
    return false;
}