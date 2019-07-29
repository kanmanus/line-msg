class MessageObject {
    constructor() {
        this.emojis = {
            '(:love)': '0x100078',
            '(:happy)': '0x10008D',
            '(:sad)': '0x10007C',
            '(:angry)': '0x10007E',
            '(:laugh)': '0x100079',
            '(:cry)': '0x100094'
        };
    }

    text({ text }) {
        return {
            type: 'text',
            text: this.transform(text)
        };
    }

    image({ content, thumbnail }) {
        return {
            type: 'image',
            originalContentUrl: content,
            previewImageUrl: thumbnail
        };
    }

    video({ content, thumbnail }) {
        return {
            type: 'video',
            originalContentUrl: content,
            previewImageUrl: thumbnail
        };
    }

    audio({ content, duration }) {
        return {
            type: 'audio',
            originalContentUrl: content,
            duration
        };
    }

    location({ title, address, lat, lng }) {
        return {
            type: 'location',
            title,
            address,
            latitude: lat,
            longitude: lng
        };
    }

    imagemap({ content, altText, width, height, actions }) {
        let actionsArray = [];

        actions.forEach(({ uri, text, pos }) => {
            if (uri !== undefined)
                actionsArray.push(this.imagemapAction('uri', uri, pos, width, height));
            else
                actionsArray.push(this.imagemapAction('message', text, pos, width, height));
        });

        return {
            type: 'imagemap',
            baseUrl: content,
            altText,
            baseSize: { width, height },
            actions: actionsArray
        };
    }

    buttons({ title, altText, text, defaultAction, actions, image }) {
        let template = { type: 'buttons' };
        let actionsArray = [];

        actions.forEach(({ label, uri, text }) => {
            if (uri !== undefined)
                actionsArray.push(this.action('uri', label, uri));
            else
                actionsArray.push(this.action('message', label, text));
        });

        if (title != undefined) template.title = title;

        template.text = text;

        if (image !== undefined) {
            if (image.url) template.thumbnailImageUrl = image.url;
            if (image.ratio) template.imageAspectRatio = image.ratio;
            if (image.size) template.imageSize = image.size;
            if (image.bgColor) template.imageBackgroundColor = image.bgColor;
        }

        if (defaultAction) template.defaultAction = defaultAction;

        template.actions = actionsArray;

        return {
            type: 'template',
            altText: altText || 'Buttons Template',
            template
        };
    }

    confirm({ altText, text, actions }) {
        let actionsArray = [];

        actions.forEach(({ label, uri, text }, index) => {
            if (index < 2) {
                if (uri !== undefined)
                    actionsArray.push(this.action('uri', label, uri));
                else
                    actionsArray.push(this.action('message', label, text));
            }
        });

        return {
            type: 'template',
            altText: altText || 'Confirm Template',
            template: {
                type: 'confirm',
                text,
                actions: actionsArray
            }
        };
    }

    imageCarousel({ altText, images }) {
        let imagesArray = [];

        images.forEach(({ url, actions }) => {
            let actionsArray = [];

            actions.forEach(({ label, uri, text }, index) => {
                if (uri !== undefined)
                    actionsArray.push(this.action('uri', label, uri));
                else
                    actionsArray.push(this.action('message', label, text));
            });

            imagesArray.push({
                imageUrl: url,
                action: actionsArray
            });
        });

        return {
            type: 'template',
            altText: altText || 'Carousel Template',
            template: {
                type: 'image_carousel',
                columns: imagesArray
            }
        };
    }

    // Action Object
    action(type, label, text) {
        if (type === 'uri')
            return { type, label, linkUri: text };
        else
            return { type, label, text };
    }

    imagemapAction(type, text, pos, width, height) {
        let area = this.getArea(pos, width, height);

        if (type === 'uri')
            return { type, linkUri: text, area };
        else
            return { type, text, area };
    }

    // Text Transformation, allows using 'emoji' with a more understandable phrase
    transform(msg) {
        for (let key in this.emojis)
            msg = msg.replace(new RegExp(key, 'g'), this.emojis[key])

        return msg;
    }

    // Get Area Function
    getArea(pos, width, height) {
        switch (pos) {
            case 'full-top': return { x: 0, y: 0, width, height: height/2 }; break;
            case 'full-bottom': return { x: 0, y: height/2, width, height: height/2 }; break;
            case 'full-left': return { x: 0, y: 0, width: width/2, height }; break;
            case 'full-right': return { x: width/2, y: 0, width: width/2, height }; break;
            case 'top-left': return { x: 0, y: 0, width: width/2, height: height/2 }; break;
            case 'top-right': return { x: width/2, y: 0, width: width/2, height: height/2 }; break;
            case 'bottom-left': return { x: 0, y: height/2, width: width/2, height: height/2 }; break;
            case 'bottom-right': return { x: width/2, y: height/2, width: width/2, height: height/2 }; break;
            default: return { x: 0, y: 0, width, height }; break;
        }
    }
}

module.exports = new MessageObject();
