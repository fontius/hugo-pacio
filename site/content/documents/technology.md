---
title: "Technology"
subtitle: "Decentralised database with Pacio Core distributed API"
date: 2018-04-09
draft: false
layout: sidebar-docs
slug: technology
---
### 1 Technology

There are six key aspects to the Pacio Technology:
•	Pacio Blockchain
•	Pacio Database
•	Core Technologies
•	Application Programming Interface (API) to make everything available to apps
•	Application Support Tools
•	The Pacio Architecture

### 1.1 Pacio Blockchain

Pacio will use a third generation blockchain for the security, immutability, and cryptocurrency strengths of blockchain technology. This will not restrict use of Pacio to applications running on the same blockchain. Given the explosion of blockchain technology options available in 2018, Pacio has no intention of developing its own blockchain, but will work with one of the alternatives. 

Available blockchain and distributed ledger contenders to act as the host for Pacio are: Ælf (Aelf), Æternity (Aeternity), Aion, AlphaPoint, Apla, Blockstack, Cardano, Cosmos, Credits, EOS, Genaro, Hyperledger, Icon, Komodo, Metaverse, Multichain, Multiversum, NEO, Red Belly, SophiaTX, Tezos, Universa, Wanchain, and Zilliqa.
Ælf (Aelf), Aion, AlphaPoint, Cosmos, Icon, Wanchain, and possibly others include or plan to include inter blockchain capability. Aion, Icon, and Wanchain are co-operating via the Blockchain Interoperability Alliance.

Other inter blockchain technologies or options as part of a system, mostly still in development include Ark, Blocknet, ConnectionChain, Interledger, Metronome, OmiseGo, OTN, Polkadot, and Quant. 
What a cornucopia of choice! Which is wonderful, but also difficult.

Observations

Some observations and deductions can be made, however:
•	The 3rd generation blockchain and interoperable blockchain systems field is very active but in a state of flux at the time of writing in Q1 2018
•	No one chain will rule them all
•	Many contenders will survive, although some will fail or be absorbed by other projects

Conclusions

