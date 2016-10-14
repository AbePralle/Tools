Build/delta: Delta.rogue Makefile
	mkdir -p Build
	roguec Delta.rogue --main --output=Build
	cd Build && g++ -o delta Delta.cpp
	cp Build/delta /usr/local/bin/delta
	chmod u+x /usr/local/bin/delta

