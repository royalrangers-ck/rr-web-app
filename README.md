# Royal Rangers Frontend

## Development Dependencies

- [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
- [Vagrant](https://www.vagrantup.com/)

## Development Instructions

To start VM:

    cd vagrant
    vagrant up

To connect via SSH to VM:
    
    cd vagrant
    vagrant ssh
    
To update npm dependencies:
    
    cd vagrant
    vagrant ssh
    cd /project    
    npm install    
    
To stop VM:

    cd vagrant
    vagrant halt
    
To recreate VM:
    
    cd vagrant
    vagrant destroy -f
    vagrant up
    
To open app in browser:
    
    http://localhost:9990
    
 or
 
    http://172.16.1.88

To run test:

    karma start
