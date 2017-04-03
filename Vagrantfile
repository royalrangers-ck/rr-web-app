Vagrant.configure(2) do |config|
  # box name
  config.vm.box = "ubuntu/trusty64"

  # Configure VM
  config.vm.provider "virtualbox" do |v|
    v.name = 'RoyalRangersFrontend'
    v.memory = 1024
    v.cpus = 1
  end

  # forward application port
  config.vm.network "forwarded_port", guest: 80, host: 9990

  # create private network
  config.vm.network "public_network", ip: "192.168.2.228"

  # install nginx and dev dependencies
  config.vm.provision "shell", path: "./bootstrap.sh"
end