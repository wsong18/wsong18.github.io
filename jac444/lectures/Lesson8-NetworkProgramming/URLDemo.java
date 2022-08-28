
// testing:
// java URLDemo
// java URLDemo cs.senecac.on.ca/~pliu
//			    www.DevDaily.com

import java.net.*;
import java.io.*;

public class URLDemo {

	private String hostName;
	private URL	   url;
	private URLConnection urlConnection;


	public URLDemo( String s ) {  hostName = s; }

	public void openURLConnection() {

		try {
				url = new URL( "https://" + hostName );	  // MalformedURLException

				urlConnection = url.openConnection();     // URL class

		}
		catch( MalformedURLException me ) { me.printStackTrace(); }
		catch( IOException ie ) { ie.printStackTrace(); }
	}


	public void readFromURL( boolean save ) {

		try {
				// the default value of the DoInput flag is true

				InputStream istream = urlConnection.getInputStream();

				BufferedReader br = new BufferedReader( new InputStreamReader( istream ) );

				FileWriter pw = null;


				if ( save == true ) {

					pw = new FileWriter( "Save.html" );
				}

				String textline = "";
				boolean exit = false;

				while ( !exit ) {

					textline = br.readLine();

					if ( textline == null )
						exit = true;
					else  {
							System.out.println( textline );

							if ( save == true ) pw.write( textline );  // write to the HTML file
						  }
			    }
			    pw.close();
		}
		catch( IOException ie ) { ie.printStackTrace(); }

		System.out.println( "The above information is downloaded from:\n" +
		                    "host name: " + url.getHost() + "\n" +
		                    "file name: " + url.getFile() );

	}

	public void writeToURL() {	// write to where????

		try {
				// the default value of DoOutput flag is false

                urlConnection.setDoOutput( true );  // set for ouptut

				OutputStream ostream = urlConnection.getOutputStream();

				DataOutputStream objStream = new DataOutputStream( ostream );

				objStream.writeChars( "Seneca@York" );
				//objStream.writeDouble( 3.1416 );
				objStream.flush();
		}
		catch( IOException ie ) { ie.printStackTrace(); }

	}



	public static void main(String[] args) {

			String host = "scs.senecac.on.ca";

			if ( args.length == 1 )
				host = args[0];

			// example 1 - Download file form a web server
			URLDemo demo = new URLDemo( host );
			demo.openURLConnection();		
			demo.readFromURL( true );
			
			// example 2 - write file to a web server
//			URLDemo demo = new URLDemo( "scs.senecac.on.ca/~wei.song/test/testing.txt" );
//			demo.openURLConnection();
//			demo.writeToURL();

			System.out.println( "the end..." );

	}

}