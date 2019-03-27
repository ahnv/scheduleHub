# Schedule Once Node Exercises

## Marco Polo

### About 
The server starts at http://localhost:3000/ with default range from 0 to 1000. Passing the `end` query parameter to change the limit.

Sample Urls:
`http://localhost:3000/`
`http://localhost:3000/?end=500000`
`http://localhost:3000/?end=1000000`

### Scripts 

- Run the Code
```
npm start
```
- Run Unit Tests
```
npm run test
```
- Run Load Test
```
npm start
npm run load-test
```

### Tests
#### Unit Test

4 Tests are configured with end parameters as `30`, `1500`, `5000`, `1000000`

#### Load Test
The test is split into 3 phases. The test works by sending number of requests defined in arrival rate every one second for the duration
- Phase 1:
-- Duration : 1 sec
-- Arrival Rate : 1
- Phase 2:
-- Duration : 10 sec
-- Arrival Rate : 10
- Phase 3:
-- Duration : 30 sec
-- Arrival Rate : 10

## Simple NodeJs Question

NodeJs should not be used in a CRUD heavy application. Since NodeJS utilizes event based, non blocking I/O model using a single CPU. So all the intense CPU processing activity will block the incoming requests, since the Thread is already blocked.

## User Story
Run the code by using 
```
node code.js
```