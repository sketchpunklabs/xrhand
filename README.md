# XR Hand

[![npm](https://img.shields.io/badge/Sponsor-donate-blue?style=flat-square&logo=github)](https://github.com/sponsors/sketchpunklabs)
[![twitter](https://img.shields.io/badge/Twitter-profile-blue?style=flat-square&logo=twitter)](https://twitter.com/SketchpunkLabs)
[![youtube](https://img.shields.io/badge/Youtube-subscribe-red?style=flat-square&logo=youtube)](https://youtube.com/c/sketchpunklabs)
[![Patreon](https://img.shields.io/badge/Patreon-donate-red?style=flat-square&logo=youtube)](https://www.patreon.com/sketchpunk)


<img align="right" width="160" src="/imgs/first_hand.png?raw=true">

Repo to hold game physics prototypes using web technologies like WebGL & ThreeJS
Demos : https://sketchpunklabs.github.io/xrhand/

### Development Setup ###
```
git clone --depth=1 https://github.com/sketchpunklabs/xrhand
cd xrhand
npm install
npm run start
```

### Terminal to share web port to Oculus ###
```
cd c:\Program Files\Oculus Developer Hub\resources\bin
adb reverse tcp:1352 tcp:1352
```