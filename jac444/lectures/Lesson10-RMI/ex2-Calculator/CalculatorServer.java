import java.rmi.Naming;
import java.rmi.*;
import java.net.*;

public class CalculatorServer {

   public CalculatorServer() {
     try {
       Calculator c = new CalculatorImpl();
       Naming.rebind("rmi://localhost:5566/CalculatorService", c);
       System.out.println("Registration with the RMI Registry,"+
       						"\nunder the name CalculatorService completed");
     } catch (RemoteException e) {
       System.out.println("Trouble: " + e);
     }
     catch (MalformedURLException e) {
	        System.out.println("Trouble: " + e);
     }
   }

   public static void main(String args[]) {
     new CalculatorServer();
   }
}

