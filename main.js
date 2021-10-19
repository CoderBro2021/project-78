var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","file:///C:/Users/TEMP/Desktop/Visual%20Studio/Project%2078/Raghav.jpg","file:///C:/Users/TEMP/Desktop/Visual%20Studio/Project%2078/Mom.jpg", "file:///C:/Users/TEMP/Desktop/Visual%20Studio/Project%2078/Garvish.jpg","file:///C:/Users/TEMP/Desktop/Visual%20Studio/Project%2078/Papa.jpg" , "file:///C:/Users/TEMP/Desktop/Visual%20Studio/Project%2078/Niraj.jpg", "file:///C:/Users/TEMP/Desktop/Visual%20Studio/Project%2078/Chacha.jpg"];
var names = ["Fmaily Book", "Raghav Kumar Gupta","Sunita Gupta", "Garvish Kumar Gupta", "Pawanbir.gupta", "Dharambir Gupta", "Niraj Gupta"];
var i = 0;
function update();
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
        }
        if(i=0;i<images.length;)
        { 
         i++
        }
    var updatedImage = images[i];
    if(i >names.length )
      {
          i = 0;
        }
        if(i=0;i<names.length;)
        { 
         i++
        }
    var updatedName = names[i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
