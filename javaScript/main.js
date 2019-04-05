function calc(){
   var name = document.getElementsByTagName('input').length;
   let bill = parseFloat(document.getElementById("bill").value);
   let totalbill = 0;
   let billperpoint = 0;
   
   if (name === 4) {
      var name1 = document.getElementById("name1").value;
      var point1 = document.getElementById("point1").value;
      let totalpoints = point1;
      billperpoint = bill / totalpoints;
      document.getElementById("totalpoints").value = totalpoints;
      totalbill = billperpoint * totalpoints;
      document.getElementById("modname1").innerHTML = name1;
      document.getElementById("modpoint1").innerHTML = point1;
      document.getElementById("modtotalbill1").innerHTML = "GHC" + totalbill.toFixed(2);
      console.log(billperpoint.toFixed(2));
      
   } else if (name === 6) {
      //get values from elements
      var name1 = document.getElementById("name1").value;
      var point1 = parseFloat(document.getElementById("point1").value);
      var name2 = document.getElementById("name2").value;
      var point2 = parseFloat(document.getElementById("point2").value);
      //calculate total points
      let totalpoints = point1 + point2;
      //calc bill per point
      billperpoint = bill / totalpoints;
      //display total points in textbox
      document.getElementById("totalpoints").value = totalpoints;
      //calc bills for each tenant
      totalbill1 = billperpoint * point1;
      totalbill2 = billperpoint * point2;
      //display bills in table
      document.getElementById("modname1").innerHTML = name1;
      document.getElementById("modpoint1").innerHTML = point1;
      document.getElementById("modtotalbill1").innerHTML = "GHC" + totalbill1.toFixed(2);
      document.getElementById("modname2").innerHTML = name2;
      document.getElementById("modpoint2").innerHTML = point2;
      document.getElementById("modtotalbill2").innerHTML = "GHC" + totalbill2.toFixed(2);
      console.log(billperpoint.toFixed(2));
   } else if (name === 8) {
      //get values from elements
      var name1 = document.getElementById("name1").value;
      var point1 = parseFloat(document.getElementById("point1").value);
      var name2 = document.getElementById("name2").value;
      var point2 = parseFloat(document.getElementById("point2").value);
      var name3 = document.getElementById("name3").value;
      var point3 = parseFloat(document.getElementById("point3").value);
      //calculate total points
      let totalpoints = point1 + point2 + point3;
      //calc bill per point
      billperpoint = bill / totalpoints;
      //display total points in textbox
      document.getElementById("totalpoints").value = totalpoints;
      //calc bills for each tenant
      totalbill1 = billperpoint * point1;
      totalbill2 = billperpoint * point2;
      totalbill3 = billperpoint * point3;
      //display bills in table
      document.getElementById("modname1").innerHTML = name1;
      document.getElementById("modpoint1").innerHTML = point1;
      document.getElementById("modtotalbill1").innerHTML = "GHC" + totalbill1.toFixed(2);
      document.getElementById("modname2").innerHTML = name2;
      document.getElementById("modpoint2").innerHTML = point2;
      document.getElementById("modtotalbill2").innerHTML = "GHC" + totalbill2.toFixed(2);
      document.getElementById("modname3").innerHTML = name3;
      document.getElementById("modpoint3").innerHTML = point3;
      document.getElementById("modtotalbill3").innerHTML = "GHC" + totalbill3.toFixed(2);
      console.log(billperpoint.toFixed(2));
   } else if (name === 9) {
      alert("use id 4")
   } else if (name === 11) {
      alert("use id 5")
   } else if (name === 13) {
      alert("use id 6")
   } else if (name === 15) {
      alert("use id 7")
   } else if (name === 17) {
      alert("use id 8")
   } else if (name === 19) {
      alert("use id 9")
   } else if (name === 21) {
      alert("use id 10")
   } 

}