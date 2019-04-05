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
      document.getElementById("test").innerHTML = name1;
      console.log(name1," ", point1, " ", billperpoint," ", totalbill);
   } else if (name === 5) {
      alert("use id 2")
   } else if (name === 7) {
      alert("use id 3")
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