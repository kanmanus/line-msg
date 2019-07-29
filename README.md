# LINE Messaging API Helper
A simple JSON message object helper library that allows you to easily generate message objects in the LINE Messaging API

[![NPM](https://nodei.co/npm/line-msg.png?downloads=true&stars=true)](https://nodei.co/npm/line-msg/)

## Getting Started
Using npm:
```
npm install --save line-msg
```
Import the `line-msg` helper library into the file
```
const msg = require('line-msg');

...
```

## Usage Example
#### Text
```
let text = msg.text({
    text: 'Hello World'
});
```
#### Image
```
let image = msg.image({
    content: 'https://d.line-scdn.net/n/_s1/_0/linecorp-web-uit/images/line_icon_200_v3.jpg',
    thumbnail: 'https://d.line-scdn.net/n/_s1/_0/linecorp-web-uit/images/line_icon_200_v3.jpg'
});
```
#### Video
```
let video = msg.video({
    content: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnail: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'
});
```
#### Audio
```
let audio = msg.audio({
    content: 'http://techslides.com/demos/samples/sample.m4a',
    duration: 60000
});
```
#### Location
```
let location = msg.location({
    title: 'LINE Company (Thailand) Limited',
    address: '127 อาคารเกษร ทาวเวอร์ Ratchadamri Rd, ลุมพินี Pathum Wan District, Bangkok 10330',
    lat: 13.7457856,
    lng: 100.5411365
});
```
#### Imagemap
Simply provide an understandable phrase to describe the action's area.
###### 4 actions
<img src="https://github.com/kanmanus/line-msg/blob/master/assets/templatey.png">

* top-left
* top-right
* bottom-left
* bottom-right

###### 2 actions (Horizontal)
<img src="https://github.com/kanmanus/line-msg/blob/master/assets/template2x.png">

* full-left
* full-right

###### 2 actions (Vertical)
<img src="https://github.com/kanmanus/line-msg/blob/master/assets/template2y.png">

* full-top
* full-bottom

```
let imagemap = msg.imagemap({
    content: 'https://placeimg.com/1000/1000/tech/sepia',
    altText: 'One home run is much better than two doubles. - Steve Jobs',
    width: 1000,
    height: 1000,
    actions: [
        {
            uri: 'https://apple.com',
            pos: 'top-left'
        },
        {
            uri: 'https://google.com',
            pos: 'top-right'
        },
        {
            text: 'Clicked!',
            pos: 'bottom-right'
        }
    ]
});
```
