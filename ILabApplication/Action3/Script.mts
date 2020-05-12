Browser("Home Page | iLAB").Page("Home Page | iLAB").Link("CAREERS").Click @@ hightlight id_;_Browser("Home Page | iLAB").Page("Home Page | iLAB").Link("CAREERS")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Home Page | iLAB").Page("CAREERS | iLAB").Link("South Africa").Click @@ hightlight id_;_Browser("Home Page | iLAB").Page("CAREERS | iLAB").Link("South Africa")_;_script infofile_;_ZIP::ssf2.xml_;_

 datatable.importsheet "C:\Users\kwanda.buso\Documents\kwanda\ILabApplication.xlsx",1,"readFromExcel"
Set desc = description.Create
desc("micclass").value = "WebElement"
desc("class").value = "wpjb-job_title wpjb-title"
Set mypage = Browser("creationtime:=0").Page("title:=.*").ChildObjects(desc)

For i = 0 To mypage.count-1  Step 1
	mypage(i).Click
	Exit For
Next

Browser("Home Page | iLAB").Page("Interns - BSC Computer").Link("Apply Online").Click @@ hightlight id_;_Browser("Home Page | iLAB").Page("Interns - BSC Computer").Link("Apply Online")_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("Home Page | iLAB").Page("Interns - BSC Computer").WebEdit("applicant_name").Set DataTable("Name", readTestDataExcel) @@ hightlight id_;_Browser("Home Page | iLAB").Page("Interns - BSC Computer").WebEdit("applicant name")_;_script infofile_;_ZIP::ssf5.xml_;_
Browser("Home Page | iLAB").Page("Interns - BSC Computer").WebEdit("email").Set DataTable("Email", readTestDataExcel) @@ hightlight id_;_Browser("Home Page | iLAB").Page("Interns - BSC Computer").WebEdit("email")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Home Page | iLAB").Page("Interns - BSC Computer").WebEdit("phone").Set DataTable("PhoneNumber", readTestDataExcel) @@ hightlight id_;_Browser("Home Page | iLAB").Page("Interns - BSC Computer").WebEdit("phone")_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("Home Page | iLAB").Page("Interns - BSC Computer").WebEdit("message").Set DataTable("Message", readTestDataExcel) @@ hightlight id_;_Browser("Home Page | iLAB").Page("Interns - BSC Computer").WebEdit("message")_;_script infofile_;_ZIP::ssf8.xml_;_
Browser("Home Page | iLAB").Page("Interns - BSC Computer").WebButton("Send Application").Click @@ hightlight id_;_Browser("Home Page | iLAB").Page("Interns - BSC Computer").WebButton("Send Application")_;_script infofile_;_ZIP::ssf9.xml_;_
Browser("Home Page | iLAB").Page("Interns - BSC Computer_2").Check CheckPoint("Interns - BSC Computer Science, National Diploma: IT Development Graduates | iLAB") @@ hightlight id_;_Browser("Home Page | iLAB").Page("Interns - BSC Computer_2")_;_script infofile_;_ZIP::ssf10.xml_;_
