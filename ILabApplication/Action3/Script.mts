﻿Navigate() @@ hightlight id_;_Browser("Home Page | iLAB").Page("Interns - BSC Computer").Link("Apply Online")_;_script infofile_;_ZIP::ssf4.xml_;_

datatable.importsheet "C:\Users\kwanda.buso\Documents\kwanda\ILabApplication.xlsx",1,"readFromExcel"
Browser("Home Page | iLAB").Page("Interns - BSC Computer").WebEdit("applicant_name").Set DataTable("Name", readTestDataExcel) @@ hightlight id_;_Browser("Home Page | iLAB").Page("Interns - BSC Computer").WebEdit("applicant name")_;_script infofile_;_ZIP::ssf5.xml_;_
Browser("Home Page | iLAB").Page("Interns - BSC Computer").WebEdit("email").Set DataTable("Email", readTestDataExcel) @@ hightlight id_;_Browser("Home Page | iLAB").Page("Interns - BSC Computer").WebEdit("email")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Home Page | iLAB").Page("Interns - BSC Computer").WebEdit("phone").Set DataTable("PhoneNumber", readTestDataExcel) @@ hightlight id_;_Browser("Home Page | iLAB").Page("Interns - BSC Computer").WebEdit("phone")_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("Home Page | iLAB").Page("Interns - BSC Computer").WebEdit("message").Set DataTable("Message", readTestDataExcel) @@ hightlight id_;_Browser("Home Page | iLAB").Page("Interns - BSC Computer").WebEdit("message")_;_script infofile_;_ZIP::ssf8.xml_;_
Browser("Home Page | iLAB").Page("Interns - BSC Computer").WebButton("Send Application").Click @@ hightlight id_;_Browser("Home Page | iLAB").Page("Interns - BSC Computer").WebButton("Send Application")_;_script infofile_;_ZIP::ssf9.xml_;_
Browser("Home Page | iLAB").Page("Interns - BSC Computer_2").Check CheckPoint("Interns - BSC Computer Science, National Diploma: IT Development Graduates | iLAB") @@ hightlight id_;_Browser("Home Page | iLAB").Page("Interns - BSC Computer_2")_;_script infofile_;_ZIP::ssf10.xml_;_
