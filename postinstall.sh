# install nw-gyp
npm install -g nw-gyp

# recompile serialport for node-webkit v0.8.0
cd node_modules/serialport
nw-gyp rebuild --target=0.8.0
cd ../..

# create tmp install dir
mkdir install_tmp
cd install_tmp

# clone ino repo
git clone https://github.com/fradinni/ino.git
cd ino

# build ino manually, make file is corrupted for MacOS
sudo python setup.py install --record ../../ino_installed_files.txt

# back to ArduIDE directory
cd ../..

# remove tmp install dir
sudo rm -Rf ./install_tmp
echo "Post install [Finished]"