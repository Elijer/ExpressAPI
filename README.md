# ExpressAPI
>## Creating an Nginx, Node.js, Express.js API w/ MongoDB, for production, on  (*gasp*) Digital Ocean!

## Articles: The links I used to make this, without really any experience beforehand
1. [How To Install Nginx on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-16-04) (for production) DONE!! (breaks down the Nginx file tree pretty well)
2. [How To Set Up Let's Encrypt with Nginx Server Blocks on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-set-up-let-s-encrypt-with-nginx-server-blocks-on-ubuntu-16-04) (didn’t do it this way)
    1. [How To Set Up Nginx Server Blocks (Virtual Hosts) on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-set-up-nginx-server-blocks-virtual-hosts-on-ubuntu-16-04) (got redirected here by #2 >.<) (didn’t do it this way)
3. [How To Secure Nginx with Let's Encrypt on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-16-04) (Same tune as #2, but WITHOUT server blocks. Which I am still learning about.) DONE!!!
4. [Getting Domain name DNS records set up for your server](https://www.digitalocean.com/community/tutorials/an-introduction-to-digitalocean-dns) DONE!!!
5. [How To Set Up a Node.js Application for Production on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04) (with Nginx)
6. [How to Install MongoDB on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-16-04) (includes info on configuring firewall for mongoldb)
7. [Installing Express with npm](https://expressjs.com/en/starter/installing.html). Make sure it’s within the app folder doh! (DONE!!!)
8. Next step: creating a simple Hello world Nginx, Node, Express app. If I can do this, I should almost be able to bridge all of this back to the Udemy tutorial!!!! [Used the end of this tutorial and something called PM2 to finish making a working API for production on a VPS like Colt Steele does in a testing environment on Cloud9](https://scotch.io/tutorials/deploying-a-node-app-to-digital-ocean)  DONE!!! Got it to display a routed response at [squarrow.com] :))))))

## Github
1. Setting up a remote https://help.github.com/articles/adding-a-remote/

## Nginx

To stop your web server, you can type:					sudo systemctl stop nginx
To start the web server when it is stopped, type:			sudo systemctl start nginx
To stop and restart:									sudo systemctl restart nginx
check status:										systemctl status nginx


### Namecheap
Username: Elijahrk

### [Freenom.com]
This site offers many domain names free for 3 months!!! 


## Let’s Encrypt
https://www.ssllabs.com/ssltest/analyze.html?d=www.squarrow.icu
https://www.ssllabs.com/ssltest/analyze.html?d=squarrow.icu

## MongoDB
See link #6
[More Digital Ocean articles about Mongod](https://www.digitalocean.com/community/search?q=mongodb)
start mongo:					sudo systemctl start mongod
check mongo:					sudo systemctl status mongod
stop mongo:					sudo service mongod stop
I guess this also stops it?		sudo systemctl stop mongod
automatically enable
mongo when server starts:		sudo systemctl enable mongod

## Pm2
To launch PM2 on system startup or reboot, enter the command below:
pm2 startup systemd
(also throws some extra commands and info at you that could be useful)
HOWEVER///// When using this, MAKE sure use the “pm2 start index.js” command, INSTEAD of “node index.js”. Not sure exactly why this is, but I had issues with 1) Node trying to use a port that was already in use (3000) and even when I tried to kill the process running on that port, somehow (and I think pm2 is responsible) the port would stay “alive”. Say yah. Use pm2 start index.js, or even pm2 start index.js -f if something is off.
Another note — make sure you restart the the Nginx server before doing this.
——Call to action here: it seems like whenever I make a change, I have to run pm2 start index.js -f, and that doesn’t seem right. Look into this.

## Cloud9
[Tutorial for Making IP for cloud9 environment public](Making IP for cloud9 environment public)
to get instance:   		 curl http://169.254.169.254/latest/meta-data/instance-id
to get pub IP: 			curl http://169.254.169.254/latest/meta-data/public-ipv4
Instance ID:           		i-07e8a4b8aacfa50d2
public IP address:   		 107.23.164.62
subnet ID: 			subnet-69148b21
Also, remember that Cloud9 really seems to run on port 8080. OR the env.Port whatever, maybe. But not 3000 it seems like. So, if you’re gonna do testing and then also push it to the production VPS, then you might need to switch the port each time.

## Misc
It would probably make sense to make like, copies of this app. Copies of the droplet, or copied branches or something. Not sure yet. But if I make it again, I should do this. A starting off point for this type of application that would allow me to skip a bunch of config stuff.
