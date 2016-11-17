# Template for MEAN stack application


You need npm and bower globally installed


~~~~
npm install
~~~~

~~~~
bower install
~~~~

If you are going to connect to mongo
~~~~
sudo mongod
~~~~
Otherwise comment out the connection line.
If you want to use a non-local server update the /config/db.js and uncomment the connection line in /server.js