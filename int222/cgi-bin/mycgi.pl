#!/usr/bin/perl -w

#=========================================================================
# Copyright 1999-2001 Idocs Guide to HTML, http://www.idocs.com/
# You may distribute this program freely, but keep 
# this notice in place.
#=========================================================================

#=========================================================================
# modules
#
use strict;
use CGI;
use CGI::Carp 'fatalsToBrowser', 'croak';

# use lib 'pt/PtLib';
# use lib 'ads/';
# use Banner;
#
# modules
#=========================================================================

#=========================================================================
# variables
#
my (
	$query,       # CGI query object
	$maxFields,   # maximum number of fields to accept
	$rand,        # random number for banners
	$inputdata,   # filehandle for uploaded files
	@inputVals,   # values for a field (they can send more than one)
	$inputVal,    # a single values for a field
	$modval,      # modified value of 
	$fileinfo,    # uploaded file information
	@params,      # array of all fields sent
	$key,$val,    # key an value for $fileinfo hash
	$ad,$adcode,
	);
$query=CGI->new;           # get CGI object
$maxFields=100;             # maximum number of fields to accept
$rand = int(rand(100000)); # random number for ad banner

#
# variables
#=========================================================================

#=========================================================================
# top of page
#
print $query->header;
print <<"(TOPOFPAGE)";
<HTML>
<HEAD>
<TITLE>Idocs Guide to HTML: My CGI</TITLE>
</HEAD>
<BODY>

<TABLE WIDTH="100%" CELLSPACING=0 CELLPADDING=0>
<TR VALIGN=TOP>
<TD><A HREF="/" TARGET="_top"><IMG 
	SRC="../graphics/logo.med.guide.gif" 
	WIDTH=157 HEIGHT=75 ALT="Idocs Guide to HTML" BORDER=0></A></TD>
<TD ALIGN=RIGHT></TD>
</TR></TABLE>

<H1>My CGI</H1>

This CGI displays the <CODE>name=value</CODE> pairs sent to it.  Feel 
free to use this CGI for practice making HTML forms. This CGI is provided 
compliments of the <A HREF="http://www.htmlcodetutorial.com/">HTML Code Tutorial</A>.<P>

(TOPOFPAGE)
#
# top of page
#=========================================================================

#=========================================================================
# list
#

# get list of fields
@params = $query->param;
if (@params > $maxFields)
	{croak "No more than $maxFields fields please"}

# open table if necessary
print "<HR><P><TABLE BORDER CELLPADDING=4>\n" if @params;

PARAMLOOP:
foreach my $paramKey (@params) {
	print '<TR VALIGN=TOP>';

	#----------------------------------------------------------------
	# value
	#
	$inputdata = $query->param($paramKey);
	
	# print STDERR "[b]\n"; # TESTING
	# the problem with "Use of uninitialized value in hash element at (eval 6) line 3."
	# happens during the next line

		$fileinfo = $query->uploadInfo($inputdata);

	# if it's an uploaded file
	if (defined $fileinfo) {
		print 
			"<TH>", tablesc($paramKey), "</TH>",
			"<TD><TABLE BORDER BGCOLOR=\"#FFFFCC\" CELLPADDING=4>\n";
		
		while (($key,$val) = each %{$fileinfo}) {
			# content-disposition gives several pieces of 
			# information about the file, so let's parse it up
			if (lc($key) eq 'content-disposition') {
				foreach my $dis (split(m|\s*;\s*|,$val)) {
					my @dispieces=split(m/\s*=\s*/,$dis,2);
					next unless defined $dispieces[1];
					next if $dispieces[0] =~ m|^name$|i;
					print 
						'<TR><TD>',
						tablesc($dispieces[0]),
						'</TD><TD><CODE>',
						tablesc($dispieces[1]),
						"</CODE></TD></TR>\n";
				}
			}
			
			# else just print the field
			else {
				print 
					'<TR><TD>',
					tablesc($key),
					'</TD><TD><CODE>',
					tablesc($val),
					"</CODE></TD></TR>\n";
			}
		}
		
		# output the file size
		seek($inputdata,0,2);   # go to end of file handle
		print 
			'<TR><TD>size</TD><TD>', 
			tell($inputdata),
			"</TD></TR>\n";
		print '</TD></TABLE>';  # 
	}
	
	# else it's not an uploaded file
	else {
		# get array of input values
		@inputVals=$query->param($paramKey);
		@inputVals=grep(tablesc($_),@inputVals);

		# name of field
		print '<TH ROWSPAN=', 
			scalar(@inputVals), '>', 
			tablesc($paramKey), '</TH><TD><PRE>';
		
		#out put value(s) for field
		foreach $inputVal (@inputVals)
			{$inputVal = tablesc($inputVal)}
		print 
			join("</PRE></TD></TR>\n<TR><TD><PRE>", @inputVals), 
			'</PRE></TD>';
	}
	#
	# value
	#----------------------------------------------------------------

	print "</TR>\n";
}

# close table if necessary
print "</TABLE><P>\n" if @params;

#
# list
#=========================================================================

#=======================================================================
# bottom of document
#

# ************************************************************************
# *** IF YOU COPY My CGI, ABSOLUTELY PLEASE DO NOT CHANGE THIS SECTION ***
# ************************************************************************

print <<"(END BOTTOM OF PAGE)";
<HR><P>
A lot of people have asked to see the code for this CGI. 
OK, <A HREF="http://www.htmlcodetutorial.com/index_famsupp_91.html">here
it is</A>. 

</BODY>
</HTML>
(END BOTTOM OF PAGE)
#
# bottom of document
#=======================================================================

#=======================================================================
# tables
# return   undefined or for space-only/empty string,
# otherwise change < > and & to character entities
#
sub tablesc
{
return " " if (! defined $_[0]) || ($_[0] !~ m|\S|);
$_[0] =~ s|&|&|gso;
$_[0] =~ s|<|<|gso;
$_[0] =~ s|>|>|gso;
$_[0];
}
#
# tablesc
#=======================================================================
