<?php>
 $connect=mysqul_connect("W2k2-cscidb.academia.sjfc.edu", "sdhopcia", "idreamID2961!"; 
if (!connect) {
	die("Conection Failed:" mysqul_error());
}
{ 
	mysql_select_db(“W2k2-cscidb.academia.sjfc.edu”, $connect);
}

$Event_info = “INSERT INTO Events (Event Name, Organization, Date, Time, Location) VALUES ('$_POST[Ename]', '$_POST[organ]', "$_POST[date]", "$_POST[time]", "$_POST[locat]")”; 

if (!mysql_query($Event_info, $connect)) { die('Error: ' . mysql_error()); }

echo "The event has been added to the database.";

mysql_close($connect);?>


<?php>



	