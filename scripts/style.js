$(document).ready(function()
{

  $("#sectionweb ul").hide();
  $("#sectionposter ul").hide();
  $("#sectionidentity ul").hide();
  $("#sectioneditorial ul").hide();
  $("#sectionmiscellaneous ul").hide();
  $("#webcontent").hide();
  $("#postercontent").hide();
  $("#identitycontent").hide();
  $("#editorialcontent").hide();
  $("#misccontent").hide();
  
  $("#blogtopic1 ul").hide();
  $("#blogtopic2 ul").hide();
  $("#blogtopic3 ul").hide();
  $("#blogtopic4 ul").hide();
  $("#blogtopic1 h2").click(function()
  {
    $("#blogtopic1 ul").slideToggle(600);
  });
  $("#blogtopic2 h2").click(function()
  {
    $("#blogtopic2 ul").slideToggle(600);
  });
  $("#blogtopic3 h2").click(function()
  {
    $("#blogtopic3 ul").slideToggle(600);
  });
  $("#blogtopic4 h2").click(function()
  {
    $("#blogtopic4 ul").slideToggle(600);
  });
  
  $("#sectionweb h2").click(function()
  {
  $("#sectionposter ul").hide();
  $("#sectionidentity ul").hide();
  $("#sectioneditorial ul").hide();
  $("#sectionmiscellaneous ul").hide();
  $("#postercontent").hide();
  $("#identitycontent").hide();
  $("#editorialcontent").hide();
  $("#misccontent").hide();
    $("#sectionweb ul").slideToggle(600);
	$("#webcontent").slideToggle(1500);
  });
  
  $("#sectionposter h2").click(function()
  {
  $("#sectionweb ul").hide();
  $("#sectionidentity ul").hide();
  $("#sectioneditorial ul").hide();
  $("#sectionmiscellaneous ul").hide();
  $("#webcontent").hide();
  $("#identitycontent").hide();
  $("#editorialcontent").hide();
  $("#misccontent").hide();
    $("#sectionposter ul").slideToggle(600);
	$("#postercontent").slideToggle(1500);
  });
  
  $("#sectionidentity h2").click(function()
  {
  $("#sectionweb ul").hide();
  $("#sectionposter ul").hide();
  $("#sectioneditorial ul").hide();
  $("#sectionmiscellaneous ul").hide();
  $("#webcontent").hide();
  $("#postercontent").hide();
  $("#editorialcontent").hide();
  $("#misccontent").hide();
    $("#sectionidentity ul").slideToggle(600);
	$("#identitycontent").slideToggle(1500);
  });
  
   $("#sectioneditorial h2").click(function()
  {
  $("#sectionweb ul").hide();
  $("#sectionposter ul").hide();
  $("#sectionidentity ul").hide();
  $("#sectionmiscellaneous ul").hide();
  $("#webcontent").hide();
  $("#postercontent").hide();
  $("#identitycontent").hide();
  $("#misccontent").hide();
    $("#sectioneditorial ul").slideToggle(600);
	$("#editorialcontent").slideToggle(1500);
  });
  
     $("#sectionmiscellaneous h2").click(function()
  {
  $("#sectionweb ul").hide();
  $("#sectionposter ul").hide();
  $("#sectionidentity ul").hide();
  $("#sectioneditorial ul").hide();
  $("#webcontent").hide();
  $("#postercontent").hide();
  $("#identitycontent").hide();
  $("#editorialccontent").hide();
    $("#sectionmiscellaneous ul").slideToggle(600);
	$("#misccontent").slideToggle(1500);
  });
});