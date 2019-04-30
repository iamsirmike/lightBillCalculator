function calc() {
	var name = document.getElementsByTagName('input').length;
	let bill = parseFloat(document.getElementById('bill').value);
	let totalbill = 0;
	let billperpoint = 0;

	if (name === 3) {
		var name1 = document.getElementById('name1').value;
		var point1 = document.getElementById('point1').value;
		let totalpoints = point1;
		billperpoint = bill / totalpoints;
		totalbill = billperpoint * totalpoints;
		//display results in respective fields
		document.getElementById('modname1').innerHTML = name1;
		document.getElementById('modpoint1').innerHTML = point1;
		document.getElementById('modtotalbill1').innerHTML = 'GHC' + totalbill.toFixed(2);
		document.getElementById('totalpoints').innerHTML = 'Total Points: ' + totalpoints;
		document.getElementById('billperpoint').innerHTML = 'Bill Per Point: ' + billperpoint.toFixed(2);
		document.getElementById('modbill').innerHTML = 'Bill: ' + bill.toFixed(2);
	} else if (name === 5) {
		//get values from elements
		var name1 = document.getElementById('name1').value;
		var point1 = parseFloat(document.getElementById('point1').value);
		var name2 = document.getElementById('name2').value;
		var point2 = parseFloat(document.getElementById('point2').value);
		//calculate total points
		let totalpoints = point1 + point2;
		//calc bill per point
		billperpoint = bill / totalpoints;
		//display total points in textbox
		document.getElementById('totalpoints').value = totalpoints;
		//calc bills for each tenant
		totalbill1 = billperpoint * point1;
		totalbill2 = billperpoint * point2;
		//display bills in table
		document.getElementById('modname1').innerHTML = name1;
		document.getElementById('modpoint1').innerHTML = point1;
		document.getElementById('modtotalbill1').innerHTML = 'GHC' + totalbill1.toFixed(2);
		document.getElementById('modname2').innerHTML = name2;
		document.getElementById('modpoint2').innerHTML = point2;
		document.getElementById('modtotalbill2').innerHTML = 'GHC' + totalbill2.toFixed(2);
		document.getElementById('totalpoints').innerHTML = 'Total Points: ' + totalpoints;
		document.getElementById('billperpoint').innerHTML = 'Bill Per Point: ' + billperpoint.toFixed(2);
		document.getElementById('modbill').innerHTML = 'Bill: ' + bill.toFixed(2);
	} else if (name === 7) {
		//get values from elements
		var name1 = document.getElementById('name1').value;
		var point1 = parseFloat(document.getElementById('point1').value);
		var name2 = document.getElementById('name2').value;
		var point2 = parseFloat(document.getElementById('point2').value);
		var name3 = document.getElementById('name3').value;
		var point3 = parseFloat(document.getElementById('point3').value);
		//calculate total points
		let totalpoints = point1 + point2 + point3;
		//calc bill per point
		billperpoint = bill / totalpoints;
		//display total points in textbox
		document.getElementById('totalpoints').value = totalpoints;
		//calc bills for each tenant
		totalbill1 = billperpoint * point1;
		totalbill2 = billperpoint * point2;
		totalbill3 = billperpoint * point3;
		//display bills in table
		document.getElementById('modname1').innerHTML = name1;
		document.getElementById('modpoint1').innerHTML = point1;
		document.getElementById('modtotalbill1').innerHTML = 'GHC' + totalbill1.toFixed(2);
		document.getElementById('modname2').innerHTML = name2;
		document.getElementById('modpoint2').innerHTML = point2;
		document.getElementById('modtotalbill2').innerHTML = 'GHC' + totalbill2.toFixed(2);
		document.getElementById('modname3').innerHTML = name3;
		document.getElementById('modpoint3').innerHTML = point3;
		document.getElementById('modtotalbill3').innerHTML = 'GHC' + totalbill3.toFixed(2);
		document.getElementById('totalpoints').innerHTML = 'Total Points: ' + totalpoints;
		document.getElementById('billperpoint').innerHTML = 'Bill Per Point: ' + billperpoint.toFixed(2);
		document.getElementById('modbill').innerHTML = 'Bill: ' + bill.toFixed(2);
	} else if (name === 9) {
		//get values from elements
		var name1 = document.getElementById('name1').value;
		var point1 = parseFloat(document.getElementById('point1').value);
		var name2 = document.getElementById('name2').value;
		var point2 = parseFloat(document.getElementById('point2').value);
		var name3 = document.getElementById('name3').value;
		var point3 = parseFloat(document.getElementById('point3').value);
		var name4 = document.getElementById('name4').value;
		var point4 = parseFloat(document.getElementById('point4').value);
		//calculate total points
		let totalpoints = point1 + point2 + point3 + point4;
		//calc bill per point
		billperpoint = bill / totalpoints;
		//display total points in textbox
		document.getElementById('totalpoints').value = totalpoints;
		//calc bills for each tenant
		totalbill1 = billperpoint * point1;
		totalbill2 = billperpoint * point2;
		totalbill3 = billperpoint * point3;
		totalbill4 = billperpoint * point4;
		//display bills in table
		document.getElementById('modname1').innerHTML = name1;
		document.getElementById('modpoint1').innerHTML = point1;
		document.getElementById('modtotalbill1').innerHTML = 'GHC' + totalbill1.toFixed(2);
		document.getElementById('modname2').innerHTML = name2;
		document.getElementById('modpoint2').innerHTML = point2;
		document.getElementById('modtotalbill2').innerHTML = 'GHC' + totalbill2.toFixed(2);
		document.getElementById('modname3').innerHTML = name3;
		document.getElementById('modpoint3').innerHTML = point3;
		document.getElementById('modtotalbill3').innerHTML = 'GHC' + totalbill3.toFixed(2);
		document.getElementById('modname4').innerHTML = name4;
		document.getElementById('modpoint4').innerHTML = point4;
		document.getElementById('modtotalbill4').innerHTML = 'GHC' + totalbill4.toFixed(2);
		document.getElementById('totalpoints').innerHTML = 'Total Points: ' + totalpoints;
		document.getElementById('billperpoint').innerHTML = 'Bill Per Point: ' + billperpoint.toFixed(2);
		document.getElementById('modbill').innerHTML = 'Bill: ' + bill.toFixed(2);
	} else if (name === 11) {
		//get values from elements
		var name1 = document.getElementById('name1').value;
		var point1 = parseFloat(document.getElementById('point1').value);
		var name2 = document.getElementById('name2').value;
		var point2 = parseFloat(document.getElementById('point2').value);
		var name3 = document.getElementById('name3').value;
		var point3 = parseFloat(document.getElementById('point3').value);
		var name4 = document.getElementById('name4').value;
		var point4 = parseFloat(document.getElementById('point4').value);
		var name5 = document.getElementById('name5').value;
		var point5 = parseFloat(document.getElementById('point5').value);
		//calculate total points
		let totalpoints = point1 + point2 + point3 + point4 + point5;
		//calc bill per point
		billperpoint = bill / totalpoints;
		//display total points in textbox
		document.getElementById('totalpoints').value = totalpoints;
		//calc bills for each tenant
		totalbill1 = billperpoint * point1;
		totalbill2 = billperpoint * point2;
		totalbill3 = billperpoint * point3;
		totalbill4 = billperpoint * point4;
		totalbill5 = billperpoint * point5;
		//display bills in table
		document.getElementById('modname1').innerHTML = name1;
		document.getElementById('modpoint1').innerHTML = point1;
		document.getElementById('modtotalbill1').innerHTML = 'GHC' + totalbill1.toFixed(2);
		document.getElementById('modname2').innerHTML = name2;
		document.getElementById('modpoint2').innerHTML = point2;
		document.getElementById('modtotalbill2').innerHTML = 'GHC' + totalbill2.toFixed(2);
		document.getElementById('modname3').innerHTML = name3;
		document.getElementById('modpoint3').innerHTML = point3;
		document.getElementById('modtotalbill3').innerHTML = 'GHC' + totalbill3.toFixed(2);
		document.getElementById('modname4').innerHTML = name4;
		document.getElementById('modpoint4').innerHTML = point4;
		document.getElementById('modtotalbill4').innerHTML = 'GHC' + totalbill4.toFixed(2);
		document.getElementById('modname5').innerHTML = name5;
		document.getElementById('modpoint5').innerHTML = point5;
		document.getElementById('modtotalbill5').innerHTML = 'GHC' + totalbill5.toFixed(2);
		document.getElementById('totalpoints').innerHTML = 'Total Points: ' + totalpoints;
		document.getElementById('billperpoint').innerHTML = 'Bill Per Point: ' + billperpoint.toFixed(2);
		document.getElementById('modbill').innerHTML = 'Bill: ' + bill.toFixed(2);
	} else if (name === 13) {
		//get values from elements
		var name1 = document.getElementById('name1').value;
		var point1 = parseFloat(document.getElementById('point1').value);
		var name2 = document.getElementById('name2').value;
		var point2 = parseFloat(document.getElementById('point2').value);
		var name3 = document.getElementById('name3').value;
		var point3 = parseFloat(document.getElementById('point3').value);
		var name4 = document.getElementById('name4').value;
		var point4 = parseFloat(document.getElementById('point4').value);
		var name5 = document.getElementById('name5').value;
		var point5 = parseFloat(document.getElementById('point5').value);
		var name6 = document.getElementById('name6').value;
		var point6 = parseFloat(document.getElementById('point6').value);
		//calculate total points
		let totalpoints = point1 + point2 + point3 + point4 + point5 + point6;
		//calc bill per point
		billperpoint = bill / totalpoints;
		//display total points in textbox
		document.getElementById('totalpoints').value = totalpoints;
		//calc bills for each tenant
		totalbill1 = billperpoint * point1;
		totalbill2 = billperpoint * point2;
		totalbill3 = billperpoint * point3;
		totalbill4 = billperpoint * point4;
		totalbill5 = billperpoint * point5;
		totalbill6 = billperpoint * point6;
		//display bills in table
		document.getElementById('modname1').innerHTML = name1;
		document.getElementById('modpoint1').innerHTML = point1;
		document.getElementById('modtotalbill1').innerHTML = 'GHC' + totalbill1.toFixed(2);
		document.getElementById('modname2').innerHTML = name2;
		document.getElementById('modpoint2').innerHTML = point2;
		document.getElementById('modtotalbill2').innerHTML = 'GHC' + totalbill2.toFixed(2);
		document.getElementById('modname3').innerHTML = name3;
		document.getElementById('modpoint3').innerHTML = point3;
		document.getElementById('modtotalbill3').innerHTML = 'GHC' + totalbill3.toFixed(2);
		document.getElementById('modname4').innerHTML = name4;
		document.getElementById('modpoint4').innerHTML = point4;
		document.getElementById('modtotalbill4').innerHTML = 'GHC' + totalbill4.toFixed(2);
		document.getElementById('modname5').innerHTML = name5;
		document.getElementById('modpoint5').innerHTML = point5;
		document.getElementById('modtotalbill5').innerHTML = 'GHC' + totalbill5.toFixed(2);
		document.getElementById('modname6').innerHTML = name6;
		document.getElementById('modpoint6').innerHTML = point6;
		document.getElementById('modtotalbill6').innerHTML = 'GHC' + totalbill6.toFixed(2);
		document.getElementById('totalpoints').innerHTML = 'Total Points: ' + totalpoints;
		document.getElementById('billperpoint').innerHTML = 'Bill Per Point: ' + billperpoint.toFixed(2);
		document.getElementById('modbill').innerHTML = 'Bill: ' + bill.toFixed(2);
	} else if (name === 15) {
		//get values from elements
		var name1 = document.getElementById('name1').value;
		var point1 = parseFloat(document.getElementById('point1').value);
		var name2 = document.getElementById('name2').value;
		var point2 = parseFloat(document.getElementById('point2').value);
		var name3 = document.getElementById('name3').value;
		var point3 = parseFloat(document.getElementById('point3').value);
		var name4 = document.getElementById('name4').value;
		var point4 = parseFloat(document.getElementById('point4').value);
		var name5 = document.getElementById('name5').value;
		var point5 = parseFloat(document.getElementById('point5').value);
		var name6 = document.getElementById('name6').value;
		var point6 = parseFloat(document.getElementById('point6').value);
		var name7 = document.getElementById('name7').value;
		var point7 = parseFloat(document.getElementById('point7').value);
		//calculate total points
		let totalpoints = point1 + point2 + point3 + point4 + point5 + point6 + point7;
		//calc bill per point
		billperpoint = bill / totalpoints;
		//display total points in textbox
		document.getElementById('totalpoints').value = totalpoints;
		//calc bills for each tenant
		totalbill1 = billperpoint * point1;
		totalbill2 = billperpoint * point2;
		totalbill3 = billperpoint * point3;
		totalbill4 = billperpoint * point4;
		totalbill5 = billperpoint * point5;
		totalbill6 = billperpoint * point6;
		totalbill7 = billperpoint * point7;
		//display bills in table
		document.getElementById('modname1').innerHTML = name1;
		document.getElementById('modpoint1').innerHTML = point1;
		document.getElementById('modtotalbill1').innerHTML = 'GHC' + totalbill1.toFixed(2);
		document.getElementById('modname2').innerHTML = name2;
		document.getElementById('modpoint2').innerHTML = point2;
		document.getElementById('modtotalbill2').innerHTML = 'GHC' + totalbill2.toFixed(2);
		document.getElementById('modname3').innerHTML = name3;
		document.getElementById('modpoint3').innerHTML = point3;
		document.getElementById('modtotalbill3').innerHTML = 'GHC' + totalbill3.toFixed(2);
		document.getElementById('modname4').innerHTML = name4;
		document.getElementById('modpoint4').innerHTML = point4;
		document.getElementById('modtotalbill4').innerHTML = 'GHC' + totalbill4.toFixed(2);
		document.getElementById('modname5').innerHTML = name5;
		document.getElementById('modpoint5').innerHTML = point5;
		document.getElementById('modtotalbill5').innerHTML = 'GHC' + totalbill5.toFixed(2);
		document.getElementById('modname6').innerHTML = name6;
		document.getElementById('modpoint6').innerHTML = point6;
		document.getElementById('modtotalbill6').innerHTML = 'GHC' + totalbill6.toFixed(2);
		document.getElementById('modname7').innerHTML = name7;
		document.getElementById('modpoint7').innerHTML = point7;
		document.getElementById('modtotalbill7').innerHTML = 'GHC' + totalbill7.toFixed(2);
		document.getElementById('totalpoints').innerHTML = 'Total Points: ' + totalpoints;
		document.getElementById('billperpoint').innerHTML = 'Bill Per Point: ' + billperpoint.toFixed(2);
		document.getElementById('modbill').innerHTML = 'Bill: ' + bill.toFixed(2);
	} else if (name === 17) {
		//get values from elements
		var name1 = document.getElementById('name1').value;
		var point1 = parseFloat(document.getElementById('point1').value);
		var name2 = document.getElementById('name2').value;
		var point2 = parseFloat(document.getElementById('point2').value);
		var name3 = document.getElementById('name3').value;
		var point3 = parseFloat(document.getElementById('point3').value);
		var name4 = document.getElementById('name4').value;
		var point4 = parseFloat(document.getElementById('point4').value);
		var name5 = document.getElementById('name5').value;
		var point5 = parseFloat(document.getElementById('point5').value);
		var name6 = document.getElementById('name6').value;
		var point6 = parseFloat(document.getElementById('point6').value);
		var name7 = document.getElementById('name7').value;
		var point7 = parseFloat(document.getElementById('point7').value);
		var name8 = document.getElementById('name8').value;
		var point8 = parseFloat(document.getElementById('point8').value);
		//calculate total points
		let totalpoints = point1 + point2 + point3 + point4 + point5 + point6 + point7 + point8;
		//calc bill per point
		billperpoint = bill / totalpoints;
		//display total points in textbox
		document.getElementById('totalpoints').value = totalpoints;
		//calc bills for each tenant
		totalbill1 = billperpoint * point1;
		totalbill2 = billperpoint * point2;
		totalbill3 = billperpoint * point3;
		totalbill4 = billperpoint * point4;
		totalbill5 = billperpoint * point5;
		totalbill6 = billperpoint * point6;
		totalbill7 = billperpoint * point7;
		totalbill8 = billperpoint * point8;
		//display bills in table
		document.getElementById('modname1').innerHTML = name1;
		document.getElementById('modpoint1').innerHTML = point1;
		document.getElementById('modtotalbill1').innerHTML = 'GHC' + totalbill1.toFixed(2);
		document.getElementById('modname2').innerHTML = name2;
		document.getElementById('modpoint2').innerHTML = point2;
		document.getElementById('modtotalbill2').innerHTML = 'GHC' + totalbill2.toFixed(2);
		document.getElementById('modname3').innerHTML = name3;
		document.getElementById('modpoint3').innerHTML = point3;
		document.getElementById('modtotalbill3').innerHTML = 'GHC' + totalbill3.toFixed(2);
		document.getElementById('modname4').innerHTML = name4;
		document.getElementById('modpoint4').innerHTML = point4;
		document.getElementById('modtotalbill4').innerHTML = 'GHC' + totalbill4.toFixed(2);
		document.getElementById('modname5').innerHTML = name5;
		document.getElementById('modpoint5').innerHTML = point5;
		document.getElementById('modtotalbill5').innerHTML = 'GHC' + totalbill5.toFixed(2);
		document.getElementById('modname6').innerHTML = name6;
		document.getElementById('modpoint6').innerHTML = point6;
		document.getElementById('modtotalbill6').innerHTML = 'GHC' + totalbill6.toFixed(2);
		document.getElementById('modname7').innerHTML = name7;
		document.getElementById('modpoint7').innerHTML = point7;
		document.getElementById('modtotalbill7').innerHTML = 'GHC' + totalbill7.toFixed(2);
		document.getElementById('modname8').innerHTML = name8;
		document.getElementById('modpoint8').innerHTML = point8;
		document.getElementById('modtotalbill8').innerHTML = 'GHC' + totalbill8.toFixed(2);
		document.getElementById('totalpoints').innerHTML = 'Total Points: ' + totalpoints;
		document.getElementById('billperpoint').innerHTML = 'Bill Per Point: ' + billperpoint.toFixed(2);
		document.getElementById('modbill').innerHTML = 'Bill: ' + bill.toFixed(2);
	} else if (name === 19) {
		//get values from elements
		var name1 = document.getElementById('name1').value;
		var point1 = parseFloat(document.getElementById('point1').value);
		var name2 = document.getElementById('name2').value;
		var point2 = parseFloat(document.getElementById('point2').value);
		var name3 = document.getElementById('name3').value;
		var point3 = parseFloat(document.getElementById('point3').value);
		var name4 = document.getElementById('name4').value;
		var point4 = parseFloat(document.getElementById('point4').value);
		var name5 = document.getElementById('name5').value;
		var point5 = parseFloat(document.getElementById('point5').value);
		var name6 = document.getElementById('name6').value;
		var point6 = parseFloat(document.getElementById('point6').value);
		var name7 = document.getElementById('name7').value;
		var point7 = parseFloat(document.getElementById('point7').value);
		var name8 = document.getElementById('name8').value;
		var point8 = parseFloat(document.getElementById('point8').value);
		var name9 = document.getElementById('name9').value;
		var point9 = parseFloat(document.getElementById('point9').value);
		//calculate total points
		let totalpoints = point1 + point2 + point3 + point4 + point5 + point6 + point7 + point8 + point9;
		//calc bill per point
		billperpoint = bill / totalpoints;
		//display total points in textbox
		document.getElementById('totalpoints').value = totalpoints;
		//calc bills for each tenant
		totalbill1 = billperpoint * point1;
		totalbill2 = billperpoint * point2;
		totalbill3 = billperpoint * point3;
		totalbill4 = billperpoint * point4;
		totalbill5 = billperpoint * point5;
		totalbill6 = billperpoint * point6;
		totalbill7 = billperpoint * point7;
		totalbill8 = billperpoint * point8;
		totalbill9 = billperpoint * point9;
		//display bills in table
		document.getElementById('modname1').innerHTML = name1;
		document.getElementById('modpoint1').innerHTML = point1;
		document.getElementById('modtotalbill1').innerHTML = 'GHC' + totalbill1.toFixed(2);
		document.getElementById('modname2').innerHTML = name2;
		document.getElementById('modpoint2').innerHTML = point2;
		document.getElementById('modtotalbill2').innerHTML = 'GHC' + totalbill2.toFixed(2);
		document.getElementById('modname3').innerHTML = name3;
		document.getElementById('modpoint3').innerHTML = point3;
		document.getElementById('modtotalbill3').innerHTML = 'GHC' + totalbill3.toFixed(2);
		document.getElementById('modname4').innerHTML = name4;
		document.getElementById('modpoint4').innerHTML = point4;
		document.getElementById('modtotalbill4').innerHTML = 'GHC' + totalbill4.toFixed(2);
		document.getElementById('modname5').innerHTML = name5;
		document.getElementById('modpoint5').innerHTML = point5;
		document.getElementById('modtotalbill5').innerHTML = 'GHC' + totalbill5.toFixed(2);
		document.getElementById('modname6').innerHTML = name6;
		document.getElementById('modpoint6').innerHTML = point6;
		document.getElementById('modtotalbill6').innerHTML = 'GHC' + totalbill6.toFixed(2);
		document.getElementById('modname7').innerHTML = name7;
		document.getElementById('modpoint7').innerHTML = point7;
		document.getElementById('modtotalbill7').innerHTML = 'GHC' + totalbill7.toFixed(2);
		document.getElementById('modname8').innerHTML = name8;
		document.getElementById('modpoint8').innerHTML = point8;
		document.getElementById('modtotalbill8').innerHTML = 'GHC' + totalbill8.toFixed(2);
		document.getElementById('modname9').innerHTML = name9;
		document.getElementById('modpoint9').innerHTML = point9;
		document.getElementById('modtotalbill9').innerHTML = 'GHC' + totalbill9.toFixed(2);
		document.getElementById('totalpoints').innerHTML = 'Total Points: ' + totalpoints;
		document.getElementById('billperpoint').innerHTML = 'Bill Per Point: ' + billperpoint.toFixed(2);
		document.getElementById('modbill').innerHTML = 'Bill: ' + bill.toFixed(2);
	} else if (name === 21) {
		//get values from elements
		var name1 = document.getElementById('name1').value;
		var point1 = parseFloat(document.getElementById('point1').value);
		var name2 = document.getElementById('name2').value;
		var point2 = parseFloat(document.getElementById('point2').value);
		var name3 = document.getElementById('name3').value;
		var point3 = parseFloat(document.getElementById('point3').value);
		var name4 = document.getElementById('name4').value;
		var point4 = parseFloat(document.getElementById('point4').value);
		var name5 = document.getElementById('name5').value;
		var point5 = parseFloat(document.getElementById('point5').value);
		var name6 = document.getElementById('name6').value;
		var point6 = parseFloat(document.getElementById('point6').value);
		var name7 = document.getElementById('name7').value;
		var point7 = parseFloat(document.getElementById('point7').value);
		var name8 = document.getElementById('name8').value;
		var point8 = parseFloat(document.getElementById('point8').value);
		var name9 = document.getElementById('name9').value;
		var point9 = parseFloat(document.getElementById('point9').value);
		var name10 = document.getElementById('name10').value;
		var point10 = parseFloat(document.getElementById('point10').value);
		//calculate total points
		let totalpoints = point1 + point2 + point3 + point4 + point5 + point6 + point7 + point8 + point9 + point10;
		//calc bill per point
		billperpoint = bill / totalpoints;
		//display total points in textbox
		document.getElementById('totalpoints').value = totalpoints;
		//calc bills for each tenant
		totalbill1 = billperpoint * point1;
		totalbill2 = billperpoint * point2;
		totalbill3 = billperpoint * point3;
		totalbill4 = billperpoint * point4;
		totalbill5 = billperpoint * point5;
		totalbill6 = billperpoint * point6;
		totalbill7 = billperpoint * point7;
		totalbill8 = billperpoint * point8;
		totalbill9 = billperpoint * point9;
		totalbill10 = billperpoint * point10;
		//display bills in table
		document.getElementById('modname1').innerHTML = name1;
		document.getElementById('modpoint1').innerHTML = point1;
		document.getElementById('modtotalbill1').innerHTML = 'GHC' + totalbill1.toFixed(2);
		document.getElementById('modname2').innerHTML = name2;
		document.getElementById('modpoint2').innerHTML = point2;
		document.getElementById('modtotalbill2').innerHTML = 'GHC' + totalbill2.toFixed(2);
		document.getElementById('modname3').innerHTML = name3;
		document.getElementById('modpoint3').innerHTML = point3;
		document.getElementById('modtotalbill3').innerHTML = 'GHC' + totalbill3.toFixed(2);
		document.getElementById('modname4').innerHTML = name4;
		document.getElementById('modpoint4').innerHTML = point4;
		document.getElementById('modtotalbill4').innerHTML = 'GHC' + totalbill4.toFixed(2);
		document.getElementById('modname5').innerHTML = name5;
		document.getElementById('modpoint5').innerHTML = point5;
		document.getElementById('modtotalbill5').innerHTML = 'GHC' + totalbill5.toFixed(2);
		document.getElementById('modname6').innerHTML = name6;
		document.getElementById('modpoint6').innerHTML = point6;
		document.getElementById('modtotalbill6').innerHTML = 'GHC' + totalbill6.toFixed(2);
		document.getElementById('modname7').innerHTML = name7;
		document.getElementById('modpoint7').innerHTML = point7;
		document.getElementById('modtotalbill7').innerHTML = 'GHC' + totalbill7.toFixed(2);
		document.getElementById('modname8').innerHTML = name8;
		document.getElementById('modpoint8').innerHTML = point8;
		document.getElementById('modtotalbill8').innerHTML = 'GHC' + totalbill8.toFixed(2);
		document.getElementById('modname9').innerHTML = name9;
		document.getElementById('modpoint9').innerHTML = point9;
		document.getElementById('modtotalbill9').innerHTML = 'GHC' + totalbill9.toFixed(2);
		document.getElementById('modname10').innerHTML = name10;
		document.getElementById('modpoint10').innerHTML = point10;
		document.getElementById('modtotalbill10').innerHTML = 'GHC' + totalbill10.toFixed(2);
		document.getElementById('totalpoints').innerHTML = 'Total Points: ' + totalpoints;
		document.getElementById('billperpoint').innerHTML = 'Bill Per Point: ' + billperpoint.toFixed(2);
		document.getElementById('modbill').innerHTML = 'Bill: ' + bill.toFixed(2);
	} else{
		alert('This version can only calculate for 10 people');
	}
}
