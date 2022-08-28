[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ricardopolanski_tivix_test_challenge&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ricardopolanski_tivix_test_challenge)

[![Tivix Challenge](https://github.com/ricardopolanski/tivix_test_challenge/actions/workflows/main.yml/badge.svg)](https://github.com/ricardopolanski/tivix_test_challenge/actions/workflows/main.yml)

<H1>How to install and run automated Tivix Challenge test</h1>

<h3>Requirements</h3>

- [NodeJS](https://nodejs.org/en/download/ "NodeJS")

<h3>Steps to execute</h3>

- Clone this repository to your local computer using the following URL: https://github.com/ricardopolanski/tivix_test_challenge
- Run the following comands:

	- Install dependencies
		- npm i

	- Run the test on openMode
		- npx cypress open

	- Run the test on runMode
		- npx cypress run


<h3>About the project</h3>

The project was developed using [Cypress](https://www.npmjs.com/package/cypress "Cypress") Framework and [Gherkin Syntax](https://cucumber.io/docs/gherkin/ "Gherkin Syntax").
Was writen three scenarios as following:
  1. Search Car Filters
  2. Select a Car
  3. Filling up Personal Information
  
<h3>Project Structure</h3>
<pre>
📂---.github
|   \📂---workflows
|         📜 main.yml			# Git Action Config file
📂---cypress
    |   .gitignore
    |
    📂---fixtures
    |       example.json
    |
    📂---integration
    |   \📂---tests
    |      \📂---actions				# Test Actions
    |       |      📜commonActions.js
    |       |      📜personalInfoActions.js
    |       |      📜rentCarActions.js
    |       |
    |       📂---data					# Auxiliar Information
    |       |      📜dateFunctions.js
    |       |      📜personalInfo.js
    |       |      📜searchInfo.js
    |       |
    |       📂---features				# Gherkin features
    |       |      📜rentCar.feature
    |       |
    |       📂---pageObjects				# Page Elements
    |       |      📜personalInfoElements.js
    |       |      📜searchElements.js
    |       |
    |       📂---steps					# Steps Definitions
    |              📜personalInfo.js
    |              📜rentCar.js
 </pre>

 <html xmlns:v="urn:schemas-microsoft-com:vml"
xmlns:o="urn:schemas-microsoft-com:office:office"
xmlns:w="urn:schemas-microsoft-com:office:word"
xmlns:m="http://schemas.microsoft.com/office/2004/12/omml"
xmlns="http://www.w3.org/TR/REC-html40">

<head>
<meta http-equiv=Content-Type content="text/html; charset=windows-1252">
<meta name=ProgId content=Word.Document>
<meta name=Generator content="Microsoft Word 15">
<meta name=Originator content="Microsoft Word 15">
<link rel=File-List href="Bug%20Report_files/filelist.xml">
<!--[if gte mso 9]><xml>
 <o:DocumentProperties>
  <o:Author>Ricardo Polanski</o:Author>
  <o:LastAuthor>Ricardo Polanski</o:LastAuthor>
  <o:Revision>2</o:Revision>
  <o:TotalTime>22</o:TotalTime>
  <o:Created>2022-08-28T19:03:00Z</o:Created>
  <o:LastSaved>2022-08-28T19:03:00Z</o:LastSaved>
  <o:Pages>1</o:Pages>
  <o:Words>340</o:Words>
  <o:Characters>1837</o:Characters>
  <o:Lines>15</o:Lines>
  <o:Paragraphs>4</o:Paragraphs>
  <o:CharactersWithSpaces>2173</o:CharactersWithSpaces>
  <o:Version>16.00</o:Version>
 </o:DocumentProperties>
 <o:OfficeDocumentSettings>
  <o:AllowPNG/>
 </o:OfficeDocumentSettings>
</xml><![endif]-->
<link rel=themeData href="Bug%20Report_files/themedata.thmx">
<link rel=colorSchemeMapping href="Bug%20Report_files/colorschememapping.xml">
<!--[if gte mso 9]><xml>
 <w:WordDocument>
  <w:SpellingState>Clean</w:SpellingState>
  <w:GrammarState>Clean</w:GrammarState>
  <w:TrackMoves>false</w:TrackMoves>
  <w:TrackFormatting/>
  <w:HyphenationZone>21</w:HyphenationZone>
  <w:PunctuationKerning/>
  <w:ValidateAgainstSchemas/>
  <w:SaveIfXMLInvalid>false</w:SaveIfXMLInvalid>
  <w:IgnoreMixedContent>false</w:IgnoreMixedContent>
  <w:AlwaysShowPlaceholderText>false</w:AlwaysShowPlaceholderText>
  <w:DoNotPromoteQF/>
  <w:LidThemeOther>PT-BR</w:LidThemeOther>
  <w:LidThemeAsian>X-NONE</w:LidThemeAsian>
  <w:LidThemeComplexScript>X-NONE</w:LidThemeComplexScript>
  <w:Compatibility>
   <w:BreakWrappedTables/>
   <w:SnapToGridInCell/>
   <w:WrapTextWithPunct/>
   <w:UseAsianBreakRules/>
   <w:DontGrowAutofit/>
   <w:SplitPgBreakAndParaMark/>
   <w:EnableOpenTypeKerning/>
   <w:DontFlipMirrorIndents/>
   <w:OverrideTableStyleHps/>
  </w:Compatibility>
  <m:mathPr>
   <m:mathFont m:val="Cambria Math"/>
   <m:brkBin m:val="before"/>
   <m:brkBinSub m:val="&#45;-"/>
   <m:smallFrac m:val="off"/>
   <m:dispDef/>
   <m:lMargin m:val="0"/>
   <m:rMargin m:val="0"/>
   <m:defJc m:val="centerGroup"/>
   <m:wrapIndent m:val="1440"/>
   <m:intLim m:val="subSup"/>
   <m:naryLim m:val="undOvr"/>
  </m:mathPr></w:WordDocument>
</xml><![endif]--><!--[if gte mso 9]><xml>
 <w:LatentStyles DefLockedState="false" DefUnhideWhenUsed="false"
  DefSemiHidden="false" DefQFormat="false" DefPriority="99"
  LatentStyleCount="376">
  <w:LsdException Locked="false" Priority="0" QFormat="true" Name="Normal"/>
  <w:LsdException Locked="false" Priority="9" QFormat="true" Name="heading 1"/>
  <w:LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 2"/>
  <w:LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 3"/>
  <w:LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 4"/>
  <w:LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 5"/>
  <w:LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 6"/>
  <w:LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 7"/>
  <w:LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 8"/>
  <w:LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 9"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 5"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 6"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 7"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 8"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 9"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 1"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 2"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 3"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 4"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 5"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 6"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 7"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 8"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 9"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Normal Indent"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="footnote text"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="annotation text"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="header"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="footer"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index heading"/>
  <w:LsdException Locked="false" Priority="35" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="caption"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="table of figures"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="envelope address"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="envelope return"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="footnote reference"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="annotation reference"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="line number"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="page number"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="endnote reference"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="endnote text"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="table of authorities"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="macro"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="toa heading"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Bullet"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Number"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List 5"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Bullet 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Bullet 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Bullet 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Bullet 5"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Number 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Number 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Number 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Number 5"/>
  <w:LsdException Locked="false" Priority="10" QFormat="true" Name="Title"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Closing"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Signature"/>
  <w:LsdException Locked="false" Priority="1" SemiHidden="true"
   UnhideWhenUsed="true" Name="Default Paragraph Font"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text Indent"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Continue"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Continue 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Continue 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Continue 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Continue 5"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Message Header"/>
  <w:LsdException Locked="false" Priority="11" QFormat="true" Name="Subtitle"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Salutation"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Date"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text First Indent"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text First Indent 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Note Heading"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text Indent 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text Indent 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Block Text"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Hyperlink"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="FollowedHyperlink"/>
  <w:LsdException Locked="false" Priority="22" QFormat="true" Name="Strong"/>
  <w:LsdException Locked="false" Priority="20" QFormat="true" Name="Emphasis"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Document Map"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Plain Text"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="E-mail Signature"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Top of Form"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Bottom of Form"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Normal (Web)"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Acronym"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Address"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Cite"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Code"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Definition"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Keyboard"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Preformatted"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Sample"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Typewriter"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Variable"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Normal Table"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="annotation subject"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="No List"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Outline List 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Outline List 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Outline List 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Simple 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Simple 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Simple 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Classic 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Classic 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Classic 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Classic 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Colorful 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Colorful 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Colorful 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Columns 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Columns 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Columns 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Columns 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Columns 5"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 5"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 6"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 7"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 8"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 5"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 6"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 7"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 8"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table 3D effects 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table 3D effects 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table 3D effects 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Contemporary"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Elegant"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Professional"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Subtle 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Subtle 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Web 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Web 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Web 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Balloon Text"/>
  <w:LsdException Locked="false" Priority="39" Name="Table Grid"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Theme"/>
  <w:LsdException Locked="false" SemiHidden="true" Name="Placeholder Text"/>
  <w:LsdException Locked="false" Priority="1" QFormat="true" Name="No Spacing"/>
  <w:LsdException Locked="false" Priority="60" Name="Light Shading"/>
  <w:LsdException Locked="false" Priority="61" Name="Light List"/>
  <w:LsdException Locked="false" Priority="62" Name="Light Grid"/>
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1"/>
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2"/>
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1"/>
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2"/>
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1"/>
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2"/>
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3"/>
  <w:LsdException Locked="false" Priority="70" Name="Dark List"/>
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading"/>
  <w:LsdException Locked="false" Priority="72" Name="Colorful List"/>
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid"/>
  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 1"/>
  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 1"/>
  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 1"/>
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 1"/>
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 1"/>
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 1"/>
  <w:LsdException Locked="false" SemiHidden="true" Name="Revision"/>
  <w:LsdException Locked="false" Priority="34" QFormat="true"
   Name="List Paragraph"/>
  <w:LsdException Locked="false" Priority="29" QFormat="true" Name="Quote"/>
  <w:LsdException Locked="false" Priority="30" QFormat="true"
   Name="Intense Quote"/>
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 1"/>
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 1"/>
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 1"/>
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 1"/>
  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 1"/>
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 1"/>
  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 1"/>
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 1"/>
  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 2"/>
  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 2"/>
  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 2"/>
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 2"/>
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 2"/>
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 2"/>
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 2"/>
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 2"/>
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 2"/>
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 2"/>
  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 2"/>
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 2"/>
  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 2"/>
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 2"/>
  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 3"/>
  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 3"/>
  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 3"/>
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 3"/>
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 3"/>
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 3"/>
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 3"/>
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 3"/>
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 3"/>
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 3"/>
  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 3"/>
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 3"/>
  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 3"/>
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 3"/>
  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 4"/>
  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 4"/>
  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 4"/>
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 4"/>
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 4"/>
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 4"/>
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 4"/>
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 4"/>
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 4"/>
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 4"/>
  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 4"/>
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 4"/>
  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 4"/>
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 4"/>
  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 5"/>
  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 5"/>
  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 5"/>
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 5"/>
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 5"/>
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 5"/>
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 5"/>
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 5"/>
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 5"/>
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 5"/>
  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 5"/>
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 5"/>
  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 5"/>
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 5"/>
  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 6"/>
  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 6"/>
  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 6"/>
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 6"/>
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 6"/>
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 6"/>
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 6"/>
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 6"/>
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 6"/>
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 6"/>
  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 6"/>
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 6"/>
  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 6"/>
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 6"/>
  <w:LsdException Locked="false" Priority="19" QFormat="true"
   Name="Subtle Emphasis"/>
  <w:LsdException Locked="false" Priority="21" QFormat="true"
   Name="Intense Emphasis"/>
  <w:LsdException Locked="false" Priority="31" QFormat="true"
   Name="Subtle Reference"/>
  <w:LsdException Locked="false" Priority="32" QFormat="true"
   Name="Intense Reference"/>
  <w:LsdException Locked="false" Priority="33" QFormat="true" Name="Book Title"/>
  <w:LsdException Locked="false" Priority="37" SemiHidden="true"
   UnhideWhenUsed="true" Name="Bibliography"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="TOC Heading"/>
  <w:LsdException Locked="false" Priority="41" Name="Plain Table 1"/>
  <w:LsdException Locked="false" Priority="42" Name="Plain Table 2"/>
  <w:LsdException Locked="false" Priority="43" Name="Plain Table 3"/>
  <w:LsdException Locked="false" Priority="44" Name="Plain Table 4"/>
  <w:LsdException Locked="false" Priority="45" Name="Plain Table 5"/>
  <w:LsdException Locked="false" Priority="40" Name="Grid Table Light"/>
  <w:LsdException Locked="false" Priority="46" Name="Grid Table 1 Light"/>
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2"/>
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3"/>
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4"/>
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark"/>
  <w:LsdException Locked="false" Priority="51" Name="Grid Table 6 Colorful"/>
  <w:LsdException Locked="false" Priority="52" Name="Grid Table 7 Colorful"/>
  <w:LsdException Locked="false" Priority="46"
   Name="Grid Table 1 Light Accent 1"/>
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 1"/>
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 1"/>
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 1"/>
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 1"/>
  <w:LsdException Locked="false" Priority="51"
   Name="Grid Table 6 Colorful Accent 1"/>
  <w:LsdException Locked="false" Priority="52"
   Name="Grid Table 7 Colorful Accent 1"/>
  <w:LsdException Locked="false" Priority="46"
   Name="Grid Table 1 Light Accent 2"/>
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 2"/>
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 2"/>
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 2"/>
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 2"/>
  <w:LsdException Locked="false" Priority="51"
   Name="Grid Table 6 Colorful Accent 2"/>
  <w:LsdException Locked="false" Priority="52"
   Name="Grid Table 7 Colorful Accent 2"/>
  <w:LsdException Locked="false" Priority="46"
   Name="Grid Table 1 Light Accent 3"/>
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 3"/>
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 3"/>
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 3"/>
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 3"/>
  <w:LsdException Locked="false" Priority="51"
   Name="Grid Table 6 Colorful Accent 3"/>
  <w:LsdException Locked="false" Priority="52"
   Name="Grid Table 7 Colorful Accent 3"/>
  <w:LsdException Locked="false" Priority="46"
   Name="Grid Table 1 Light Accent 4"/>
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 4"/>
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 4"/>
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 4"/>
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 4"/>
  <w:LsdException Locked="false" Priority="51"
   Name="Grid Table 6 Colorful Accent 4"/>
  <w:LsdException Locked="false" Priority="52"
   Name="Grid Table 7 Colorful Accent 4"/>
  <w:LsdException Locked="false" Priority="46"
   Name="Grid Table 1 Light Accent 5"/>
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 5"/>
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 5"/>
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 5"/>
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 5"/>
  <w:LsdException Locked="false" Priority="51"
   Name="Grid Table 6 Colorful Accent 5"/>
  <w:LsdException Locked="false" Priority="52"
   Name="Grid Table 7 Colorful Accent 5"/>
  <w:LsdException Locked="false" Priority="46"
   Name="Grid Table 1 Light Accent 6"/>
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 6"/>
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 6"/>
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 6"/>
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 6"/>
  <w:LsdException Locked="false" Priority="51"
   Name="Grid Table 6 Colorful Accent 6"/>
  <w:LsdException Locked="false" Priority="52"
   Name="Grid Table 7 Colorful Accent 6"/>
  <w:LsdException Locked="false" Priority="46" Name="List Table 1 Light"/>
  <w:LsdException Locked="false" Priority="47" Name="List Table 2"/>
  <w:LsdException Locked="false" Priority="48" Name="List Table 3"/>
  <w:LsdException Locked="false" Priority="49" Name="List Table 4"/>
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark"/>
  <w:LsdException Locked="false" Priority="51" Name="List Table 6 Colorful"/>
  <w:LsdException Locked="false" Priority="52" Name="List Table 7 Colorful"/>
  <w:LsdException Locked="false" Priority="46"
   Name="List Table 1 Light Accent 1"/>
  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 1"/>
  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 1"/>
  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 1"/>
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 1"/>
  <w:LsdException Locked="false" Priority="51"
   Name="List Table 6 Colorful Accent 1"/>
  <w:LsdException Locked="false" Priority="52"
   Name="List Table 7 Colorful Accent 1"/>
  <w:LsdException Locked="false" Priority="46"
   Name="List Table 1 Light Accent 2"/>
  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 2"/>
  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 2"/>
  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 2"/>
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 2"/>
  <w:LsdException Locked="false" Priority="51"
   Name="List Table 6 Colorful Accent 2"/>
  <w:LsdException Locked="false" Priority="52"
   Name="List Table 7 Colorful Accent 2"/>
  <w:LsdException Locked="false" Priority="46"
   Name="List Table 1 Light Accent 3"/>
  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 3"/>
  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 3"/>
  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 3"/>
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 3"/>
  <w:LsdException Locked="false" Priority="51"
   Name="List Table 6 Colorful Accent 3"/>
  <w:LsdException Locked="false" Priority="52"
   Name="List Table 7 Colorful Accent 3"/>
  <w:LsdException Locked="false" Priority="46"
   Name="List Table 1 Light Accent 4"/>
  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 4"/>
  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 4"/>
  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 4"/>
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 4"/>
  <w:LsdException Locked="false" Priority="51"
   Name="List Table 6 Colorful Accent 4"/>
  <w:LsdException Locked="false" Priority="52"
   Name="List Table 7 Colorful Accent 4"/>
  <w:LsdException Locked="false" Priority="46"
   Name="List Table 1 Light Accent 5"/>
  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 5"/>
  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 5"/>
  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 5"/>
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 5"/>
  <w:LsdException Locked="false" Priority="51"
   Name="List Table 6 Colorful Accent 5"/>
  <w:LsdException Locked="false" Priority="52"
   Name="List Table 7 Colorful Accent 5"/>
  <w:LsdException Locked="false" Priority="46"
   Name="List Table 1 Light Accent 6"/>
  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 6"/>
  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 6"/>
  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 6"/>
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 6"/>
  <w:LsdException Locked="false" Priority="51"
   Name="List Table 6 Colorful Accent 6"/>
  <w:LsdException Locked="false" Priority="52"
   Name="List Table 7 Colorful Accent 6"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Mention"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Smart Hyperlink"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Hashtag"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Unresolved Mention"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Smart Link"/>
 </w:LatentStyles>
</xml><![endif]-->
<style>
<!--
 /* Font Definitions */
 @font-face
	{font-family:"Cambria Math";
	panose-1:2 4 5 3 5 4 6 3 2 4;
	mso-font-charset:0;
	mso-generic-font-family:roman;
	mso-font-pitch:variable;
	mso-font-signature:3 0 0 0 1 0;}
@font-face
	{font-family:Calibri;
	panose-1:2 15 5 2 2 2 4 3 2 4;
	mso-font-charset:0;
	mso-generic-font-family:swiss;
	mso-font-pitch:variable;
	mso-font-signature:-469750017 -1073732485 9 0 511 0;}
@font-face
	{font-family:Consolas;
	panose-1:2 11 6 9 2 2 4 3 2 4;
	mso-font-charset:0;
	mso-generic-font-family:modern;
	mso-font-pitch:fixed;
	mso-font-signature:-536869121 64767 1 0 415 0;}
 /* Style Definitions */
 p.MsoNormal, li.MsoNormal, div.MsoNormal
	{mso-style-unhide:no;
	mso-style-qformat:yes;
	mso-style-parent:"";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:0in;
	line-height:107%;
	mso-pagination:widow-orphan;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	mso-ascii-font-family:Calibri;
	mso-ascii-theme-font:minor-latin;
	mso-fareast-font-family:Calibri;
	mso-fareast-theme-font:minor-latin;
	mso-hansi-font-family:Calibri;
	mso-hansi-theme-font:minor-latin;
	mso-bidi-font-family:"Times New Roman";
	mso-bidi-theme-font:minor-bidi;
	mso-fareast-language:EN-US;}
.MsoChpDefault
	{mso-style-type:export-only;
	mso-default-props:yes;
	font-family:"Calibri",sans-serif;
	mso-ascii-font-family:Calibri;
	mso-ascii-theme-font:minor-latin;
	mso-fareast-font-family:Calibri;
	mso-fareast-theme-font:minor-latin;
	mso-hansi-font-family:Calibri;
	mso-hansi-theme-font:minor-latin;
	mso-bidi-font-family:"Times New Roman";
	mso-bidi-theme-font:minor-bidi;
	mso-fareast-language:EN-US;}
.MsoPapDefault
	{mso-style-type:export-only;
	margin-bottom:8.0pt;
	line-height:107%;}
@page WordSection1
	{size:595.3pt 841.9pt;
	margin:1.0in 1.0in 1.0in 1.0in;
	mso-header-margin:.5in;
	mso-footer-margin:.5in;
	mso-paper-source:0;}
div.WordSection1
	{page:WordSection1;}
-->
</style>
<!--[if gte mso 10]>
<style>
 /* Style Definitions */
 table.MsoNormalTable
	{mso-style-name:"Table Normal";
	mso-tstyle-rowband-size:0;
	mso-tstyle-colband-size:0;
	mso-style-noshow:yes;
	mso-style-priority:99;
	mso-style-parent:"";
	mso-padding-alt:0in 5.4pt 0in 5.4pt;
	mso-para-margin-top:0in;
	mso-para-margin-right:0in;
	mso-para-margin-bottom:8.0pt;
	mso-para-margin-left:0in;
	line-height:107%;
	mso-pagination:widow-orphan;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	mso-ascii-font-family:Calibri;
	mso-ascii-theme-font:minor-latin;
	mso-hansi-font-family:Calibri;
	mso-hansi-theme-font:minor-latin;
	mso-bidi-font-family:"Times New Roman";
	mso-bidi-theme-font:minor-bidi;
	mso-fareast-language:EN-US;}
</style>
<![endif]--><!--[if gte mso 9]><xml>
 <o:shapedefaults v:ext="edit" spidmax="1026"/>
</xml><![endif]--><!--[if gte mso 9]><xml>
 <o:shapelayout v:ext="edit">
  <o:idmap v:ext="edit" data="1"/>
 </o:shapelayout></xml><![endif]-->
</head>

<body lang=PT-BR style='tab-interval:35.4pt;word-wrap:break-word'>

<div class=WordSection1>

<p class=MsoNormal align=center style='text-align:center'><b><i><span
lang=EN-US style='font-size:36.0pt;line-height:107%;mso-ansi-language:EN-US'>Bug
Report<o:p></o:p></span></i></b></p>

<p class=MsoNormal><span lang=EN-US style='font-size:18.0pt;line-height:107%;
mso-ansi-language:EN-US'>Scenario: Search Car Filters</span><span lang=EN-US
style='font-size:18.0pt;line-height:107%;font-family:Consolas;mso-fareast-font-family:
"Times New Roman";mso-bidi-font-family:"Times New Roman";color:#EEFFFF;
mso-ansi-language:EN-US;mso-fareast-language:PT-BR'><o:p></o:p></span></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:14.25pt;background:
#262626'><span lang=EN-US style='font-size:10.5pt;font-family:Consolas;
mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:"Times New Roman";
color:#EEFFFF;mso-ansi-language:EN-US;mso-fareast-language:PT-BR'><o:p>&nbsp;</o:p></span></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:14.25pt;background:
#262626'><span lang=EN-US style='font-size:10.5pt;font-family:Consolas;
mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:"Times New Roman";
color:#EEFFFF;mso-ansi-language:EN-US;mso-fareast-language:PT-BR'>&nbsp; &nbsp;
</span><span lang=EN-US style='font-size:10.5pt;font-family:Consolas;
mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:"Times New Roman";
color:#EE8241;mso-ansi-language:EN-US;mso-fareast-language:PT-BR'>Given</span><span
lang=EN-US style='font-size:10.5pt;font-family:Consolas;mso-fareast-font-family:
"Times New Roman";mso-bidi-font-family:"Times New Roman";color:#EEFFFF;
mso-ansi-language:EN-US;mso-fareast-language:PT-BR'> the website is accessed<o:p></o:p></span></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:14.25pt;background:
#262626'><span lang=EN-US style='font-size:10.5pt;font-family:Consolas;
mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:"Times New Roman";
color:#EEFFFF;mso-ansi-language:EN-US;mso-fareast-language:PT-BR'>&nbsp; &nbsp;
&nbsp; &nbsp; </span><span lang=EN-US style='font-size:10.5pt;font-family:Consolas;
mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:"Times New Roman";
color:#EE8241;mso-ansi-language:EN-US;mso-fareast-language:PT-BR'>Then</span><span
lang=EN-US style='font-size:10.5pt;font-family:Consolas;mso-fareast-font-family:
"Times New Roman";mso-bidi-font-family:"Times New Roman";color:#EEFFFF;
mso-ansi-language:EN-US;mso-fareast-language:PT-BR'> will be showed up five
fields to be filled up<o:p></o:p></span></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:14.25pt;background:
#262626'><span lang=EN-US style='font-size:10.5pt;font-family:Consolas;
mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:"Times New Roman";
color:#EEFFFF;mso-ansi-language:EN-US;mso-fareast-language:PT-BR'>&nbsp; &nbsp;
&nbsp; &nbsp; </span><span lang=EN-US style='font-size:10.5pt;font-family:Consolas;
mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:"Times New Roman";
color:#EE8241;mso-ansi-language:EN-US;mso-fareast-language:PT-BR'>And</span><span
lang=EN-US style='font-size:10.5pt;font-family:Consolas;mso-fareast-font-family:
"Times New Roman";mso-bidi-font-family:"Times New Roman";color:#EEFFFF;
mso-ansi-language:EN-US;mso-fareast-language:PT-BR'> a blue Search button<o:p></o:p></span></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:14.25pt;background:
#262626'><span lang=EN-US style='font-size:10.5pt;font-family:Consolas;
mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:"Times New Roman";
color:#EEFFFF;mso-ansi-language:EN-US;mso-fareast-language:PT-BR'>&nbsp; &nbsp;
&nbsp; &nbsp; </span><span lang=EN-US style='font-size:10.5pt;font-family:Consolas;
mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:"Times New Roman";
color:#EE8241;mso-ansi-language:EN-US;mso-fareast-language:PT-BR'>And</span><span
lang=EN-US style='font-size:10.5pt;font-family:Consolas;mso-fareast-font-family:
"Times New Roman";mso-bidi-font-family:"Times New Roman";color:#EEFFFF;
mso-ansi-language:EN-US;mso-fareast-language:PT-BR'> a notice box warning </span><span
lang=EN-US style='font-size:10.5pt;font-family:Consolas;mso-fareast-font-family:
"Times New Roman";mso-bidi-font-family:"Times New Roman";color:#C99677;
mso-ansi-language:EN-US;mso-fareast-language:PT-BR'>&quot;Please fill pickup
and drop off dates&quot;</span><span lang=EN-US style='font-size:10.5pt;
font-family:Consolas;mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:
"Times New Roman";color:#EEFFFF;mso-ansi-language:EN-US;mso-fareast-language:
PT-BR'><o:p></o:p></span></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:14.25pt;background:
#262626'><span lang=EN-US style='font-size:10.5pt;font-family:Consolas;
mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:"Times New Roman";
color:#EEFFFF;mso-ansi-language:EN-US;mso-fareast-language:PT-BR'>&nbsp; &nbsp;
&nbsp; &nbsp; </span><span lang=EN-US style='font-size:10.5pt;font-family:Consolas;
mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:"Times New Roman";
color:#EE8241;mso-ansi-language:EN-US;mso-fareast-language:PT-BR'>When</span><span
lang=EN-US style='font-size:10.5pt;font-family:Consolas;mso-fareast-font-family:
"Times New Roman";mso-bidi-font-family:"Times New Roman";color:#EEFFFF;
mso-ansi-language:EN-US;mso-fareast-language:PT-BR'> all fields are filled up<o:p></o:p></span></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:14.25pt;background:
#262626'><span lang=EN-US style='font-size:10.5pt;font-family:Consolas;
mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:"Times New Roman";
color:#EEFFFF;mso-ansi-language:EN-US;mso-fareast-language:PT-BR'>&nbsp; &nbsp;
&nbsp; &nbsp; </span><span lang=EN-US style='font-size:10.5pt;font-family:Consolas;
mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:"Times New Roman";
color:#EE8241;mso-ansi-language:EN-US;mso-fareast-language:PT-BR'>And</span><span
lang=EN-US style='font-size:10.5pt;font-family:Consolas;mso-fareast-font-family:
"Times New Roman";mso-bidi-font-family:"Times New Roman";color:#EEFFFF;
mso-ansi-language:EN-US;mso-fareast-language:PT-BR'> the Search button is
clicked<o:p></o:p></span></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:14.25pt;background:
#262626'><span lang=EN-US style='font-size:10.5pt;font-family:Consolas;
mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:"Times New Roman";
color:#EEFFFF;mso-ansi-language:EN-US;mso-fareast-language:PT-BR'>&nbsp; &nbsp;
&nbsp; &nbsp; </span><span lang=EN-US style='font-size:10.5pt;font-family:Consolas;
mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:"Times New Roman";
color:#EE8241;mso-ansi-language:EN-US;mso-fareast-language:PT-BR'>Then</span><span
lang=EN-US style='font-size:10.5pt;font-family:Consolas;mso-fareast-font-family:
"Times New Roman";mso-bidi-font-family:"Times New Roman";color:#EEFFFF;
mso-ansi-language:EN-US;mso-fareast-language:PT-BR'> will be displayed a table
informing Company, Model, License plate, Price, Price per day and a Rent button
<o:p></o:p></span></p>

<p class=MsoNormal><span lang=EN-US style='mso-ansi-language:EN-US'><o:p>&nbsp;</o:p></span></p>

<p class=MsoNormal><u><span lang=EN-US style='font-size:14.0pt;line-height:
107%;mso-ansi-language:EN-US'>Bug: Filter Cities<o:p></o:p></span></u></p>

<p class=MsoNormal><span lang=EN-US style='color:#70AD47;mso-themecolor:accent6;
mso-ansi-language:EN-US'>Expected behavior</span><span lang=EN-US
style='mso-ansi-language:EN-US'>: When select Country, a list of cities should
be filtered.<o:p></o:p></span></p>

<p class=MsoNormal><span lang=EN-US style='color:red;mso-ansi-language:EN-US'>Result:
Cities are not being filtered after select Country<o:p></o:p></span></p>

<p class=MsoNormal><u><span lang=EN-US style='font-size:14.0pt;line-height:
107%;mso-ansi-language:EN-US'>Bug: Filter Model results regarding Country and
City<o:p></o:p></span></u></p>

<p class=MsoNormal><span lang=EN-US style='color:#70AD47;mso-themecolor:accent6;
mso-ansi-language:EN-US'>Expected behavior</span><span lang=EN-US
style='mso-ansi-language:EN-US'>: When select Country and City, a list of Car
Models should be listed only in the desired Country and City.<o:p></o:p></span></p>

<p class=MsoNormal><span lang=EN-US style='color:red;mso-ansi-language:EN-US'>Result:
Country and City filter are not being applied.<o:p></o:p></span></p>

<p class=MsoNormal><u><span lang=EN-US style='font-size:14.0pt;line-height:
107%;mso-ansi-language:EN-US'>Bug: Filter Model<o:p></o:p></span></u></p>

<p class=MsoNormal><span lang=EN-US style='color:#70AD47;mso-themecolor:accent6;
mso-ansi-language:EN-US'>Expected behavior</span><span lang=EN-US
style='mso-ansi-language:EN-US'>: When insert car model and click on Search Button,
a list of car model inserted should be listed.<o:p></o:p></span></p>

<p class=MsoNormal><span lang=EN-US style='color:red;mso-ansi-language:EN-US'>Result:
Car model filter is not being applied and all models are displayed.<o:p></o:p></span></p>

<p class=MsoNormal><span lang=EN-US style='mso-ansi-language:EN-US'><o:p>&nbsp;</o:p></span></p>

<p class=MsoNormal><span lang=EN-US style='font-size:18.0pt;line-height:107%;
mso-ansi-language:EN-US'>Scenario: Filling up Personal Information<o:p></o:p></span></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:14.25pt;background:
#262626'><span lang=EN-US style='font-size:10.5pt;font-family:Consolas;
mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:"Times New Roman";
color:#EEFFFF;mso-ansi-language:EN-US;mso-fareast-language:PT-BR'>&nbsp;</span><span
lang=EN-US style='font-size:10.5pt;font-family:Consolas;mso-fareast-font-family:
"Times New Roman";mso-bidi-font-family:"Times New Roman";color:#EE8241;
mso-ansi-language:EN-US;mso-fareast-language:PT-BR'>Given</span><span
lang=EN-US style='font-size:10.5pt;font-family:Consolas;mso-fareast-font-family:
"Times New Roman";mso-bidi-font-family:"Times New Roman";color:#EEFFFF;
mso-ansi-language:EN-US;mso-fareast-language:PT-BR'> the website is accessed<o:p></o:p></span></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:14.25pt;background:
#262626'><span lang=EN-US style='font-size:10.5pt;font-family:Consolas;
mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:"Times New Roman";
color:#EEFFFF;mso-ansi-language:EN-US;mso-fareast-language:PT-BR'>&nbsp; &nbsp;
&nbsp; &nbsp; </span><span lang=EN-US style='font-size:10.5pt;font-family:Consolas;
mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:"Times New Roman";
color:#EE8241;mso-ansi-language:EN-US;mso-fareast-language:PT-BR'>Then</span><span
lang=EN-US style='font-size:10.5pt;font-family:Consolas;mso-fareast-font-family:
"Times New Roman";mso-bidi-font-family:"Times New Roman";color:#EEFFFF;
mso-ansi-language:EN-US;mso-fareast-language:PT-BR'> will be showed up five
fields to be filled up<o:p></o:p></span></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:14.25pt;background:
#262626'><span lang=EN-US style='font-size:10.5pt;font-family:Consolas;
mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:"Times New Roman";
color:#EEFFFF;mso-ansi-language:EN-US;mso-fareast-language:PT-BR'>&nbsp; &nbsp;
&nbsp; &nbsp; </span><span lang=EN-US style='font-size:10.5pt;font-family:Consolas;
mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:"Times New Roman";
color:#EE8241;mso-ansi-language:EN-US;mso-fareast-language:PT-BR'>And</span><span
lang=EN-US style='font-size:10.5pt;font-family:Consolas;mso-fareast-font-family:
"Times New Roman";mso-bidi-font-family:"Times New Roman";color:#EEFFFF;
mso-ansi-language:EN-US;mso-fareast-language:PT-BR'> a blue Search button<o:p></o:p></span></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:14.25pt;background:
#262626'><span lang=EN-US style='font-size:10.5pt;font-family:Consolas;
mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:"Times New Roman";
color:#EEFFFF;mso-ansi-language:EN-US;mso-fareast-language:PT-BR'>&nbsp; &nbsp;
&nbsp; &nbsp; </span><span lang=EN-US style='font-size:10.5pt;font-family:Consolas;
mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:"Times New Roman";
color:#EE8241;mso-ansi-language:EN-US;mso-fareast-language:PT-BR'>And</span><span
lang=EN-US style='font-size:10.5pt;font-family:Consolas;mso-fareast-font-family:
"Times New Roman";mso-bidi-font-family:"Times New Roman";color:#EEFFFF;
mso-ansi-language:EN-US;mso-fareast-language:PT-BR'> a notice box warning </span><span
lang=EN-US style='font-size:10.5pt;font-family:Consolas;mso-fareast-font-family:
"Times New Roman";mso-bidi-font-family:"Times New Roman";color:#C99677;
mso-ansi-language:EN-US;mso-fareast-language:PT-BR'>&quot;Please fill pickup
and drop off dates&quot;</span><span lang=EN-US style='font-size:10.5pt;
font-family:Consolas;mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:
"Times New Roman";color:#EEFFFF;mso-ansi-language:EN-US;mso-fareast-language:
PT-BR'><o:p></o:p></span></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:14.25pt;background:
#262626'><span lang=EN-US style='font-size:10.5pt;font-family:Consolas;
mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:"Times New Roman";
color:#EEFFFF;mso-ansi-language:EN-US;mso-fareast-language:PT-BR'>&nbsp; &nbsp;
&nbsp; &nbsp; </span><span lang=EN-US style='font-size:10.5pt;font-family:Consolas;
mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:"Times New Roman";
color:#EE8241;mso-ansi-language:EN-US;mso-fareast-language:PT-BR'>When</span><span
lang=EN-US style='font-size:10.5pt;font-family:Consolas;mso-fareast-font-family:
"Times New Roman";mso-bidi-font-family:"Times New Roman";color:#EEFFFF;
mso-ansi-language:EN-US;mso-fareast-language:PT-BR'> all fields are filled up<o:p></o:p></span></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:14.25pt;background:
#262626'><span lang=EN-US style='font-size:10.5pt;font-family:Consolas;
mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:"Times New Roman";
color:#EEFFFF;mso-ansi-language:EN-US;mso-fareast-language:PT-BR'>&nbsp; &nbsp;
&nbsp; &nbsp; </span><span lang=EN-US style='font-size:10.5pt;font-family:Consolas;
mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:"Times New Roman";
color:#EE8241;mso-ansi-language:EN-US;mso-fareast-language:PT-BR'>And</span><span
lang=EN-US style='font-size:10.5pt;font-family:Consolas;mso-fareast-font-family:
"Times New Roman";mso-bidi-font-family:"Times New Roman";color:#EEFFFF;
mso-ansi-language:EN-US;mso-fareast-language:PT-BR'> the Search button is
clicked<o:p></o:p></span></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:14.25pt;background:
#262626'><span lang=EN-US style='font-size:10.5pt;font-family:Consolas;
mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:"Times New Roman";
color:#EEFFFF;mso-ansi-language:EN-US;mso-fareast-language:PT-BR'>&nbsp; &nbsp;
&nbsp; &nbsp; </span><span lang=EN-US style='font-size:10.5pt;font-family:Consolas;
mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:"Times New Roman";
color:#EE8241;mso-ansi-language:EN-US;mso-fareast-language:PT-BR'>Then</span><span
lang=EN-US style='font-size:10.5pt;font-family:Consolas;mso-fareast-font-family:
"Times New Roman";mso-bidi-font-family:"Times New Roman";color:#EEFFFF;
mso-ansi-language:EN-US;mso-fareast-language:PT-BR'> will be displayed a table
informing Company, Model, License plate, Price, Price per day and a Rent button
<o:p></o:p></span></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:14.25pt;background:
#262626'><span lang=EN-US style='font-size:10.5pt;font-family:Consolas;
mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:"Times New Roman";
color:#EEFFFF;mso-ansi-language:EN-US;mso-fareast-language:PT-BR'>&nbsp; &nbsp;
&nbsp; &nbsp; </span><span lang=EN-US style='font-size:10.5pt;font-family:Consolas;
mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:"Times New Roman";
color:#EE8241;mso-ansi-language:EN-US;mso-fareast-language:PT-BR'>When</span><span
lang=EN-US style='font-size:10.5pt;font-family:Consolas;mso-fareast-font-family:
"Times New Roman";mso-bidi-font-family:"Times New Roman";color:#EEFFFF;
mso-ansi-language:EN-US;mso-fareast-language:PT-BR'> the Rent button is clicked<o:p></o:p></span></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:14.25pt;background:
#262626'><span lang=EN-US style='font-size:10.5pt;font-family:Consolas;
mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:"Times New Roman";
color:#EEFFFF;mso-ansi-language:EN-US;mso-fareast-language:PT-BR'>&nbsp; &nbsp;
&nbsp; &nbsp; </span><span lang=EN-US style='font-size:10.5pt;font-family:Consolas;
mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:"Times New Roman";
color:#EE8241;mso-ansi-language:EN-US;mso-fareast-language:PT-BR'>Then</span><span
lang=EN-US style='font-size:10.5pt;font-family:Consolas;mso-fareast-font-family:
"Times New Roman";mso-bidi-font-family:"Times New Roman";color:#EEFFFF;
mso-ansi-language:EN-US;mso-fareast-language:PT-BR'> will be displayed a summary
with, Model, Company, Price per day, Location, License plate, Pickup date and
Dropoff date<o:p></o:p></span></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:14.25pt;background:
#262626'><span lang=EN-US style='font-size:10.5pt;font-family:Consolas;
mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:"Times New Roman";
color:#EEFFFF;mso-ansi-language:EN-US;mso-fareast-language:PT-BR'>&nbsp; &nbsp;
&nbsp; &nbsp; </span><span lang=EN-US style='font-size:10.5pt;font-family:Consolas;
mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:"Times New Roman";
color:#EE8241;mso-ansi-language:EN-US;mso-fareast-language:PT-BR'>When</span><span
lang=EN-US style='font-size:10.5pt;font-family:Consolas;mso-fareast-font-family:
"Times New Roman";mso-bidi-font-family:"Times New Roman";color:#EEFFFF;
mso-ansi-language:EN-US;mso-fareast-language:PT-BR'> the Rent button is clicked<o:p></o:p></span></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:14.25pt;background:
#262626'><span lang=EN-US style='font-size:10.5pt;font-family:Consolas;
mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:"Times New Roman";
color:#EEFFFF;mso-ansi-language:EN-US;mso-fareast-language:PT-BR'>&nbsp; &nbsp;
&nbsp; &nbsp; </span><span lang=EN-US style='font-size:10.5pt;font-family:Consolas;
mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:"Times New Roman";
color:#EE8241;mso-ansi-language:EN-US;mso-fareast-language:PT-BR'>Then</span><span
lang=EN-US style='font-size:10.5pt;font-family:Consolas;mso-fareast-font-family:
"Times New Roman";mso-bidi-font-family:"Times New Roman";color:#EEFFFF;
mso-ansi-language:EN-US;mso-fareast-language:PT-BR'> will be displayed a summary
with, Model, Company, Price per day, Location, License plate, Pickup date and
Dropoff date<o:p></o:p></span></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:14.25pt;background:
#262626'><span lang=EN-US style='font-size:10.5pt;font-family:Consolas;
mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:"Times New Roman";
color:#EEFFFF;mso-ansi-language:EN-US;mso-fareast-language:PT-BR'>&nbsp; &nbsp;
&nbsp; &nbsp; </span><span lang=EN-US style='font-size:10.5pt;font-family:Consolas;
mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:"Times New Roman";
color:#EE8241;mso-ansi-language:EN-US;mso-fareast-language:PT-BR'>When</span><span
lang=EN-US style='font-size:10.5pt;font-family:Consolas;mso-fareast-font-family:
"Times New Roman";mso-bidi-font-family:"Times New Roman";color:#EEFFFF;
mso-ansi-language:EN-US;mso-fareast-language:PT-BR'> fill up personal
information<o:p></o:p></span></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:14.25pt;background:
#262626'><span lang=EN-US style='font-size:10.5pt;font-family:Consolas;
mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:"Times New Roman";
color:#EEFFFF;mso-ansi-language:EN-US;mso-fareast-language:PT-BR'>&nbsp; &nbsp;
&nbsp; &nbsp; </span><span lang=EN-US style='font-size:10.5pt;font-family:Consolas;
mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:"Times New Roman";
color:#EE8241;mso-ansi-language:EN-US;mso-fareast-language:PT-BR'>When</span><span
lang=EN-US style='font-size:10.5pt;font-family:Consolas;mso-fareast-font-family:
"Times New Roman";mso-bidi-font-family:"Times New Roman";color:#EEFFFF;
mso-ansi-language:EN-US;mso-fareast-language:PT-BR'> click on the Rent button<o:p></o:p></span></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:14.25pt;background:
#262626'><span lang=EN-US style='font-size:10.5pt;font-family:Consolas;
mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:"Times New Roman";
color:#EEFFFF;mso-ansi-language:EN-US;mso-fareast-language:PT-BR'>&nbsp; &nbsp;
&nbsp; &nbsp; </span><span lang=EN-US style='font-size:10.5pt;font-family:Consolas;
mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:"Times New Roman";
color:#EE8241;mso-ansi-language:EN-US;mso-fareast-language:PT-BR'>Then</span><span
lang=EN-US style='font-size:10.5pt;font-family:Consolas;mso-fareast-font-family:
"Times New Roman";mso-bidi-font-family:"Times New Roman";color:#EEFFFF;
mso-ansi-language:EN-US;mso-fareast-language:PT-BR'> all before information
provided should be displayed<o:p></o:p></span></p>

<p class=MsoNormal><span lang=EN-US style='mso-ansi-language:EN-US'><o:p>&nbsp;</o:p></span></p>

<p class=MsoNormal><u><span lang=EN-US style='font-size:14.0pt;line-height:
107%;mso-ansi-language:EN-US'>Bug: Rent Confirmation Page<o:p></o:p></span></u></p>

<p class=MsoNormal><span lang=EN-US style='color:#70AD47;mso-themecolor:accent6;
mso-ansi-language:EN-US'>Expected behavior</span><span lang=EN-US
style='mso-ansi-language:EN-US'>: When insert personal information and click
Rent Button, a confirmation page should be displayed.<o:p></o:p></span></p>

<p class=MsoNormal><span lang=EN-US style='color:red;mso-ansi-language:EN-US'>Result:
After clicking on the Rent Button, 404 error is returned.<o:p></o:p></span></p>

<p class=MsoNormal><span lang=EN-US style='mso-ansi-language:EN-US'><o:p>&nbsp;</o:p></span></p>

</div>

</body>

</html>
