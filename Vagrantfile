Vagrant.configure(2) do |config|

  config.vm.box = "ubuntu/trusty64"
  config.vm.box_version = "14.04"
  config.vm.hostname = "ux-web"

  # Forwarding for web application
  config.vm.network :forwarded_port, guest: 8000, host: 8000
  # Forwarding for livereload
  config.vm.network :forwarded_port, guest: 35729, host: 35729

  config.vm.provider "virtualbox" do |vb|
    vb.memory = 2048
  end

  config.vm.provision "shell", inline: <<-SHELL
    echo "--------------------------"
    echo "Adjust DNS for TD VPN"
    echo "--------------------------"
    sudo echo 'nameserver 153.65.2.111' >> /etc/resolvconf/resolv.conf.d/head
    sudo resolvconf -u
    sudo cat /etc/resolv.conf

    echo "--------------------------"
    echo "Installing system packages"
    echo "--------------------------"
    # Install Docker PPA
    sudo sh -c "echo deb https://apt.dockerproject.org/repo ubuntu-trusty main > /etc/apt/sources.list.d/docker.list"
    sudo apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D
    # Add NodeJS PPA
    curl -sL https://deb.nodesource.com/setup_4.x | sudo bash -

    sudo apt-get update
    sudo apt-get install -y build-essential nodejs git git-flow docker-engine=1.8.2-0~trusty

    echo "-----------------------"
    echo "Installing Node Modules"
    echo "-----------------------"
    sudo npm cache clear
    sudo npm set progress=false
    sudo npm install --global gulp-cli
    cd /vagrant
    npm install
    echo "cd /vagrant" >> /home/vagrant/.bashrc
  SHELL
end
