const msg = require('../src/line-msg/MessageObject');
const util = require('util');

let test = () => {
    let array = {
        text: msg.text({
            text: 'Hello World key (:love) (:happy) (:love)'
        }),
        image: msg.image({
            content: 'https://d.line-scdn.net/n/_s1/_0/linecorp-web-uit/images/line_icon_200_v3.jpg',
            thumbnail: 'https://d.line-scdn.net/n/_s1/_0/linecorp-web-uit/images/line_icon_200_v3.jpg'
        }),
        video: msg.video({
            content: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'
        }),
        audio: msg.audio({
            content: 'http://techslides.com/demos/samples/sample.m4a',
            duration: 60000
        }),
        location: msg.location({
            title: 'LINE Company (Thailand) Limited',
            address: '127 อาคารเกษร ทาวเวอร์ Ratchadamri Rd, ลุมพินี Pathum Wan District, Bangkok 10330',
            lat: 13.7457856,
            lng: 100.5411365
        }),
        imagemap: msg.imagemap({
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
        }),
        buttons: msg.buttons({
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
        }),
        confirm: msg.confirm({
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
        }),
        images: msg.imageCarousel({
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
        })
    }

    console.log(util.inspect(array, { showHidden: false, depth: null }));
}

test();
