The project is a web app solution aiming to help the community get through the COVID-19 pandemic, with two core functionalities: real-time store congestion status tracking and inventory tracking.

## Interface Walk-through
![Covid Grocery Tracker Demo v.1.0](demo/demo1.GIF)

## File Structure
```
- 📂 __covid\-grocery\-tracker__
   - 📂 __api__
     - 📄 [app.js]
     - 📂 __bin__
     - 📄 [node\_modules]
     - 📄 [package\-lock.json]
     - 📄 [package.json]
     - 📂 __public__
       - 📂 __images__
       - 📂 __javascripts__
       - 📂 __stylesheets__
         - 📄 [style.css]
     - 📂 __routes__
       - 📄 [apiKey.js]
       - 📄 [index.js]
       - 📄 [inventory.js]
       - 📄 [users.js]
     - 📂 __store\_data__
       - 📄 [store\_data.json]
     - 📂 __views__
   - 📂 __demo__
     - 📄 [demo1.GIF]
   - 📄 [node\_modules]
   - 📄 [package\-lock.json]
   - 📄 [package.json]
   - 📂 __public__
     - 📄 [GroceryJam\_Logo.png]
     - 📄 [favicon.ico]
     - 📄 [groceries.png]
     - 📄 [index.html]
     - 📂 __scripts__
       - 📄 [randPointsGenerator.py]
   - 📂 __src__
     - 📄 [App.css]
     - 📄 [App.test.js]
     - 📂 __components__
       - 📄 [SearchBar.js]
       - 📄 [StoreItem.js]
       - 📄 [StoreList.js]
       - 📄 [TodoItem.js]
       - 📄 [TodoList.js]
     - 📄 [index.js]
     - 📄 [style.css]
```
## The Team
The Early Birds #invt_challenge_team29
- Developers: Nancy(Leqi) Wan, Luke Zhang, Alexander (Alex) Efimov, Garima Aggarwal
- Communication Analyst/Project Coordinator: Rachel Nakka, Hayley (Hae Eun) Lee

## Technologies
#### FE:
- ReactJS, React BootStrap for inventory query page
- HTML/CSS, JavaScript and Google Maps API for congestion page(map)
#### BE:
- NodeJS used to write backend APIs to retrieve GCP_API_KEY to access GCP services and inventory data
- Google Maps APIs for store data

 ## Core Feature Specifications

 - getCongestion (*public/index.html*)
	 - compute the congestion level based on the store area(radius) and the weight of nearby geo-points; 
	 - accumulate the weight if the geo-point is within the store's range
	 - determine the congestion level according to BC's public health standard
 - calcArea (*public/index.html*)
	 - calculate the polygon area of a store(storePath corresponds to the four viewport coordinates)  
 - getPoints (*public/index.html*)
	 - get a list of random geo-points near the current location
	 - the list of random points are generated from a python script *public/scripts/randPointsGenerator.py*
 - getStoresByAvail (*src/components/StoreList.js*)
	 - get a list of stores based on product type's availability through a fetch API call

## Run the project
To initialize the front-end server, please run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

To initialize the back-end server, please run the following line under `/api` folder:

### `npm start`

**Note: Please remember to add a `.env` under root to set your environment variables(i.e. here you need to set GCP_API_KEY in order to use the GCP service)

## Award
The project has won the RBC 2020 Summer Innovation Challenge Best Hand-off Package award, out of 30 teams.