The conclusions for Pacio are:
•	Pacio must support inter blockchain operations
•	Pacio must develop modular code/systems that can be used with multiple blockchain hosts, or be moved from one to another, in the event of any blockchain becoming dominant or clearly superior to the one chosen initially
•	Pacio needs to choose as its initial development blockchain the one which best meets the above requirements
Originally Pacio had intended to use the EOS blockchain software, but in February 2018 decided that EOS was not the best possible development match for the above conclusions.
Cosmos Choice
Pacio has chosen Cosmos as its development blockchain host. Note that this decision does not preclude use of another contender in the future.
Cosmos is described as “a network of blockchains whose purpose is to solve long-standing problems in cryptocurrency and blockchain communities. The end goal is to allow many sovereign and easy-to-develop blockchains to scale and interoperate with each other, creating an Internet of Blockchains.”
Cosmos also describes the architecture, interoperability, scalability, developer friendliness, and decentralised credentials of Cosmos. This approach corresponds with Pacio philosophy.
The Cosmos-SDK Alpha Release article describes the Cosmos-SDK (Software Development Kit), which “is a generic framework that comes with all the tooling to enable you to construct your own blockchain, called a zone, in the context of the Cosmos Network.” The Many Chains, Many Tokens, One Ecosystem video referenced there is especially informative.
Relevant to Pacio are:
•	the apparently better Tendermint BFT (Byzantine Fault Tolerant consensus algorithm), which is
o	a Delegated Proof of Stake (dPoS) protocol that is not energy intensive like Bitcoin’s Proof of Work. (EOS also uses dPoS but with delegate defined differently as 21 “block producers”. A comparison from the Tendermint perspective is here, refuted by Dan Larimer of EOS here.)
o	fast, supporting thousands of transactions per second at 1000ms latencies and a mean block time of 1 to 3 seconds
o	can scale
o	secure, including handling explicitly malicious behaviour
o	has no upper limit to the number of delegates, so allowing wide decentralisation. The minimum number is 4, but Pacio when live would start with well beyond 4. 
•	the ability to plug in alternative BFT systems if another proves to be better than Tendermint
•	the blockchain interoperability
•	the modular design
•	the zone idea with applications being able to run their own blockchains
•	the scalability by horizontal and vertical means with horizontal being particularly applicable to Pacio re different applications (services)
•	the fact that "forking" to do things our way for the Pacio blockchain is not an issue as it possibly is with other options, as the whole system is set up to allow this
•	the retention of sovereignty
•	the flexibility in both a technical and business sense.
The Comos/Tendermint architecture provides a starting point for Pacio node development:
 
 
where the Cosmos/Tendermint core is in green, and a Pacio node in yellow is implemented via plugin modules built using the Cosmos SDK, linked by the Tendermint Application BlockChain Interface (ABCI).
1.2 Pacio Database
The Pacio Database will store the following in a distributed database in a semantic, structured way organised via the Standardised Semantic Information Model (SSIM):
•	Member (PIO holder, potentially an app developer, either an entity or an individual) data
•	Entity data
•	People (individuals) data
•	Transactional and accounting data
•	Non-transactional data
•	any other data whether financial or not, public or private, that a Pacio member (app developer) chooses to add
•	activity logs
The data will be flexibly defined using SSIM Data Objects (SDOs) and SSIM Taxonomies q.v. for more on the types of data to be stored. It will be possible to store historical, or traditional system data in its original form.
Data will be private or public as set by its creator or owner, including for just part of a record eg a person’s name might be public, but not his/her email address.
Data will be stored in NoSQL SSIM form. Other protocols will also be available externally for interaction with the database via the API, as described in section 1.4 Application Programming Interface (API).
The database will involve a network of blockchains, decentralised databases, and decentralised file storage systems. This structure will allow entities to keep their data, other than common index and shared Single Entry Accounting done right! (SEA) transaction data, in a separate distributed database or chain that is private and unique to them. Pacio will tie this network together via a shared index, akin to the Internet’s DNS (Domain Name System) that was one of the first distributed databases. 
The database network is expected to include private instances of an entity’s preferred blockchain eg EOS, a Cosmos zone, or a distributed ledger such as Hyperledger etc, and instances of a distributed database such as BigchainDB. Particularly interesting for Pacio is the fact that BigchainDB 2.0 is Byzantine Fault Tolerant using Tendermint as used by Cosmos, the blockchain chosen for Pacio development. Scalability of Bigchain is proposed to be achieved using Cosmos!
Other parts of the database hierarchy could be Holochains and IPFS for files. Other distributed storage systems may also be considered as technologies evolve.
The Pacio ideal is for people and entity index data to be global with only one record per person or entity, for data integrity and better reporting reasons, plus the avoidance of out of date or inconsistent information errors from differently updated duplicate records. For example, if a person is a director of multiple companies, there should be only one database entry for that person, referenced by the SDO for Directors in the entity records for the companies. Entities will be handled similarly. For example, an accounting practice that audits multiple companies should occur in the database only once and be referenced by the companies’ SDO for Auditors. Attaining this global, one record only per person or entity ideal, will entail some reconciliation and possible conversions, regarding the order of addition of people and entities to the database. The Reconciliation and Registration aspect of the proposed Global Digital Identity Support service covers this.
The Querying and Reporting service will provide database querying and reporting facilities. GraphQL, described as “a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.” will be a part of the system.
1.3 Core Technologies
Pacio will include the following core or intrinsic (built in) technologies:
•	Standardised Semantic Information Model (SSIM)
•	Target Average Rate Index (TARI)
•	Single Entry Accounting done right! (SEA)
•	Interoperable Business Documents
•	Pacio Messaging System (PMS)
•	Pacio Scripting Language (PSL)
•	PIO Technology
1.3.1 Standardised Semantic Information Model (SSIM)
The Standardised Semantic Information Model (SSIM) is Pacio’s way of storing and managing accounting and other data. SSIM is fundamental to Pacio’s semantic blockchain.
SSIM data is standardised to be comparable across entities, jurisdictions/regions/countries, and accounting standards.
SSIM data is semantic because any piece of data can be indexed or referenced by what it is about ie what the item of data applies to, optionally tagged to any required level of detail.
SSIM, like all of Pacio, is open source, and will be made available for use by others, and for potential adoption as a standard protocol.
Semantic Blockchain
The semantic blockchain via SSIM is a key part of Pacio and its contribution to the web 3.0 future.
For more on the goals and purpose of the Semantic Blockchain see:
Strategies for integrating semantic and blockchain technologies 
Semantic blockchain
A more pragmatic Web 3.0: Linked Blockchain Data
SSIM Protocol Interfaces
Pacio will be multi-lingual, able to work with multiple data protocols, as part of supporting inter entity transactions, and international standards.
Pacio works with SSIM internally, and apps and users will be able to work with SSIM directly, but are not required to do so, as interfaces will be developed for any data description or exchange protocol for which there is demand. SSIM will be designed and built to allow easy addition of additional interface protocols. The protocols expected to be supported are:
•	SSIM native document format
•	UBL or International Standard ISO/IEC 19845 “specifies the OASIS Universal Business Language (UBL), which defines a generic XML interchange format for business documents that can be restricted or extended to meet the requirements of particular industries. Specifically, UBL provides the following:
o	A suite of structured business objects and their associated semantics expressed as reusable data components and common business documents.
o	A library of XML schemas for reusable data components such as "Address", "Item", and "Payment", the common data elements of everyday business documents.
o	A set of XML schemas for common business documents such as "Order", "Despatch Advice", and "Invoice" that are constructed from the UBL library components and can be used in generic procurement and transportation contexts.”
What is UBL? Further describes it. From that page: “The commercial invoice is but one of a family of 65 document types formally described as semantic business objects in business documents, each with an associated XML schema, in the OASIS Universal Business Language (UBL) Standard, also internationally standardized as ISO/IEC 19845.”
•	Open EDI or International Standard ISO/IEC 14662:2010 “describes, through two perspectives of business transactions, significant aspects relevant to the interoperability of information technology systems used by Open EDI Parties engaging in Open-edi. The perspectives are: 
o	business aspects such as business information, business conventions, agreements and rules among Open-edi Parties;
o	information technology aspects which are necessary in the Open-edi systems to support the execution of business transactions.”
•	RDF or Resource Description Framework. From the RDF W3C page: “RDF is a standard model for data interchange on the Web. RDF has features that facilitate data merging even if the underlying schemas differ, and it specifically supports the evolution of schemas over time without requiring all the data consumers to be changed.
RDF extends the linking structure of the Web to use URIs to name the relationship between things as well as the two ends of the link (this is usually referred to as a “triple”). Using this simple model, it allows structured and semi-structured data to be mixed, exposed, and shared across different applications.
This linking structure forms a directed, labelled graph, where the edges represent the named link between two resources, represented by the graph nodes. This graph view is the easiest possible mental model for RDF and is often used in easy-to-understand visual explanations.
•	Ocean is A Decentralized Data Exchange Protocol to Unlock Data for AI. From the site:
Ocean Protocol is supported by a Singapore based non-profit foundation (Ocean Protocol Foundation Ltd), whose mandate is to ensure open access to the protocol and platform, provide data governance, encourage the network ecosystem growth and take measures to ensure that the platform becomes ever more decentralized with time.
What is Ocean Protocol?
Ocean Protocol is a decentralized data exchange protocol that lets people share and monetize data while guaranteeing control, auditability, transparency and compliance to all actors involved.
Data Providers and Custodians need to feel safe before they will comfortably share data and Ocean Protocol is the solution.
How Ocean Protocol Works
Ocean Protocol provides the underlying technical foundation that data marketplaces need to connect data providers with data consumers in a trusted environment. It nurtures a data ecosystem and community.
Ocean Protocol also enables developers to create new and innovative services for leveraging data.
•	XBRL (eXtensible Business Reporting Language) a standard language for reporting on or comparing business information. XBRL has been adopted by most developed countries for the benefit of shareholders and government to standardise business and financial reporting to increase the transparency and accessibility of business information by using a uniform format.
XBRL is, as its name says, a reporting language. It is not appropriate for data storage definition purposes, so the SSIM/XBRL interface will be output only. SSIM, by comparison, is applicable for data definition, data transfer, and reporting. SSIM is simpler than XBRL, yet more powerful, more elegant, and understandable by business people without need for training or study. SSIM is a chart of accounts alternative while XBRL is not. SSIM builds upon David Hartley’s work with software for the Accounting Profession over 40 years, and the work of David and Charles Woodgate, a UK accountant, in 2011-2013 following the introduction of mandatory XBRL company reporting in the UK.
There are likely to be other protocols supported over time.
SSIM Data Objects (SDOs)
SSIM Data will be stored in NoSQL database form as smart named objects, called SSIM Data Objects (SDOs), whose structure is defined via taxonomies. SDOs are flexible and may be simple – a single key/value pair – or “smart”, with the ability to hold lots of information, and to process it too. SDOs provide much of the power of SSIM. They are a powerful addition to previous data protocols, and will allow SSIM to cope with data or query/report requirements of any complexity, while keeping things simple enough for understanding by business or individual users without in depth study.
For example, in the entity/business case SDOs replace Charts of Accounts used in traditional accounting systems, with only a small number, only 1,000 or fewer SDOs being needed to hold all SSIM data for any entity, compared with tens of thousands of accounts in some Charts of Accounts based systems.
Data held in SDOs is indexed in various ways, including via any number of tags, that are organised by role, folio and properties applicable to SDOs. The tagging supplies the semantic information about a data item. Tagging is like that used by XBRL but is more flexible, more understandable by untrained users, and is applied at the input/data creation point for every piece of data, rather than in aggregate form later in the process as for XBRL. 
SDOs know about at the SDO level, and optionally differently for individual members of the object, where applicable or allowed:
•	the sort of data they hold by reference back to the taxonomies
•	whether the data is for entity, member, individual, or public use by reference back to the taxonomies
•	whether the data is for specific app(s), or any app by reference back to the taxonomies
•	if/how the data can be edited/updated. If the item is updateable then:
o	whether the data is transactional in nature and is to be held immutably, or not, and if not, whether changes need to be logged or not.
o	form of updating if numeric eg sum/replace
•	the folio(s) apply with any property exclusions
•	indexing
•	country/region/jurisdiction/language applicability
•	country/region/jurisdiction/language exclusion
•	whether text values are to be held as a set by language
•	relationship(s) to other object(s)/member(s)
•	individual detailed description if required by tagging by folio-property with controls from the taxonomy to prevent silly or inconsistent tagging. This tagging at the source or lowest level is part of what makes SSIM understandable to humans – people know how to describe an individual piece of data when it is being added to Pacio, even if they might not know what higher level category it might be aggregated to for a financial report, for example. This bottom up approach with the ability to add any number of tags to an item, is the fundamental difference between SSIM and top down or after the fact approaches such as XBRL.
•	periods – timing of something if applicable
•	jurisdiction/country/region/language if applicable
•	whether static or dynamic. (Dynamic data can be included or excluded from queries or reports according to nominated criteria eg for different liability risk assessments, different depreciation calculations, provisions etc.)
•	what sums (additions) are to be performed with numerical data if any
•	what additional checks if any should be performed with the data
•	how to compare and convert the data for export and output, including output XBRL
SDOs will also have user and entity specific settings for:
•	whether the data is public or private
•	verification state for person or entity, including KYC and AML checks
•	whether the data is available for the Pacio Authenticated Accounting and Real Time Feed for Oracles or Apps 
•	whether the data is available for the Pacio Data Exchange/Monetisation service, and if so, by what method and price in PIOs
One SDO can hold lots of data. As an example, a SDO named PPE could hold all data for all Property Plant & Equipment assets. SDOs at the core of SSIM prevent many errors ever getting started.
SSIM Taxonomies
SSIM will use flexible taxonomies (data description dictionaries), a lot of them, to describe the data to be stored in SDOs, including:
•	Data ownership types: entity, individual, member (PIO holder), app developer, app
•	Data storage types: eg Json, Jasonb, binary, text, date/time, integer number, floating point number, file, image, etc with names by language
•	Countries, regions, jurisdictions, and languages
•	Other taxonomies eg XBRL taxonomies
•	Entity types, including blockchain structures such as DAOs, and sub-entity types such as branch
•	Entity data. This will need to cover many things including settings with provision for app and entity specific extensions
•	Sub-entity data
•	Business types eg bank, stock exchange, manufacturer, farmer etc with names per country/region/jurisdiction/language
•	Business terms eg price, invoice, receipt, purchase order, quote, accounts payable/creditors, accounts receivable/debtors etc, with name per country/region/jurisdiction/language
•	People (individual) including digital identity data
•	Member (PIO holder) data
•	App developer data
•	App data
•	Transaction types, with name per country/region/jurisdiction/language
•	Transactions and fields – id, date/time, cryptocurrency, fiat currency, unique transaction identifier (UTI), etc
•	Activities
•	Interoperable Business Documents
•	Pacio Scripting Language (PSL) Scripts
•	Pacio Messaging System (PMS) Messages
•	Single Entry Accounting done right! (SEA) data
•	Target Average Rate Index (TARI) data 
•	Ricardian Contracts data
•	Internet of Things (IoT) data
•	Artificial Intelligence Interface data
•	Real time public data such as exchange rates, crypto and stock prices etc
•	Ledger type data eg accounts receivable/debtors, accounts payable/creditors, inventory, prices, bills of materials, human resources/payroll, asset management with depreciation, tax accounting, and owners’ equity management, with jurisdictional variations supported
•	Files, tables, charts, images, music, videos, blobs … non-transactional data
•	Lists of anything eg cities, phone codes, stock exchanges ….
•	Folios and properties used to further tag or describe data (next section)
•	Logs
•	Any other data whether financial or not, public or private, that a Pacio member (app developer) chooses to define and add
There will be global (universal or master) taxonomies and private, member/person/app/entity specific ones. Any data that is intended for inter entity exchange or comparison must use a global taxonomy. The global taxonomies will be maintained by Pacio Core in cooperation with Pacio members.
SSIM Text Format (STF)
SSIM data will be able to be serialised ie converted to a text form (STF) like Json for export or output. STF data can be imported or passed to API functions.
1.3.2 Target Average Rate Index (TARI)
The White Paper Section 12 Business Improvement via TARI service describes the TARI methodology and usefulness.
TARI® is a layer above SSIM providing real time actual vs target feedback. With SSIM providing real time support for the calculation of the value added per unit of activity in each sale, apps using TARI® can deliver the information as the sale is being processed. 
Via SSIM and the Data Processing with Accounting service Pacio ensures that everything needed for TARI® is available to the Business Improvement via TARI service.
1.3.3 Single Entry Accounting done right! (SEA)
Accounting via Pacio and SSIM will allow a single transaction on the blockchain to be a part of the record of both entities involved in a counterparty transaction. This will greatly reduce opportunities for fraud and reduce the need for auditing. Thus: 
SEA = Single Entry Accounting done right!
The “done right!” is to distinguish SEA from single entry bookkeeping with no checks or balances at all, as used before the advent of double entry accounting with Friar Pacioli in the 15th century.
The inter entity aspects of Pacio will assist apps to use SEA.
Use of a blockchain transaction like this is also known as "Triple Entry Accounting" or TEA. The term was coined in 1989 by Yuji Ijiri as mentioned in the hackernoon Why Everyone Missed the Most Important Invention in the Last 500 Years article, and the Wikipedia entry: Momentum accounting and triple-entry bookkeeping.
Other early references were Triple Entry Accounting in 1995, and Triple Entry Accounting in 2005 by Ian Grigg, describes the concept as "The Receipt is The Transaction". That paper predates blockchain but introduces the "digitally signed receipt, an innovation from financial cryptography".
Triple Entry Accounting with its current blockchain meaning, building on Ian Grigg’s work, differs from the 1989 Yuji Ijiri momentum accounting meaning, and has replaced the initial meaning of the term. The blockchain meaning has become generally accepted usage since about 2014 with Triple Entry Bookkeeping With Bitcoin.
The “Triple” in TEA does worry some people, though, as it sounds like more work than normal double entry accounting, and less efficient, thus Pacio’s use SEA instead of TEA.
The first attempt to apply the concept of TEA was with a ConsenSys system named Balanc3. Work commenced in 2015 as described in this video: Balanc3 - Triple Entry Accounting and references the 2005 Triple Entry Accounting paper by Ian Grigg. The book “Blockchain Revolution” 2016 by Don & Alex Tapscott devotes a section to Triple Entry Accounting, and also mentions Balanc3. 
No real systems using TEA are yet in use. Pacio will change that.
Within an entity, either for the entity impact of a SEA transaction, or for a transaction with no external party involved, Drs and Crs and double entry accounting will still be involved, but the core idea that will reduce auditing complexity and reduce opportunities for fraud, is the single entry on the blockchain for transactions involving another party.
Ian Grigg of the seminal 2005 paper is now a partner in block.one, the company building the EOS 3rd generation blockchain. A reference to TEA in the EOS blog, I am iang, posted by Ian in April 2017 was:
1.3.4 Interoperable Business Documents
Interoperable business documents define business processes and the stages, or steps, or choreography involved.
Pacio will be multi-lingual, able to work with multiple business document protocols, as part of supporting inter entity transactions, and international standards, as described in SSIM Protocol Interfaces including SSIM native document format, UBL, Open EDI, and RDF.
These protocols define common business documents such as "Order", "Despatch Advice", and "Invoice", 65 of them in the case of UBL.
Pacio permits extension of document definitions, or the creation of new ones.
Interoperable business documents will define business processes and the stages, or steps, or choreography involved.
The Pacio Messaging System will be the means of controlling or triggering, and recording, the movement through the stages, of both inter entity and intra entity business processes defined by interoperable business documents. The messages will provide a progress trail.
Application Support Tools will include provide interoperable business document templates, and a JavaScript library to assist apps in creating and then maintaining specific documents with the help of the Administration utility.
1.3.5 Pacio Messaging System (PMS)
Pacio will implement a general and flexible intra app, inter app, and inter entity messaging system.
Apps will be able to create custom messages via the Administration service.
Messages will be used to trigger events within an app (intra app messaging), within another app for the same entity (inter-app messaging), or within another entity by whatever app processes it (inter entity messaging).
Messages will be the means of controlling or triggering, and recording, the movement through stages, or a choreography as it is sometimes called, of both inter entity and intra entity business processes using Interoperable Business Documents. The messages will provide a progress trail.
Messages will have the following properties:
•	can be sent and received (processed) by any app using Pacio. That includes external oracles. 
•	have a body for transmitting data if so defined.
•	can be specific or be a broadcast type message.
•	may optionally include an expiration time.
•	will be able to ask for acknowledgment of receipt.
•	will specify the sender (entity, user, and app), and the recipient or recipients (entity{, user{, app}}) if not a broadcast type message
•	terms eg invoice, will be taxonomy based to adjust according to jurisdiction and language of the entity and app user.
Examples of messages are:
•	Message not understood – for use if the receiving entity or app lacks a process for handling the message
•	SEA transaction created
•	Request quote, quote request received
•	Request proposal, proposal request received
•	Send purchase order, purchase order received, purchase order item(s) unavailable – part ship or cancel, amend purchase order, purchase order modification received and accepted/rejected, cancel purchase order, item on back order, etc re purchase orders
•	Order being processed, order shipped, order delivered, order received
•	Approved (for xxxx), not approved (for xxx)
•	Invoice sent, invoice received, invoice part paid, invoice fully paid, etc re invoices
•	Current price (or anything as per a taxonomy term) is xxxx {valid for xxxx}
•	Market xxxx has opened/closed
•	….
Given that interoperable business document protocols specify many document types (65 in the case of UBL), it is likely that thousands of messages will need to be defined to handle all the possible interactions.
The messaging system is expected to be widely used by Pacio based apps, including for applications not yet imagined.
Web and Phone App Use
Web and phone apps will be able to create custom messages, send messages, and receive (process) messages with the help of the Pacio Messaging JavaScript library.
Smart Contract Use
In the Pacio Blockchain case smart contracts will be able to send messages. Smart contracts will be able to be triggered by receipt of a message.
For other blockchain smart contracts, such as Ethereum ones, the associated web or phone app could handle the Pacio messages, or the smart contract could do so by means of a system to enable external calls to be made, such as iExec. Libraries may be developed to assist with this process on a blockchain by blockchain basis.
1.3.6 Pacio Scripting Language (PSL)
Pacio will include PSL as a general scripting language that allows free form text.
PSL scripts will be used for:
•	Running queries and generating reports via the Querying and Reporting service
•	Defining Event Triggers 
•	Defining how to capture data for the Real Time Public Data Capture utility
•	For passing to some API functions to be run in the context of the function to generate the return value(s).
•	As general admin scripts eg for export
A possible language to be used to develop PSL is zygomys. From the github page:
why use zygomys?
zygomys allows you to create a Domain Specific Language to drive your program with minimal fuss and maximum convenience.
It is written in Go and plays nicely with Go programs and Go structs, using reflection to instantiate trees of Go structs from the scripted configuration. These data structures are native Go, and Go methods will run on them at compiled-Go speed.
Because it speaks JSON and Msgpack fluently, zygomys is ideally suited for driving complex configurations and providing projects with a domain specific language customized to your problem domain.
PSL will be able to call API functions, subject to permissions.
It is not intended that PSL will be able to generate payment transactions, but it could generate a list of payments for an app to perform.
PSL will be able to embed database and calculated results in its output. A PSL script can optionally have arguments, so that it can be invoked with different values passed to it.
For reporting on entity, people, transactional and ledger data stored using SSIM Data Objects (SDOs), PSL will make use of the power of SDOs for much of its work, including generating XBRL output when requested.
PSL scripts used to generate HTML reports can include page numbers, cross references, and links.
1.3.7 PIO Technology
Pacio will implement extensions to the cryptocurrency facilities provided by the chosen blockchain software to implement the additional features of the PIO – the Pacio Cryptocurrency.
1.4 Application Programming Interface (API)
The Pacio Application Programming Interface (API) will make Pacio data and technologies available as a set of Core Services and Utilities to any app that can call an API via the Internet with the help of the JavaScript libraries from 1.5 Application Support Tools.
The value of the API approach is explained by the Shedding Light on APIs as a Market Differentiator article. 
The app, or the app’s device, will not need to do anything special such as run node software, or use a special browser plugin such as Metamask. This aspect of the API may be thought of as being like the Infura API for the Ethereum blockchain but will go beyond that in scope eg wallets and real time data feeds, while also being easier to use.
The Pacio API will make it simple for phone, browser (web page), computer, and smart contract apps to use Pacio. That will allow developers to incorporate Pacio services in their applications, without needing to invest time and money in development apart from learning to use the API.
Data Interchange Format
The API will support the following data interchange formats, though some of them only for certain service, utility, or function calls for which they would be appropriate:
•	SSIM Text Format (STF)
•	Json (JavaScript Object Notation) data-interchange format as the default
•	Jsonb, a binary form of Jason
•	Data protocols for which SSIM Protocol Interfaces have been defined 
•	Streams or files where the result from a service/API call is a stream or file
Smart Contract Use
In the Pacio Blockchain case smart contracts will be able to directly call some API functions, those that return discrete amounts of data eg not a stream or an html page.
For other blockchain smart contracts, such as Ethereum ones, the associated web or phone app could make the Pacio API calls, or the smart contract could do so by means of a system to enable external calls to be made, such as iExec. See also Blockchains Need iExec: The Market Just Hasn’t Realized It Yet. Libraries may be developed to assist with this process on a blockchain by blockchain basis.
1.5 Application Support Tools
Pacio will provide and continue to develop tools to support application use of Pacio. These will include:
•	Wallet apps, including multisig ones
•	JavaScript libraries for calling the API, organised by service
•	A JavaScript library for processing messages
•	Frameworks for apps ie a starting point for the development of apps
•	Templates for interoperable business documents with a JavaScript library to assist in creating specific documents
•	JavaScript libraries for assisting Pacio Administration utility operations
•	Sample apps
•	Internationalisation support
1.6 The Pacio Architecture
The Pacio Architecture will involve:
•	Node software that implements:
o	the Pacio blockchain 
o	the Pacio Database
o	the PIO implementation
o	the Pacio API services and utilities
•	web gateway access to nodes for apps, like Infura provides for Ethereum, so that apps do not need a local node
Detailed architectural design decisions will be made during development starting with the Cosmos/Tendermint SDK (Software Development Kit) as described in Pacio Blockchain:
 
 
where the Cosmos/Tendermint core is in green, and Pacio node software in yellow is implemented via plugin modules built using the Cosmos SDK, linked by the Tendermint Application BlockChain Interface (ABCI).
