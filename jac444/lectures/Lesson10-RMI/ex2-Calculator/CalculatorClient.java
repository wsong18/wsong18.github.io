import java.rmi.Naming;
import java.rmi.RemoteException;
import java.net.MalformedURLException;
import java.rmi.NotBoundException;

public class CalculatorClient {

  public static void main(String[] args) {
    try {
		// The static method lookup returns a reference
		// to an object which is a stub
      Calculator c = (Calculator)
        Naming.lookup("rmi://localhost:5566/CalculatorService");


	  System.out.println( "Addition: 4 + 5 = " + c.add(4, 5) );
      System.out.println( "Subtraction : 4 - 3 = " +  c.sub(4, 3) );
      
      System.out.println( "Multiplication : 3 * 6 = " +  c.mul(3, 6) );
      System.out.println( "Division: 9 / 3 = " +  c.div(9, 3) );
    }
    catch (Exception e) {
	      System.out.println("###Caught Exception: " + e.getMessage());
    }
  } // end main()
} // end class

