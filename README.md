# React + TypeScript + Vite

This Project is developed on React + TypeScript + Vite + React Router + MUI + Error Boundary

Note:

1. Inline css used for MUI (external css or internal css can be also used for separate components)
2. All values/img are replacements, as we dont have actual measurements and units
3. Followed CSS unit practice as per https://gist.github.com/basham/2175a16ab7c60ce8e001
4. In case of a page break, we utilize an Error Boundary, currently directing to the PageNotFound page
5. IPO timeline not mentioned as its not part of assignment, but we can do that

Structure:
components -> Each Page/small part is developed with component
data -> for small Assignment, JSON file created as a store ( API calls could have made for external data retrival)
types -> All Enums, constants and type has created in single file
hooks, utils, pages etc could have been created for wider use

Action Taken before commiting changes:

- Verified fallback component and loading component manually with conditions
- Type Checked, bugs removed
- Cleanup done
- Logic working checked
- Responsiveness checked
- Tracked @TODO - completed

Steps to Run Project:
- Clone this repo in your local
- do yarn or npm init
- run project "npm run dev"
