<?php>
 $connect=mysqul_connect("W2k2-cscidb.academia.sjfc.edu", "sdhopcia", "idreamID2961!"; 
if (!connect) {
	die("Conection Failed:" mysqul_error());
}
{ 
	mysql_select_db(“W2k2-cscidb.academia.sjfc.edu”, $connect);
}

$Login_info = “INSERT INTO Login (Username, Password) VALUES ('$_POST[uname]', '$_POST[psw]')”; 

if (!mysql_query($Login_info, $connect)) { die('Error: ' . mysql_error()); }

echo "The event has been added to the database.";

mysql_close($connect);?>


<?php>