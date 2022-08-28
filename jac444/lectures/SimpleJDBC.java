import java.sql.*;

public class SimpleJDBC {
	public static void main(String[] args) 
			throws SQLException, ClassNotFoundException {
		// load the JDBC Driver
		Class.forName("com.mysql.jdbc.Driver");
		System.out.println("Driver loaded");
		
		// Connect to a database
		Connection conn = DriverManager.getConnection
			("jdbc:mysql://zenit.senecac.on.ca/jac444_142a41", "jac444_142a41", "jkEK2283");
			 // syntax: "jdbc:mysql://hostname/databasename", username, password
		System.out.println("Database Connected");
		
		// Create a statement
		Statement stmt = conn.createStatement();
		
		// Execute a statement
		ResultSet resultSet = stmt.executeQuery
			("SELECT Code, Name, Region FROM Country WHERE Code LIKE 'C%'");
		
		// Iterate through the result and print out the data
		while (resultSet.next())
			System.out.println(resultSet.getString(1) + "\t" +
			  resultSet.getString(2) + "\t" + resultSet.getString(3));
		
		// Close the connection
		conn.close();
	}
}
