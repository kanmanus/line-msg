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

| Type                   | Template | Position Values                                     |
|------------------------|----------|-----------------------------------------------------|
| 2 actions (Horizontal) | <img src="https://github.com/kanmanus/line-msg/blob/master/assets/template2x.png"> | <ul><li>full-left</li><li>full-right</li></ul>|
| 2 actions (Vertical)   | <img src="https://github.com/kanmanus/line-msg/blob/master/assets/template2y.png"> | <ul><li>full-top</li><li>full-bottom</li></ul>|
| 4 actions              | <img src="https://github.com/kanmanus/line-msg/blob/master/assets/template4.png"> | <ul><li>top-left</li><li>top-right</li><li>bottom-left</li><li>bottom-right</li></ul>|

Example code:
```
let imagemap = msg.imagemap({
    content: 'https://placeimg.com/1000/1000/tech/sepia',
    altText: 'One home run is much better than two doubles. - Steve Jobs',
    width: 1000,
    height: 1000,
    actions: [
        {
            uri: 'https://example.com/link/1',
            pos: 'top-left'
        },
        {
            uri: 'https://example.com/link/2',
            pos: 'top-right'
        },
        {
            text: 'Clicked!',
            pos: 'bottom-right'
        }
    ]
});
```
#### Buttons Template
````
let buttons = msg.buttons({
    title: 'Brown Cafe',
    altText: 'Brown Cafe',
    text: 'Enjoy delicious food with a great atmosphere at our place',
    defaultAction: {
        label: 'Reserve',
        uri: 'https://example.com/reserve'
    },
    actions: [
        {
            label: 'Reserve',
            uri: 'https://example.com/reserve'
        },
        {
            label: 'Greeting Message',
            text: 'Hi, there!'
        }
    ],
    image: {
        url: 'https://placeimg.com/800/600/tech/sepia',
        ratio: 'rectangle',
        size: 'cover',
        bgColor: '#FFF'
    }
});
````
#### Confirm Template
````
let confirm = msg.confirm({
    altText: 'Confirm Template',
    text: 'Are you sure?',
    actions: [
        {
            label: 'Yes',
            text: 'yes'
        },
        {
            label: 'No',
            text: 'no'
        }
    ]
});
````
#### Image Carousel Template
````
let imageCarousel = msg.imageCarousel({
    altText: 'Social Media Platforms',
    images: [
        {
            url: 'https://d.line-scdn.net/n/_s1/_0/linecorp-web-uit/images/line_icon_200_v3.jpg',
            actions: [
                {
                    label: 'Website',
                    uri: 'https://line.me'
                },
                {
                    label: 'Greeting Message',
                    text: 'Hi, we are LINE platform'
                }
            ]
        },
        {
            url: 'https://i.site.pictures/RALuu.jpg',
            actions: [
                {
                    label: 'Website',
                    uri: 'https://facebook.com'
                },
                {
                    label: 'Greeting Message',
                    text: 'Hi, we are Facebook platform'
                }
            ]
        }
    ]
});
````
